import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';

function Portfolio() {
 const projects = [
    {
        title: 'Project 1',
        image: '/project-1.jpg',
        deployedLink: 'deloployed-link.com',
        githubLink: 'https://github.com/S-Bolt/Weather-Forecast',

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
    <div className="container text-center p-3 mb-5">
        <h2>Portfolio</h2>
        <div className="project-list">
            {projects.map((project, index) => (
                <div key={index} className="project-item">
                    <h3>{project.title}</h3>
                    <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={project.title} className="project-image"/> 
                    </a>
                   
                    <div>
                    <a href={project.githubLink} target="_blank">
                        GitHub Repository
                    </a>
                    </div>
                </div>
            ))}
        </div>
    </div>
 )
};

export default Portfolio;