import React, { useState, useEffect, useRef } from 'react';
import { FaAward, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import './Certificates.css';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [revealed, setRevealed] = useState([false, false, false, false, false, false, false]);
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
        {
            name: "NPTEL Online Certificate-BlockChain and its Applications",
            issuer: "NPTEL-IIT Kharagpur",
            link: "https://nptel.ac.in/noc/E_Certificate/NOC26CS34S75900005604329484"
        },
        {
            name: "NPTEL Online Certificate-Machine Learning for Engineering and Science Applications",
            issuer: "NPTEL-IIT Kharagpur",
            link: "https://nptel.ac.in/noc/E_Certificate/NOC26CS76S35900013404329484"
        }
    ];

    return (
        <section id="certificates" className="section certificates-section">
            <div className="container">
                <p className="cert-subtitle reveal">Academic Accreditations</p>
                <h2 className="section-title reveal">Certificates</h2>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => {
                        const isRevealed = revealed[index];
                        return (
                            <div
                                key={index}
                                ref={el => cardRefs.current[index] = el}
                                data-index={index}
                                className={`cert-card glass reveal ${isRevealed ? 'active' : ''}`}
                                onClick={() => setSelectedCert(cert)}
                            >
                                <div className="cert-icon">
                                    <FaAward />
                                </div>
                                <div className="cert-content">
                                    <h3 className="cert-name">{cert.name}</h3>
                                    <p className="cert-issuer">{cert.issuer}</p>
                                    <button className="cert-preview-btn">View Credential</button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Custom Lightbox Modal Overlay */}
            {selectedCert && (
                <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
                    <div className="cert-modal-content glass animate-scale-up" onClick={(e) => e.stopPropagation()}>
                        <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
                            <FaTimes />
                        </button>
                        <div className="cert-modal-body">
                            <div className="cert-modal-icon">
                                <FaAward />
                            </div>
                            <h3 className="cert-modal-title">{selectedCert.name}</h3>
                            <p className="cert-modal-issuer">Issued by: <span>{selectedCert.issuer}</span></p>

                            {/* Stylized premium certificate graphic mockup */}
                            <div className="cert-modal-badge-preview">
                                <div className="preview-certificate-frame">
                                    <div className="frame-logo">{selectedCert.issuer}</div>
                                    <div className="frame-divider"></div>
                                    <div className="frame-type">CERTIFICATE OF COMPLETION</div>
                                    <div className="frame-name">Abhinand</div>
                                    <div className="frame-desc">has successfully met all academic requirements to earn the credential in</div>
                                    <div className="frame-title-highlight">{selectedCert.name}</div>
                                    <div className="frame-footer-stamp">
                                        <span>SECURE DIGITALLY VERIFIED STATUS</span>
                                    </div>
                                </div>
                            </div>

                            <div className="cert-modal-actions">
                                <a
                                    href={selectedCert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
                                >
                                    Verify Credential <FaExternalLinkAlt />
                                </a>
                                <button className="btn btn-outline" onClick={() => setSelectedCert(null)}>
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certificates;
