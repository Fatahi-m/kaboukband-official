import React from 'react';

const Footer = () => (
  <footer className="w-full text-center p-4 bg-black bg-opacity-70 text-gray-400 border-t border-gray-700">
    <p className="text-sm">
      &copy; {new Date().getFullYear()} Kabouk Event. Alle Rechte vorbehalten.
    </p>
  </footer>
);

export default Footer;