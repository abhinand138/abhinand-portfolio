import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [revealed, setRevealed] = useState([false, false, false, false]);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const idx = Number(entry.target.getAttribute('data-index'));
                    setRevealed(prev => {
                        const next = [...prev];
                        next[idx] = true;
                        return next;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        cardRefs.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            title: "Expense Tracker",
            description: "A website for monitoring daily expenses to help users track their spending habits effectively.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/abhinand138/Expense-Tracker",
            live: "#",
            category: "web"
        },
        {
            title: "Emotion Detection",
            description: "An AI system capable of detecting human emotions from video inputs using deep learning architectures.",
            tech: ["Python", "TensorFlow", "Haar Cascade"],
            github: "https://github.com/abhinand138/emotion_detection_system",
            live: "#",
            category: "ai"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio site to showcase skills and projects, built with modern React, glassmorphism UI, and multiple themes.",
            tech: ["React", "CSS", "Vite"],
            github: "https://github.com/abhinand138/abhinand-portfolio",
            live: "#",
            category: "web"
        },
        {
            title: "Fat Loss Diet plan System",
            description: "A digital health platform that designs and manages personalized nutritional plans to assist users in active fat loss.",
            tech: ["HTML", "JavaScript", "CSS"],
            github: "https://github.com/abhinand138/fat-loss-diet-plan",
            live: "#",
            category: "web"
        },
        {
            title: "NextGen Hospital Management System",
            description: "A hospital management system that helps doctors and patients to manage their appointments and medical records",
            tech: ["Python Django", "MySQL", "React"],
            github: "https://github.com/abhinand138/Hospital_project",
            live: "https://hospital-project-slpp.onrender.com",
            category: "web"
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <p className="projects-subtitle reveal">Browse My Recent Creations</p>
                <h2 className="section-title reveal">Some Things I've Built</h2>

                <div className="filter-tabs reveal">
                    <button
                        className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All Projects
                    </button>
                    <button
                        className={`filter-tab ${filter === 'web' ? 'active' : ''}`}
                        onClick={() => setFilter('web')}
                    >
                        Web Applications
                    </button>
                    <button
                        className={`filter-tab ${filter === 'ai' ? 'active' : ''}`}
                        onClick={() => setFilter('ai')}
                    >
                        AI & Deep Learning
                    </button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => {
                        const isRevealed = revealed[index];
                        return (
                            <div
                                key={index}
                                ref={el => cardRefs.current[index] = el}
                                data-index={index}
                                className={`project-card glass reveal ${isRevealed ? 'active' : ''}`}
                            >
                                <div className="project-card-glow"></div>
                                <div className="project-content">
                                    <div className="project-header">
                                        <div className="project-folder">
                                            <FaCode />
                                        </div>
                                        <div className="project-links">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Source"><FaGithub /></a>
                                            {project.live !== "#" && (
                                                <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Preview"><FaExternalLinkAlt /></a>
                                            )}
                                        </div>
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                    <ul className="project-tech">
                                        {project.tech.map((t, i) => <li key={i}>{t}</li>)}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
