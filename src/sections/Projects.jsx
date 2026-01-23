import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Expense Tracker",
            description: "A website for monitoring daily expenses to hep users track their spending habits effectively.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "#",
            live: "#"
        },
        {
            title: "Emotion Detection",
            description: "An AI system capable of detecting human emotions using deep learning techniques.",
            tech: ["Python", "TensorFlow", "Haar Cascade"],
            github: "#",
            live: "#"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio site to showcase skills and projects, built with modern web technologies.",
            tech: ["React", "Node.js", "CSS"],
            github: "#",
            live: "#"
        }
    ];

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title reveal">Some Things I've Built</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card glass reveal">
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <ul className="project-tech">
                                    {project.tech.map((t, i) => <li key={i}>{t}</li>)}
                                </ul>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
