import { useState, useEffect, createContext } from "react";
import { node } from 'prop-types';
import useMediaQuery from './useMediaQuery';

export const Context = createContext();

export const Provider = ({ children }) => {

  // control hamburger menu and small screen
  const isSmallScreen = useMediaQuery("(max-width: 859px)");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

///////////////////////
// Control the menu when scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) { 
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

  //////////////////////////
  // Control the slide effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.slide-in');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])




  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Context.Provider value={{
      isSmallScreen, isMenuOpen, isScrolled, isVisible, toggleMenu, setIsMenuOpen
    }}>
      {children}
    </Context.Provider>
  )
};

Provider.propTypes = {
  children: node.isRequired
};


