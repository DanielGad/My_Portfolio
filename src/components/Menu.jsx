import '../assets/menu.css';
import GadLogo from '/G.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { Context } from './Context';
import { Link } from 'react-scroll';

const Menu = () => {
  const { isMenuOpen, isSmallScreen, toggleMenu, isScrolled  } = useContext(Context);

  const storedTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`menu-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className={`logo-container ${isScrolled ? 'scrolled-2' : ''}`}>
      <Link to={'home'} smooth={true} duration={500} offset={-100}>
                <img src={GadLogo} alt="Gad-Logo" width={"50px"}/> 
            </Link>
        
      </div>

      <div className='ccc'>
      <button onClick={toggleTheme} className='theme' style={{ fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer' }}> 
        {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
      </button>
      {isSmallScreen ? 
        <div className={`icon-div`} onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars }/>
        </div>
       : 
        <div className='menu-link-container'>
            <Link to={'home'} smooth={true} duration={500} offset={-100}>
              <div>
                Home
              </div>
            </Link>
          
            <Link to={'about'} smooth={true} duration={500} offset={-100}>
              <div>
                About
              </div>
            </Link>

            <Link to={'skill'} smooth={true} duration={500} offset={-100}>
              <div>
                Skills
              </div>
            </Link>

            <Link to={'project'} smooth={true} duration={500} offset={-100}>
            <div>
                Projects
              </div>
            </Link>

            <Link to={'contact'} smooth={true} duration={500} offset={-150}>
              <div>
                Contact
              </div>
            </Link>
          
          </div>
      } 

      </div>
    
    </div>
  )
}

export default Menu