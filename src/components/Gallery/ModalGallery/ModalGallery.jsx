import PropTypes from 'prop-types';
import './ModalGallery.css';

function ModalGallery({ isOpen, imgSrc, imgAlt, onClose, onPrev, onNext }) {
    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className="modal" style={{ display: 'block' }} onClick={handleBackdropClick}>
            <span className="cerrar" onClick={onClose}>&times;</span>
            <img className="modal-contenido fade-in" src={imgSrc} alt={imgAlt} />
            <button className="prev" onClick={onPrev}>&#10094;</button>
            <button className="next" onClick={onNext}>&#10095;</button>
        </div>
    );
}

ModalGallery.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    onPrev: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
};

export default ModalGallery;