import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaTimes } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);
    const [revealed, setRevealed] = useState([false, false, false, false, false, false, false, false, false, false]);
    const cardRefs = useRef([]);

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

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
            category: "web",
            features: ["Dynamic expense log listings", "Persistent localStorage database saving", "Interactive category distribution tracker"],
            challenges: "Maintaining reliable key-value local state synchronization across rapid form updates without losing user input history."
        },
        {
            title: "Emotion Detection",
            description: "An AI system capable of detecting human emotions from video inputs using deep learning architectures.",
            tech: ["Python", "TensorFlow", "Haar Cascade"],
            github: "https://github.com/abhinand138/emotion_detection_system",
            live: "#",
            category: "ai",
            features: ["Real-time video frame face classification", "Deep learning CNN architecture integration", "Robust frontal face bounds scaling via Haar Cascades"],
            challenges: "Optimizing batch frame conversion pipelines in live openCV streams to eliminate video feedback latency."
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio site to showcase skills and projects, built with modern React, glassmorphism UI, and multiple themes.",
            tech: ["React", "CSS", "Vite"],
            github: "https://github.com/abhinand138/abhinand-portfolio",
            live: "#",
            category: "web",
            features: ["Dynamic glassmorphic card displays", "Buttery smooth Vercel-style cursor follow border tracking", "Dynamic multi-theme CSS accent swap toggles", "Native scroll highlighting intersection observer"],
            challenges: "Designing reactive hover properties that update at 60fps on cursor displacement without triggering constant virtual DOM component re-renders."
        },
        {
            title: "Fat Loss Diet plan System",
            description: "A digital health platform that designs and manages personalized nutritional plans to assist users in active fat loss.",
            tech: ["HTML", "JavaScript", "CSS"],
            github: "https://github.com/abhinand138/fat-loss-diet-plan",
            live: "#",
            category: "web",
            features: ["Automated target daily calorie calculator", "Dynamic macro-nutrient division split profiles", "Curated ingredient logs based on body statistics"],
            challenges: "Designing fail-proof validation thresholds across diverse body metric metrics to maintain medically sound calorie deficit calculations."
        },
        {
            title: "NextGen Hospital Management System",
            description: "A hospital management system that helps doctors and patients to manage their appointments and medical records",
            tech: ["Python Django", "MySQL", "React"],
            github: "https://github.com/abhinand138/Hospital_project",
            live: "https://hospital-project-slpp.onrender.com",
            category: "web",
            features: ["Strict Doctor and patient login credential authorization", "Electronic health record and appointment booking scheduling logs", "Dynamic role routing panels", "Active Django ORM database triggers"],
            challenges: "Handling concurrent appointment slots overlap logic and implementing database locks to prevent multi-booking database collisions."
        },
        {
            title: "Mailsuite Pro - Email Tracking & Analytics System",
            description: "Mailsuite Pro is a modern, full-stack Email Tracking System similar to Mailsuite (formerly Mailtrack). It enables users to send emails with tracking features, log recipients' open events and link clicks in real-time, and view comprehensive, real-time metrics and historical logs through a beautiful dark-mode glassmorphism dashboard.",
            tech: ["Node.js,Express.js,Web Sockets,Cheerio,NodeMailer", "SQLite with Prisma ORM", "React/Tailwind CSS"],
            github: "https://github.com/abhinand138/EmailTrackingSystem",
            live: "",
            category: "web",
            features: ["Allows users to input, test, and save their own SMTP credentials (like Gmail App Passwords, Mailgun, or Resend) for real delivery.", "Features custom SVG tracking charts (showing opens over the last 7 days), open rate %, click-through rate %, total count statistics, and detailed search/filter histories."],
            challenges: "Automatically falls back to Nodemailer's Ethereal.email sandbox if no custom SMTP credentials are set. A preview URL is displayed so users can view the mail, click its links, and test tracking in a simulated client!"
        },
        {
            title: "Smart Restaurant ERP ",
            description: `Restaurant ERP System is a full-stack web application developed to automate and manage restaurant operations efficiently. The system provides role-based access for Admin, Manager, and Cashier users, enabling them to manage tables, menu items, customer orders, billing, and analytics through a centralized dashboard,

The application is built using React.js and Tailwind CSS for the frontend, Spring Boot for the backend REST APIs, and PostgreSQL as the database. It includes features such as CRUD operations, order management with menu integration, automated bill generation, PDF invoice downloads, revenue tracking, and real-time dashboard statistics.`,
            tech: ["React.js", "Tailwind CSS", "Java Spring Boot", "PostgreSQL", "JWT Authentication", "Axios", "jspdf"],
            github: "https://github.com/abhinand138/restaurant-erp-system",
            live: "",
            category: "ERP",
            features: ["It includes features such as CRUD operations, order management with menu integration, automated bill generation, PDF invoice downloads, revenue tracking, and real-time dashboard statistics."],
            challenges: "During the development of the Restaurant ERP System, several challenges were encountered. Implementing role-based access control for Admin, Manager, and Cashier users required careful planning to ensure each user had appropriate permissions. Integrating the React frontend with the Spring Boot backend through REST APIs and handling CORS issues was another challenge."
        }
    ];

