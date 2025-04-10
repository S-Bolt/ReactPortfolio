import { FaGithub } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "CLRizz",
      image: "/CLRizz.png",
      deployedLink: "https://cover-letter-creator-psi.vercel.app/",
    },
    {
      title: "The Bird Bath",
      image: "/birdbathsite.png",
      deployedLink: "https://thebirdbath-frontend.onrender.com/",
      githubLink: "https://github.com/S-Bolt/Orioles",
    },
    {
      title: "Quantico",
      image: "/QuanticoWebsite.png",
      deployedLink: "https://quanticoharvest.onrender.com/",
      githubLink: "https://github.com/S-Bolt/quanticoHarvest",
    },
    {
      title: "WeatherApp",
      image: "/WeatherApp.png",
      deployedLink: "https://s-bolt.github.io/Weather-Forecast/",
      githubLink: "https://github.com/S-Bolt/Weather-Forecast",
    },
    {
      title: "Frontend Challenges",
      image: "/frontend-mentor.png",
      deployedLink: "https://front-end-challenges-lac.vercel.app/",
      githubLink: "https://github.com/S-Bolt/FrontEndChallenges",
    },
  ];

  return (
    <div className="container-project">
      <h2 className="title">Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <div className="laptop-frame">
              <div className="background-square"></div>
              <img
                src="/laptop-transparent.png"
                alt="Laptop Frame"
                className="laptop"
              />
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </a>
            </div>
            <div>
              <h3>{project.title}</h3>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                GitHub <FaGithub size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
