import '../assets/menu.css';
import GadLogo from '/G.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { Context } from './Context';
import { Link } from 'react-scroll';

const Menu = () => {
  const { isMenuOpen, isSmallScreen, toggleMenu, isScrolled, isVisible } = useContext(Context);

  return (
    <div className={`menu-container ${isScrolled ? 'scrolled' : 'top'}`}>
      <div className={`logo-container ${isScrolled ? 'scrolled-2' : ''}`}>
      <Link to={'home'} smooth={true} duration={500} offset={-100}>
                <img src={GadLogo} alt="Gad-Logo" width={"50px"}/>
            </Link>
        
      </div>

      <div>
      {isSmallScreen ? 
        <div className={`icon-div right-slide-in-element ${isVisible ? 'visible' : ''}`} onClick={toggleMenu}>
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

            <Link to={'contact'} smooth={true} duration={500} offset={-100}>
              <div>
                Contact
              </div>
            </Link>
          
          </div>
      } 
      {/* {
        isMenuOpen ? 'slide-in left-slide-in' : ''
      } */}
      </div>
    
    </div>
  )
}

export default Menu