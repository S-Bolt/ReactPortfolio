import React from "react";

function Portfolio() {
 const projects = [
    {
        title: 'Project 1',
        image: 'image.jpg',
        deployedLink: 'deloployed-link.com',
        githubLink: 'github-link.com',

    },
    {
        title: 'Project 2',
        image: 'image.jpg',
        deployedLink: 'deloployed-link.com',
        githubLink: 'github-link.com',

    },
    {
        title: 'Project 3',
        image: 'image.jpg',
        deployedLink: 'deloployed-link.com',
        githubLink: 'github-link.com',

    },
    {
        title: 'Project 4',
        image: 'image.jpg',
        deployedLink: 'deloployed-link.com',
        githubLink: 'github-link.com',

    },
 ];

 return (
    <div>
        <h2>Portfolio</h2>
        <div className="project-list">
            {projects.map((project, index) => (
                <div key={index} className="project-item">
                    <img src="project.image" alt="project.title" />
                    <h3>{project.title}</h3>
                    <a href="{project.deployedLink}" target="_blank">
                        Deployed Applicaiton
                    </a>
                    <a href="{project.githubLink}" target="_blank">
                        GitHub Repository
                    </a>
                </div>
            ))}
        </div>
    </div>
 )
};

export default Portfolio;