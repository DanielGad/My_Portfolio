// import { Link } from 'react-router-dom'
import '../../assets/project.css'

const Project = () => {
  return (
    <div className='project-container' id='project'>
      <div className='project-txt slide-in left-slide-in'>Projects</div>
      <div className='project-body'>
        <div className='pro slide-in bottom-slide-in'>
          <img src="/myport.png" alt="image" width={'100%'}/>
          <h2>Gadhub Portfolio</h2>
          
          <a href="https://gadhub.netlify.app/">
          <button>Preview Project</button>
          </a>
        </div>

        <div className='pro slide-in bottom-slide-in'>
          <img src="/evo.png" alt="image" width={'100%'}/>
          <h2>EVOGYM</h2>
          <a href="https://evogymcloneproject.netlify.app/">
          <button>Preview Project</button>
          </a>
        </div>

        <div className='pro slide-in bottom-slide-in'>
          <img src="/cnn.png" alt="image" width={'100%'}/>
          <h2>CNN Clone</h2>
        
          <a href="https://incandescent-axolotl-9a8c84.netlify.app/">
          <button>Preview Project</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project