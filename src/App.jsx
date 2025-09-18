import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import EventsPage from './components/EventsPage';
import ContactPage from './components/ContactPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'gallery':
        return <GalleryPage setCurrentPage={setCurrentPage} />;
      case 'events':
        return <EventsPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      case 'home':
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };
    
  return (
    <div className="bg-gray-900 font-sans">
      {renderPage()}
    </div>
  );
};
    
export default App;