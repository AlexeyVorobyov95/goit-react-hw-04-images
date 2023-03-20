import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { Items, Image } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export function ImageGalleryItem({ webImage, largeImage, tags }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Items>
      <Image onClick={setIsModalOpen} src={webImage} alt={tags} width={300} />
      {isModalOpen && (
        <Modal onClose={setIsModalOpen} largeImage={largeImage} tags={tags} />
      )}
    </Items>
  );
}

ImageGalleryItem.propsTypes = {
  webImage: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
