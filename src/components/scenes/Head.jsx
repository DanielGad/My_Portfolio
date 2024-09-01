import '../../assets/head.css'
import {  useContext } from 'react';
import { Context } from '../Context';
import { Link } from 'react-scroll';

const Head = () => {
  
  const { isVisible } = useContext(Context);

  return (
    <div className="head-container" id='home'>
      <div className={` name-container left-slide-in-element ${isVisible ? 'visible' : ''}`}>
        <div className="hello">Hello World!</div>
        <div className="im">I&apos;m</div>
        <div className="name">Daniel Gad
        </div>
        <div className='work-skill'>A Frontend Developer and Graphics Designer</div>

        <div className="button-2">
        <a href="./Daniel_Gad_CV.pdf" download="Daniel_Gad_CV"><button className="cv">Download My CV</button></a>
          <Link to={'contact'} smooth={true} duration={500} offset={-150}>
          <button className="contactme">Contact Me</button>
          </Link>
        </div>
      </div>
      <div className={` gad-image-cont right-slide-in-element ${isVisible ? 'visible' : ''}`}>
        
        <img src="./gad.png" alt="gad" className='gad-image' width={'120%'} />
      </div>
      {/* <div className='star-1'>
          <img src="./star.png" alt="200px" />
        </div> */}
    </div>
  )
}

export default Head