const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter || (filter === 'web' && p.category === 'ERP'));

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
                            onMouseMove={handleMouseMove}
                            onClick={() => setSelectedProject(project)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="project-card-glow"></div>
                            <div className="project-content">
                                <div>
                                    <div className="project-header">
                                        <div className="project-folder">
                                            <FaCode />
                                        </div>
                                        <div className="project-links">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Source" onClick={(e) => e.stopPropagation()}><FaGithub /></a>
                                            {project.live !== "#" && (
                                                <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Preview" onClick={(e) => e.stopPropagation()}><FaExternalLinkAlt /></a>
                                            )}
                                        </div>
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                </div>
                                <div>
                                    <ul className="project-tech">
                                        {project.tech.map((t, i) => <li key={i}>{t}</li>)}
                                    </ul>
                                    <div className="project-card-footer" style={{ marginTop: '20px', paddingTop: '15px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                        <span className="project-details-btn-text">View Architecture & Features ▹</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Custom Project Details Modal Overlay */}
        {selectedProject && (
            <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
                <div className="project-modal-content glass animate-scale-up" onClick={(e) => e.stopPropagation()}>
                    <button className="project-modal-close" onClick={() => setSelectedProject(null)}>
                        <FaTimes />
                    </button>
                    <div className="project-modal-body">
                        <div className="project-modal-icon">
                            <FaCode />
                        </div>
                        <h3 className="project-modal-title">{selectedProject.title}</h3>
                        <span className="project-modal-category-badge">
                            {selectedProject.category === 'web' || selectedProject.category === 'ERP' ? 'Web Application' : 'AI & Deep Learning'}
                        </span>

                        <p className="project-modal-desc">{selectedProject.description}</p>

                        <div className="project-modal-section">
                            <h4>Key Technical Features</h4>
                            <ul className="modal-list">
                                {selectedProject.features.map((feat, idx) => (
                                    <li key={idx}>▹ {feat}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="project-modal-section">
                            <h4>Engineering Challenges Solved</h4>
                            <p className="modal-section-text">{selectedProject.challenges}</p>
                        </div>

                        <div className="project-modal-section">
                            <h4>Applied Tech Stack</h4>
                            <ul className="project-tech" style={{ justifyContent: 'center', marginTop: '10px' }}>
                                {selectedProject.tech.map((t, idx) => <li key={idx}>{t}</li>)}
                            </ul>
                        </div>

                        <div className="project-modal-actions">
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
                            >
                                View Source Code <FaGithub />
                            </a>
                            {selectedProject.live !== "#" && (
                                <a
                                    href={selectedProject.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
                                >
                                    Live Preview <FaExternalLinkAlt />
                                </a>
                            )}
                            <button className="btn btn-outline" onClick={() => setSelectedProject(null)}>
                                Close Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </section>
);
};

export default Projects;
