// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-lg z-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white !no-underline hover:text-gray-300 transition-colors animate-bounce-in">
              J<span className="text-white">Lasota</span>
            </a>
            {/* Hamburger Icon - visible only on mobile */}
            <div className={`w-6 h-6 relative cursor-pointer z-40 md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} onClick={() => setMenuOpen((prev) => !prev)}>
              <div className={`w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-full h-0.5 bg-white mt-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-white mt-1.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="inline-flex items-center justify-center h-10 px-3 text-sm md:text-base font-mono font-medium text-white !no-underline hover:text-gray-300 transition-colors duration-200">Home</a>
              <a href="#about" className="inline-flex items-center justify-center h-10 px-3 text-sm md:text-base font-mono font-medium text-white !no-underline hover:text-gray-300 transition-colors duration-200">About</a>
              <a href="#skills" className="inline-flex items-center justify-center h-10 px-3 text-sm md:text-base font-mono font-medium text-white !no-underline hover:text-gray-300 transition-colors duration-200">Skills</a>
              <a href="#projects" className="inline-flex items-center justify-center h-10 px-3 text-sm md:text-base font-mono font-medium text-white !no-underline hover:text-gray-300 transition-colors duration-200">Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center h-10 px-3 text-sm md:text-base font-mono font-medium text-white !no-underline hover:text-gray-300 transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Navbar;




