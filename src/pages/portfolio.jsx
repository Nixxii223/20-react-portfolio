import React from 'react';
import './styles.css';

const projects = [
    
    {
        title: 'Another project1',
        image: 'https://via.placeholder.com/150',
        appLink: 'https://dougspardel.github.io/CranBerryStuffing/',
        repoLink: 'https://github.com/DougSpardel/CranBerryStuffing.git',
    },
    {
        title: 'Another project2',
        image: 'https://via.placeholder.com/150',
        appLink: 'https://dougspardel.github.io/CranBerryStuffing/',
        repoLink: 'https://github.com/DougSpardel/CranBerryStuffing.git',
    },
    {
        title: 'Another project3',
        image: 'https://via.placeholder.com/150',
        appLink: 'https://dougspardel.github.io/CranBerryStuffing/',
        repoLink: 'https://github.com/DougSpardel/CranBerryStuffing.git',
    },
    {
        title: 'Another project4',
        image: 'https://via.placeholder.com/150',
        appLink: 'https://dougspardel.github.io/CranBerryStuffing/',
        repoLink: 'https://github.com/DougSpardel/CranBerryStuffing.git',
    },{
        title: 'Moodsic',
        image: 'https://via.placeholder.com/150',
        appLink: 'https://dougspardel.github.io/CranBerryStuffing/',
        repoLink: 'https://github.com/DougSpardel/CranBerryStuffing.git',
    },
    {
        title: 'Another project5',
        image: 'https://via.placeholder.com/150',
        appLink: 'https://dougspardel.github.io/CranBerryStuffing/',
        repoLink: 'https://github.com/DougSpardel/CranBerryStuffing.git',
    },

];

function Project({ project }) {
    return (
        <div>
            <h2>{project.title}</h2>
            <a href={project.appLink} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
            </a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                GitHub Repository
            </a>
        </div>
    );
}

export default function Projects() {
    return (
        <div className="projects-container">
            {projects.map((project) => (
                <Project key={project.title} project={project} />
            ))}
        </div>
    );
}