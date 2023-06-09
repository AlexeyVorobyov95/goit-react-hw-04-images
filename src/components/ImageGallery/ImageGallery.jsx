import { getApi } from '../../server/Api';
import { useState, useEffect } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export function ImageGallery({ onClick, page, value }) {
  const [image, setImage] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (value === '') {
      return;
    }
    if (page === 1) {
      setImage([]);
    }

    setStatus('panding');

    getApi(value, page).then(image => {
      if (image.hits.length === 0) {
        alert(`No results were found for your request`);
      }

      const totalPages = Math.ceil(image.totalHits / 12);
      if (page > totalPages || page === totalPages) {
        setStatus('resolved');
        alert(`You reached end of results`);
        return;
      } else {
        setImage(prevState => {
          return [...prevState, ...image.hits];
        });
        setStatus('resolved');
      }
    });
  }, [value, page]);

  return (
    <>
      {image.length > 0 && (
        <GalleryList>
          {image.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webImage={webformatURL}
              largeImage={largeImageURL}
              tags={tags}
            />
          ))}
        </GalleryList>
      )}
      {status === `panding` && <Loader />}
      {status === `resolved` && <Button onClick={onClick} />}
    </>
  );
}
//
ImageGallery.propTypes = {
  page: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
