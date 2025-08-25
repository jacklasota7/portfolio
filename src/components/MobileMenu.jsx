// Import necessary dependencies
import React from 'react';

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-black/95 z-50 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-7xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>
      <nav className="flex flex-col space-y-8 items-center justify-center h-full">
        <a href="#home" onClick={() => setMenuOpen(false)} className={`font-mono font-semibold text-white text-2xl !no-underline hover:text-gray-300 transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)} className={`font-mono font-semibold text-white text-2xl !no-underline hover:text-gray-300 transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)} className={`font-mono font-semibold text-white text-2xl !no-underline hover:text-gray-300 transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)} className={`font-mono font-semibold text-white text-2xl !no-underline hover:text-gray-300 transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Contact</a>
      </nav>
    </div>
  );
};

export default MobileMenu;

