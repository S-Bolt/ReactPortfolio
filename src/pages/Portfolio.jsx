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
        title: 'Project 2',
        image: '/project-2.jpg',
        deployedLink: 'deloployed-link.com',
        githubLink: 'https://github.com/S-Bolt/TextEditor',

    },
    {
        title: 'Project 3',
        image: '/project-3.jpg',
        deployedLink: 'deloployed-link.com',
        githubLink: 'https://github.com/S-Bolt/OriolesThemedBlog',

    },
    {
        title: 'Project 4',
        image: '/project-4.jpg',
        deployedLink: 'deloployed-link.com',
        githubLink: 'https://github.com/S-Bolt/ReactPortfolio',

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
      <div className="technologies mt-5">
        <h3>Technologies I Use</h3>
        <div className="tech-icons">
            <i className="devicon-javascript-plain colored" title="JavaScript" style={{ fontSize: '50px' }}></i>
            <i className="devicon-react-original colored" title="React" style={{ fontSize: '50px' }}></i>
            <i className="devicon-css3-plain colored" title="CSS3" style={{ fontSize: '50px' }}></i>
            <i className="devicon-bootstrap-plain colored" title="Bootstrap" style={{ fontSize: '50px' }}></i>
            <i className="devicon-tailwindcss-plain colored" title="Tailwind CSS" style={{ fontSize: '50px' }}></i>
            <i className="devicon-github-original colored" title="GitHub" style={{ fontSize: '50px' }}></i>
            <i className="devicon-html5-plain colored" title="HTML5" style={{ fontSize: '50px' }}></i>
            <i className="devicon-vitejs-plain colored" title="Vite" style={{ fontSize: '50px' }}></i>
            <i className="devicon-nodejs-plain colored" title="Node.js" style={{ fontSize: '50px' }}></i>
            <i className="devicon-express-original colored" title="Express.js" style={{ fontSize: '50px' }}></i>
            <i className="devicon-postgresql-plain colored" title="PostgreSQL" style={{ fontSize: '50px' }}></i>
            <i className="devicon-mongodb-plain colored" title="MongoDB" style={{ fontSize: '50px' }}></i>
            <i className="devicon-sequelize-plain colored" title="Sequelize" style={{ fontSize: '50px' }}></i>
     
        </div>
      </div>
    </div>
 )
}

export default Portfolio;