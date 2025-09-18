import React, { useState, useEffect } from 'react';

const Header = ({ setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
    
  const handleCloseMenuAndNavigate = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-20 p-4 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
      <button onClick={() => setCurrentPage('home')} className="text-3xl font-extrabold text-yellow-400 tracking-wide">
       KABOUK EVENT
      </button>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg">
            <li><button onClick={() => setCurrentPage('home')} className="hover:text-yellow-400 transition-colors duration-300">Startseite</button></li>
            <li><button onClick={() => setCurrentPage('about')} className="hover:text-yellow-400 transition-colors duration-300">Über uns</button></li>
            <li><button onClick={() => setCurrentPage('gallery')} className="hover:text-yellow-400 transition-colors duration-300">Galerie</button></li>
            <li><button onClick={() => setCurrentPage('events')} className="hover:text-yellow-400 transition-colors duration-300">Veranstaltungen</button></li>
            <li><button onClick={() => setCurrentPage('contact')} className="hover:text-yellow-400 transition-colors duration-300">Kontakt</button></li>
          </ul>
        </nav>
        <button onClick={handleMobileMenuToggle} className="md:hidden text-white focus:outline-none z-50">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {/* Mobile menu content - New, more reliable implementation */}
      {isMobileMenuOpen && (
        <div className={`md:hidden mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="menu-header">
            <button
              onClick={handleMobileMenuToggle}
              className="text-white text-3xl font-bold focus:outline-none"
            >
              &times;
            </button>
            <div className="flex-1 ml-4">
              <input type="text" placeholder="Suche..." className="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
            </div>
          </div>
          <nav className="menu-links">
            <button onClick={() => handleCloseMenuAndNavigate('home')}>Startseite</button>
            <button onClick={() => handleCloseMenuAndNavigate('about')}>Über uns</button>
            <button onClick={() => handleCloseMenuAndNavigate('gallery')}>Galerie</button>
            <button onClick={() => handleCloseMenuAndNavigate('events')}>Veranstaltungen</button>
            <button onClick={() => handleCloseMenuAndNavigate('contact')} style={{ borderBottom: 'none' }}>Kontakt</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;