import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const Education = () => {
    const [activeCard, setActiveCard] = useState(null);
    const [revealed, setRevealed] = useState([false, false]);
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

    const education = [
        {
            degree: "Master of Computer Application",
            school: "Amal Jyothi College of Engineering Autonomous, Kanjirapalli",
            year: "2025 - 2027",
            monogram: "AJ",
            accomplishments: [
                "Focusing on advanced algorithms, enterprise full-stack development, and deep learning architectures.",
                "Engaging in specialized artificial intelligence coursework and practical cloud application systems.",
                "Active participation in campus technical hackathons and research-oriented development."
            ]
        },
        {
            degree: "Bachelor of Computer Application",
            school: "Saintgits College of Applied Sciences, Kottayam",
            year: "Graduated",
            monogram: "SG",
            accomplishments: [
                "Graduated with strong academic records and deep fundamentals in Database Management (DBMS).",
                "Built multiple frontend and backend platforms including the Expense Tracker application.",
                "Acquired core competencies in Object-Oriented Programming (C++, Java) and software project lifecycles."
            ]
        }
    ];

    const toggleCard = (index) => {
        setActiveCard(activeCard === index ? null : index);
    };

    return (
        <section id="education" className="section education-section">
            <div className="container">
                <h2 className="section-title reveal">Education</h2>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    <div className="education-list">
                        {education.map((edu, index) => {
                            const isExpanded = activeCard === index;
                            const isRevealed = revealed[index];
                            return (
                                <div 
                                    key={index} 
                                    ref={el => itemRefs.current[index] = el}
                                    data-index={index}
                                    className={`education-item reveal ${isRevealed ? 'active' : ''} ${isExpanded ? 'expanded' : ''}`}
                                >
                                    <div className="timeline-node"></div>
                                    <div className="education-card glass" onClick={() => toggleCard(index)}>
                                        <div className="card-header-main">
                                            <div className="monogram-badge">
                                                <span>{edu.monogram}</span>
                                            </div>
                                            <div className="card-titles">
                                                <div className="edu-year">{edu.year}</div>
                                                <h3 className="edu-degree">{edu.degree}</h3>
                                                <p className="edu-school">{edu.school}</p>
                                            </div>
                                        </div>

                                        <div className="expansion-trigger">
                                            <span className="trigger-text">
                                                {isExpanded ? "Hide Highlights" : "Academic Accomplishments"}
                                            </span>
                                            <span className={`trigger-icon ${isExpanded ? 'rotated' : ''}`}>
                                                <FaChevronDown />
                                            </span>
                                        </div>

                                        <div className={`expansion-drawer ${isExpanded ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                                            <div className="expansion-content">
                                                <div className="accomplishments-title">
                                                    <FaGraduationCap /> Key Focus & Milestones
                                                </div>
                                                <ul className="accomplishments-list">
                                                    {edu.accomplishments.map((acc, idx) => (
                                                        <li key={idx} className="accomplishment-item" onClick={(e) => e.stopPropagation()}>
                                                            <span className="bullet">▹</span>
                                                            <p>{acc}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
