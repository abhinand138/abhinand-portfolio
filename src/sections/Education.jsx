import React from 'react';
import './Education.css';

const Education = () => {
    const education = [
        {
            degree: "Master of Computer Application",
            school: "Amal Jyothi College of Engineering Autonomous, Kanjirapalli",
            year: "2025 - 2027"
        },
        {
            degree: "Bachelor of Computer Application",
            school: "Saintgits College of Applied Sciences, Kottayam",
            year: "Graduated"
        }
    ];

    return (
        <section id="education" className="section education-section">
            <div className="container">
                <h2 className="section-title reveal">Education</h2>

                <div className="education-list">
                    {education.map((edu, index) => (
                        <div key={index} className="education-card glass reveal">
                            <div className="edu-year">{edu.year}</div>
                            <h3 className="edu-degree">{edu.degree}</h3>
                            <p className="edu-school">{edu.school}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
