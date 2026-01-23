import React from 'react';
import { FaAward } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
    // Placeholder data - User can update this
    const certificates = [
        {
            name: "Functional Data Structures and Algorithms",
            issuer: "Infosys Springboard",
            link: "https://verify.onwingspan.com"
        },
        {
            name: "Introduction to HTML",
            issuer: "Infosys Springboard",
            link: "https://verify.onwingspan.com"
        },
        {
            name: "AWS Certified Developer - Associate",
            issuer: "Infosys Springboard",
            link: "https://verify.onwingspan.com"
        },
        {
            name: "Explore Machine Learning using Python",
            issuer: "Infosys Springboard",
            link: "https://verify.onwingspan.com"
        },
        {
            name: "Google CyberSecurity",
            issuer: "Coursera",
            link: "https://coursera.org/verify/professional-cert/387O3CX8Q3RP"
        },
        {
            name: "Google Data Analytics",
            issuer: "Coursera",
            link: "https://coursera.org/verify/professional-cert/PRD1UKZ0NJGH"
        },
        {
            name: "AWS Academy Graduate - Generative AI Foundations - Training Badge",
            issuer: "AWS Academy",
            link: "https://www.credly.com/badges/82e2b4cd-3409-4277-9166-8ed4dbf8df98"
        },
    ];

    return (
        <section id="certificates" className="section certificates-section">
            <div className="container">
                <h2 className="section-title reveal">Certificates</h2>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <div key={index} className="cert-card glass reveal">
                            <div className="cert-icon">
                                <FaAward />
                            </div>
                            <div className="cert-content">
                                <h3 className="cert-name">{cert.name}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                                <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">View Credential</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
