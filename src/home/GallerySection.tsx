import React, { useState } from 'react';
import '../home-style/home-style.css';

// Importar las imágenes
import plato1 from '../assets/plato1.jpeg';
import plato2 from '../assets/plato2.jpeg';
import plato3 from '../assets/plato3.jpeg';
import plato4 from '../assets/plato4.jpeg';
import plato5 from '../assets/plato5.jpeg';
import plato6 from '../assets/plato6.jpeg';
import plato7 from '../assets/plato7.jpeg';
import plato8 from '../assets/plato8.jpeg';
import plato9 from '../assets/plato9.jpeg';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Estado para la imagen seleccionada
  
  const images = [
    { src: plato1, alt: 'Imagen 1' },
    { src: plato2, alt: 'Imagen 2' },
    { src: plato3, alt: 'Imagen 3' },
    { src: plato4, alt: 'Imagen 4' },
    { src: plato5, alt: 'Imagen 5' },
    { src: plato6, alt: 'Imagen 6' },
    { src: plato7, alt: 'Imagen 7' },
    { src: plato8, alt: 'Imagen 8' },
    { src: plato9, alt: 'Imagen 9' },
  ];

  // Función para abrir el modal
  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <header className="bannertotal gallery-banner">
        <h2>Galería</h2>
        <p>Descubre nuestra maestría en ahumados a través de una experiencia única</p>
      </header>

      <section>
        <div className="gallery">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="gallery-image"
              onClick={() => openModal(image.src)} // Abre el modal con la imagen seleccionada
            />
          ))}
        </div>
      </section>

      {/* Modal que se muestra cuando se hace clic en la imagen */}
      {selectedImage && (
        <div className={`modal ${selectedImage ? 'show' : ''}`} onClick={closeModal}>
          {/* Cierra el modal si se hace clic fuera de la imagen */}
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Imagen grande" className="modal-image" />
            <button className="close" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;