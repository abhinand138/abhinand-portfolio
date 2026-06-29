import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaBriefcase, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import './Experience.css';
import oxiveCertificate from '../assets/oxive_certificate.png';

const Experience = () => {
    const [activeCard, setActiveCard] = useState(0); // Default open the first one
    const [revealed, setRevealed] = useState([false]);
    const [selectedCert, setSelectedCert] = useState(false);
    const itemRefs = useRef([]);

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

        itemRefs.current.forEach(el => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const experiences = [
        {
            role: "Software Development Intern",
            company: "Oxive Solutions Pvt. Ltd.",
            year: "13 Jun 2026 - 26 Jun 2026",
            monogram: "OS",
            accomplishments: [
                "Gained hands-on exposure to Web & Cloud ERP Systems, understanding business flows such as Purchase, Sales, Asset, HR & Payroll, and Reporting.",
                "Acquired a practical understanding of Oracle Database schemas and data processing structures.",
                "Contributed to core development tasks and feature enhancements for enterprise ERP applications under direct developer mentorship.",
                "Successfully applied agile methodologies, demonstrating strong communication, agility, and team collaboration."
            ],
            hasCertificate: true
        }
    ];

    const toggleCard = (index) => {
        setActiveCard(activeCard === index ? null : index);
    };

    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <p className="experience-subtitle reveal">My Professional Journey</p>
                <h2 className="section-title reveal">Work Experience</h2>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    <div className="experience-list">
                        {experiences.map((exp, index) => {
                            const isExpanded = activeCard === index;
                            const isRevealed = revealed[index];
                            return (
                                <div 
                                    key={index} 
                                    ref={el => itemRefs.current[index] = el}
                                    data-index={index}
                                    className={`experience-item reveal ${isRevealed ? 'active' : ''} ${isExpanded ? 'expanded' : ''}`}
                                >
                                    <div className="timeline-node"></div>
                                    <div className="experience-card glass" onClick={() => toggleCard(index)}>
                                        <div className="card-header-main">
                                            <div className="monogram-badge">
                                                <span>{exp.monogram}</span>
                                            </div>
                                            <div className="card-titles">
                                                <div className="exp-year">{exp.year}</div>
                                                <h3 className="exp-role">{exp.role}</h3>
                                                <p className="exp-company">{exp.company}</p>
                                            </div>
                                        </div>

                                        <div className="expansion-trigger">
                                            <span className="trigger-text">
                                                {isExpanded ? "Hide Details" : "Show Internship Details"}
                                            </span>
                                            <span className={`trigger-icon ${isExpanded ? 'rotated' : ''}`}>
                                                <FaChevronDown />
                                            </span>
                                        </div>

                                        <div className={`expansion-drawer ${isExpanded ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                                            <div className="expansion-content">
                                                <div className="accomplishments-title">
                                                    <FaBriefcase /> Key Focus Areas & Contributions
                                                </div>
                                                <ul className="accomplishments-list">
                                                    {exp.accomplishments.map((acc, idx) => (
                                                        <li key={idx} className="accomplishment-item" onClick={(e) => e.stopPropagation()}>
                                                            <span className="bullet">▹</span>
                                                            <p>{acc}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {exp.hasCertificate && (
                                                    <div className="cert-button-container" onClick={(e) => e.stopPropagation()}>
                                                        <button 
                                                            className="btn btn-primary view-cert-btn"
                                                            onClick={() => setSelectedCert(true)}
                                                        >
                                                            View Internship Certificate <FaExternalLinkAlt style={{ marginLeft: '6px', fontSize: '0.85em' }} />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal for Certificate */}
            {selectedCert && (
                <div className="cert-modal-overlay" onClick={() => setSelectedCert(false)}>
                    <div className="cert-modal-content glass animate-scale-up" onClick={(e) => e.stopPropagation()}>
                        <button className="cert-modal-close" onClick={() => setSelectedCert(false)}>
                            <FaTimes />
                        </button>
                        <div className="cert-modal-body">
                            <div className="cert-modal-icon">
                                <FaBriefcase />
                            </div>
                            <h3 className="cert-modal-title">Internship Completion Certificate</h3>
                            <p className="cert-modal-issuer">Issued by: <span>Oxive Solutions Pvt. Ltd.</span></p>

                            <div className="cert-image-preview-container">
                                <img 
                                    src={oxiveCertificate} 
                                    alt="Oxive Solutions Internship Certificate" 
                                    className="cert-preview-img" 
                                />
                            </div>

                            <div className="cert-modal-actions">
                                <button className="btn btn-outline" onClick={() => setSelectedCert(false)}>
                                    Close Viewer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Experience;
