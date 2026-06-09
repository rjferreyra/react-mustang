import { useState, useEffect } from 'react';
import './Gallery.css';
import ModalGallery from './ModalGallery/ModalGallery';

import g1 from '@/assets/img/Gallery/g1.jpg';
import g2 from '@/assets/img/Gallery/g2.jpg';
import g3 from '@/assets/img/Gallery/g3.jpg';
import g4 from '@/assets/img/Gallery/g4.jpg';
import g5 from '@/assets/img/Gallery/g5.jpg';
import g6 from '@/assets/img/Gallery/g6.jpg';
import g7 from '@/assets/img/Gallery/g7.jpg';

const images = [
    { src: g1, alt: 'Galería imagen 1' },
    { src: g2, alt: 'Galería imagen 2' },
    { src: g3, alt: 'Galería imagen 3' },
    { src: g4, alt: 'Galería imagen 4' },
    { src: g5, alt: 'Galería imagen 5' },
    { src: g6, alt: 'Galería imagen 6' },
    { src: g7, alt: 'Galería imagen 7' },
];

function Gallery () {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);
    const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
    const next = () => setCurrentIndex((i) => (i + 1) % images.length);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'Escape') closeModal();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex]);

    return (
        <>
            <section id="galeria" className="section-full">
                <h2>Galería de Generaciones</h2>
                <div className="grid-galeria">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            className={`item-${i + 1}`}
                            src={img.src}
                            alt={img.alt}
                            onClick={() => openModal(i)}
                            style={{ cursor: 'pointer' }}
                        />
                    ))}
                </div>
            </section>
            <ModalGallery
                isOpen={isOpen}
                imgSrc={images[currentIndex].src}
                imgAlt={images[currentIndex].alt}
                onClose={closeModal}
                onPrev={prev}
                onNext={next}
            />
        </>
    );
};

export default Gallery;
