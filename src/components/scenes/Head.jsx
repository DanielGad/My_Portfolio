import '../../assets/head.css'
import {  useContext } from 'react';
import { Context } from '../Context';

const Head = () => {
  
  const { isVisible } = useContext(Context);

  return (
    <div className="head-container" id='home'>
      <div className={` name-container left-slide-in-element ${isVisible ? 'visible' : ''}`}>
        <div className="hello">Hello World!</div>
        <div className="im">I&apos;m</div>
        <div className="name">Adeyemi Oluwagbenga Daniel (Gad)
        </div>
        <div className='work-skill'>Frontend Developer || Graphics Designer</div>
      </div>
      <div className={` gad-image-cont right-slide-in-element ${isVisible ? 'visible' : ''}`}>
        <img src="./gad.png" alt="gad" className='gad-image' width={'120%'} />
      </div>
      
    </div>
  )
}

export default Head