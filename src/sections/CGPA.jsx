import React, { useState, useEffect, useRef } from 'react';
import { FaGraduationCap, FaChartLine } from 'react-icons/fa';
import './CGPA.css';

const CGPA = () => {
    const [revealed, setRevealed] = useState([false, false]);
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

    const academicGrades = [
        {
            institution: "Amal Jyothi College of Engineering",
            program: "Master of Computer Application (MCA)",
            scoreType: "Current SGPA",
            score: 8.1,
            scale: 10.0,
            color: "var(--primary)",
            dashOffset: 314.16 * (1 - 8.1 / 10.0),
            performance: "Excellent",
            milestone: "Ongoing (Semester 1 & 2 Focus)"
        },
        {
            institution: "Saintgits College of Applied Sciences",
            program: "Bachelor of Computer Application (BCA)",
            scoreType: "Graduation CGPA",
            score: 5.88,
            scale: 10.0,
            color: "var(--accent)",
            dashOffset: 314.16 * (1 - 5.88 / 10.0),
            performance: "First Class",
            milestone: "Graduated (Successful Completion)"
        }
    ];

    return (
        <section id="cgpa" className="section cgpa-section">
            <div className="container">
                <p className="cgpa-subtitle reveal">Academic Performance Ledger</p>
                <h2 className="section-title reveal">CGPA & Grades</h2>

                <div className="cgpa-grid">
                    {academicGrades.map((grade, index) => {
                        const isRevealed = revealed[index];
                        return (
                            <div 
                                key={index} 
                                ref={el => cardRefs.current[index] = el}
                                data-index={index}
                                className={`cgpa-card glass reveal ${isRevealed ? 'active' : ''}`}
                            >
                                <div className="cgpa-header">
                                    <h3 className="inst-name">{grade.institution}</h3>
                                    <p className="prog-name">{grade.program}</p>
                                </div>

                                <div className="cgpa-gauge-container">
                                    <svg className="cgpa-gauge" viewBox="0 0 120 120">
                                        {/* Background Track */}
                                        <circle 
                                            className="gauge-bg"
                                            cx="60" 
                                            cy="60" 
                                            r="50" 
                                        />
                                        {/* Animated Neon Foreground Track */}
                                        <circle 
                                            className="gauge-fill"
                                            cx="60" 
                                            cy="60" 
                                            r="50"
                                            style={{
                                                stroke: grade.color,
                                                strokeDasharray: "314.16",
                                                strokeDashoffset: isRevealed ? grade.dashOffset : "314.16"
                                            }}
                                        />
                                    </svg>
                                    <div className="gauge-overlay">
                                        <span className="gauge-score">{grade.score}</span>
                                        <span className="gauge-label">out of {grade.scale}</span>
                                    </div>
                                </div>

                                <div className="cgpa-details">
                                    <div className="detail-item">
                                        <span className="detail-label">{grade.scoreType}</span>
                                        <span className="detail-value text-gradient" style={{ backgroundImage: `linear-gradient(to right, ${grade.color}, var(--accent))` }}>{grade.score}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Evaluation Level</span>
                                        <span className="detail-value highlight-badge" style={{ borderColor: grade.color, color: grade.color }}>
                                            {grade.performance}
                                        </span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Status</span>
                                        <span className="detail-value status-text"><FaGraduationCap /> {grade.milestone}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CGPA;
