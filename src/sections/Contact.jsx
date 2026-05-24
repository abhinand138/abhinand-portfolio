import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: null
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({ submitting: false, success: false, error: 'Please fill in all required fields.' });
            return;
        }

        setStatus({ submitting: true, success: false, error: null });

        setTimeout(() => {
            setStatus({ submitting: false, success: true, error: null });
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <p className="contact-subtitle reveal">What's Next?</p>
                <h2 className="section-title contact-title reveal">Get In Touch</h2>
                <p className="contact-text reveal">
                    Although I’m currently looking for new opportunities, my inbox is always open. 
                    Whether you have a question, a project proposal, or just want to say hi, feel free to send a message!
                </p>

                {status.success ? (
                    <div className="contact-success-card glass reveal animate-scale-up">
                        <FaCheckCircle className="success-icon" />
                        <h3>Message Sent!</h3>
                        <p>Thank you for reaching out. Abhinand will get back to you as soon as possible.</p>
                        <button className="btn btn-primary" onClick={() => setStatus({ ...status, success: false })}>
                            Send Another Message
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact-form glass reveal">
                        <div className="form-row">
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                    placeholder=" "
                                />
                                <label htmlFor="name">Your Name *</label>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                    placeholder=" "
                                />
                                <label htmlFor="email">Your Email *</label>
                            </div>
                        </div>

                        <div className="form-group">
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder=" "
                            />
                            <label htmlFor="subject">Subject</label>
                        </div>

                        <div className="form-group">
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="6" 
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder=" "
                            ></textarea>
                            <label htmlFor="message">Your Message *</label>
                        </div>

                        {status.error && <p className="form-error">{status.error}</p>}

                        <div className="form-actions">
                            <button 
                                type="submit" 
                                className="btn btn-primary submit-btn"
                                disabled={status.submitting}
                            >
                                {status.submitting ? 'Sending...' : 'Send Message'} <FaPaperPlane className="btn-icon-right" />
                            </button>
                            <a href="mailto:abhinandma007@gmail.com" className="btn btn-outline direct-email-btn">
                                Direct Email <FaEnvelope className="btn-icon-right" />
                            </a>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
};

export default Contact;
