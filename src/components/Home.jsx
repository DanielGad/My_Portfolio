import '../assets/home.css';
import { useContext } from 'react';
import { Context } from './Context';
import Head from './scenes/Head';
import About from './scenes/About';
import Skill from './scenes/Skill';
import { Link } from 'react-scroll';
import Project from './scenes/Project';
import Contact from './scenes/Contact';
import Footer from './scenes/Footer';


const Home = () => {
  const { isMenuOpen, setIsMenuOpen, isSmallScreen } = useContext(Context);

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     window.scrollTo(0, 0);
  //   };

  //   window.addEventListener('unload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('unload', handleBeforeUnload);
  //   };
  // }, []);

  if (!isSmallScreen == true) {
    setIsMenuOpen(false)
  }

  const handleMenuClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="home-container">
      <div>
        {isMenuOpen ? <div className={`hambuger-menu ${isMenuOpen ? 'open' : 'not'}`}>

            <Link to={'home'} smooth={true} duration={500} onClick={handleMenuClick} offset={-100}>
              <div>
                Home
              </div>
            </Link>

            <Link to={'about'} smooth={true} duration={500} onClick={handleMenuClick} offset={-100}>
              <div>
                About Me
              </div>
            </Link>

            <Link to={'skill'} smooth={true} duration={500} onClick={handleMenuClick} offset={-100}>
              <div>
                Skills
              </div>
            </Link>

            <Link to={'project'} smooth={true} duration={500} onClick={handleMenuClick} offset={-100}>
              <div>
                Projects
              </div>
            </Link>

            <Link to={'contact'} smooth={true} duration={500} onClick={handleMenuClick} offset={-150}>
              <div>
                Contact
              </div>
            </Link>

        </div> : ""}
      </div>

      <Head />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />

    </div>
  )
}

export default Home