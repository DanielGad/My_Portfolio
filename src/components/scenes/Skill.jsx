// import { useEffect } from 'react';
import '../../assets/skill.css';

const Skill = () => {
  
  return (
    <div id='skill'>
      <div className="skill-txt slide-in left-slide-in">Skills</div>
      <div className="skill-body">
        <div className='ski slide-in bottom-slide-in'>
          <h2>Web Design and Development</h2>
          <div>
          <img src="/web.jpg" alt="web image" width={'100%'}/>
          </div>
          <div>
            <p>Transforming ideas into functional and visually appealing websites is my specialty. Whether you&apos;re starting from scratch or looking to revamp your online presence, I offer tailored web design and development solutions that cater to your brand and user needs. From responsive layouts to seamless user experiences, I work diligently to bring your vision to life.</p>
              <p><li><b>Responsive Design</b> - Crafted to look stunning across all devices, your website will provide a consistent experience for users on desktop, tablet, and mobile.</li></p>
            <p><li><b>User-Centric Approach</b> - I prioritize user experience, ensuring intuitive navigation and engaging interactions to keep visitors coming back.</li></p>
            <p><li><b>Custom Development</b> - Leveraging HTML, CSS, and JavaScript, I build unique and functional websites that align with your objectives.</li></p>

          </div>
        </div>

        <div className='ski slide-in bottom-slide-in'>
          <h2>Graphics Design</h2>
          <div>
          <img src="/Graphic.jpg" alt="graphic image" width={'100%'}/>
          </div>
          <div>
            <p>Captivating visuals are the heart of effective communication. My graphic design services encompass a wide range of creative solutions that enhance your brand identity and messaging. From logos to marketing collateral, I craft designs that resonate with your target audience.</p>
            <p><li><b>Branding</b> - From business cards to brochures, I create print-ready designs that convey professionalism and creativity.</li></p>
              <p><li><b>Print Materials</b> - Develop a strong brand identity with a memorable logo, color palette, and typography that reflects your mission.</li></p>
            <p><li><b>Digital Assets</b> - Engage your audience online with eye-catching social media graphics, banners, and digital advertisements.</li></p>

          </div>
        </div>
      </div>

      <div className='skill-txt2 slide-in right-slide-in'>Tools</div>
      <div className='logos-cont slide-in bottom-slide-in'>
        <div>
        <img src="/html.png" alt="logos" width={'50%'}/>
        </div>

        <div>
        <img src="/css.png" alt="logos" width={'60%'}/>
        </div>

        <div>
        <img src="/js.png" alt="logos" width={'65%'}/>
        </div>

        <div>
        <img src="/ts.png" alt="logos" width={'100%'}/>
        </div>

        <div>
        <img src="/react.png" alt="logos" width={'50%'}/>
        </div>

        <div>
        <img src="/vite.svg" alt="logos" width={'50%'}/>
        </div>

        <div>
        <img src="/wp.png" alt="logos" width={'50%'}/>
        </div>

        <div>
        <img src="/git.png" alt="logos" width={'50%'}/>
        </div>

        <div>
        <img src="/github.png" alt="logos" width={'50%'}/>
        </div>
        
        <div>
        <img src="/fb.png" alt="logos" width={'50%'}/>
        </div>

        <div>
        <img src="/cd.png" alt="logos" width={'50%'}/>
        </div>

        <div>
        <img src="/ps.png" alt="logos" width={'50%'}/>
        </div>

        <div>
        <img src="/c.png" alt="logos" width={'50%'}/>
        </div>
      </div>
    </div>
  )
}

export default Skill