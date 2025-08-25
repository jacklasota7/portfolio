import { useState, useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { LoadingScreen } from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import "./css/index.css";
import MobileMenu from "./components/MobileMenu";
import Skills from "./components/Skills";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Add smooth scrolling behavior
    const handleSmoothScroll = (e) => {
      if (e.target.hash) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup function
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, [isLoaded]);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
