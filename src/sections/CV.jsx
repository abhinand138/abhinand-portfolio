import React from 'react';
import { FaFileDownload, FaEye } from 'react-icons/fa';
import './CV.css';

const CV = () => {
    // Replace this with your actual CV file path
    const cvUrl = "/resume.pdf";

    return (
        <section id="cv" className="section cv-section">
            <div className="container">
                <div className="cv-content glass reveal">
                    <div className="cv-text">
                        <h2 className="section-title">My Resume</h2>
                        <p>
                            Interested in my professional journey? Check out my resume to get a better understanding
                            of my skills, experience, and educational background.
                        </p>
                    </div>
                    <div className="cv-actions">
                        <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <FaEye className="btn-icon" /> View Resume
                        </a>
                        <a href={cvUrl} download="Abhinand_Resume.pdf" className="btn btn-primary">
                            <FaFileDownload className="btn-icon" /> Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CV;
