import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay } from './Modal.styled';
// eslint-disable-next-line
const modalRoot = document.querySelector('#modal-root');

export function Modal({ onClose, largeImage, tags }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <div>
        <img src={largeImage} alt={tags} />
      </div>
    </Overlay>
  );
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};
