import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="container footer-content">
                <div className="footer-top">
                    <h3>Abhinand.</h3>
                    <p>Building digital experiences that matter.</p>
                    <div className="social-links">
                        <a href="https://github.com/abhinand138" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/abhinand-m-a-5961a4331" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
                        {/* <a href="#" className="social-icon"><FaTwitter /></a> */}
                        <a href="mailto:abhinandma007@gmail.com" className="social-icon"><FaEnvelope /></a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Abhinand. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
