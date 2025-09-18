import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const GalleryPage = ({ setCurrentPage }) => {
  const data = {
    de: {
      pageTitle: "Galerie",
      images: [
        { id: 1, url: 'images/gallery-image1.jpg', alt: 'Kabouk Band bei einem Konzert' },
        { id: 2, url: 'images/gallery-image2.jpg', alt: 'Sänger Mukhtar Fatahi' },
        { id: 3, url: 'images/gallery-image3.jpg', alt: 'Bandmitglieder auf der Bühne' },
        { id: 4, url: 'images/gallery-image4.jpg', alt: 'Gitarrist Farhad Amini' },
      ],
    },
  };
  const [selectedImage, setSelectedImage] = useState(null);
    
  const handleImageClick = (url) => {
    setSelectedImage(url);
  };
    
  const handleClose = () => {
    setSelectedImage(null);
  };
    
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header setCurrentPage={setCurrentPage} />
      <main className="container mx-auto p-8 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400">{data.de.pageTitle}</h1>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.de.images.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => handleImageClick(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={handleClose}
        >
          <div className="max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Selected image"
              className="w-full h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};
    
export default GalleryPage;