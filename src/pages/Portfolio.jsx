import { FaGithub } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';



function Portfolio() {
 const projects = [
    {
        title: 'The Bird Bath',
        image: '/birdbathsite.png',
        deployedLink: 'https://thebirdbath-frontend.onrender.com/',
        githubLink: 'https://github.com/S-Bolt/Orioles',

    },
    {
        title: 'WeatherApp',
        image: '/WeatherAppPhoto.png',
        deployedLink: 'https://s-bolt.github.io/Weather-Forecast/',
        githubLink: 'https://github.com/S-Bolt/Weather-Forecast',

    },
 ];

 return (
    <div className="container-project  p-3 mb-5">
        <h2 className='text-left mb-5 p-3'>Projects</h2>
        <div className="project-list">
            {projects.map((project, index) => (
                <div key={index} className="project-item">
                    <div className='laptop-frame'>
                        <img src="/laptop-transparent.png" alt="Laptop Frame" className="laptop" />
                            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.title} className="project-image"/> 
                            </a>
                    </div>
                        <div>
                            <h3>{project.title}</h3>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="mx-2">
                                    GitHub  <FaGithub size={20} />
                                </a>
                            
                        </div>
                </div>
            ))}
        </div>
        {/* Technologies Section */}
      <div className="technologies">
        <div className="tech-icons">
            
            <i className="devicon-javascript-plain colored neon-icon" title="JavaScript" style={{ fontSize: '50px' }}></i>
            <i className="devicon-react-original colored neon-icon" title="React" style={{ fontSize: '50px' }}></i>
            <i className="devicon-css3-plain colored neon-icon" title="CSS3" style={{ fontSize: '50px' }}></i>
            <i className="devicon-bootstrap-plain colored neon-icon" title="Bootstrap" style={{ fontSize: '50px' }}></i>
            <i className="devicon-tailwindcss-plain colored neon-icon" title="Tailwind CSS" style={{ fontSize: '50px' }}></i>
            <i className="devicon-github-original colored neon-icon" title="GitHub" style={{ fontSize: '50px' }}></i>
            <i className="devicon-html5-plain colored neon-icon" title="HTML5" style={{ fontSize: '50px' }}></i>
            <i className="devicon-vitejs-plain colored neon-icon" title="Vite" style={{ fontSize: '50px' }}></i>
            <i className="devicon-nodejs-line-wordmark colored neon-icon" title="Node.js" style={{ fontSize: '50px' }}></i>
            <i className="devicon-express-original colored neon-icon" title="Express.js" style={{ fontSize: '50px' }}></i>
            <i className="devicon-postgresql-plain colored neon-icon" title="PostgreSQL" style={{ fontSize: '50px' }}></i>
            <i className="devicon-mongodb-plain colored neon-icon" title="MongoDB" style={{ fontSize: '50px' }}></i>
            <i className="devicon-sequelize-plain colored neon-icon" title="Sequelize" style={{ fontSize: '50px' }}></i>
            
        </div>
      </div>
    </div>
 )
}

export default Portfolio;