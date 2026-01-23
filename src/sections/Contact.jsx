import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <p className="contact-subtitle">What's Next?</p>
                <h2 className="section-title contact-title reveal">Get In Touch</h2>
                <p className="contact-text reveal">
                    Although I’m currently looking for any new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
                <a href="mailto:abhinandma007@gmail.com" className="btn btn-outline contact-btn reveal">
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
