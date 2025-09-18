import React from 'react';
import Header from './Header';
import Footer from './Footer';

const HomePage = ({ setCurrentPage }) => (
  <div className="bg-gray-900 text-white min-h-screen font-sans">
    <Header setCurrentPage={setCurrentPage} />
    <main className="relative h-screen flex flex-col justify-center items-center text-center px-4 hero-background">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10">
       <img src="/images/logo.png" alt="Kabouk Event Logo" className="mb-0 w-[750px] mx-auto" />
       <p className="text-xl md:text-2xl text-gray-200 mb-8">
        Erleben Sie unvergessliche kurdische Events in Berlin
       </p>
        <button
          onClick={() => setCurrentPage('about')}
          className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full text-xl shadow-lg hover:bg-yellow-500 transition-colors duration-300"
        >
          Mehr über uns
        </button>
      </div>
    </main>
    <Footer />
  </div>
);

export default HomePage;