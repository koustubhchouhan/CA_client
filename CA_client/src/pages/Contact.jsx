import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [statusMsg, setStatusMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMsg('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatusMsg('Message sent successfully!');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        const data = await response.json();
        setStatusMsg(data.error || 'Failed to send message.');
      }
    } catch (error) {
      setStatusMsg('Connection error. Make sure the backend server is running.');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="contact-page-wrapper">
      <section className="contact-hero-section">
        
        {/* Background Image & Overlay */}
        <div className="contact-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1400" 
            alt="Business professionals looking at camera smiling" 
          />
          <div className="contact-hero-overlay"></div>
        </div>
        
        {/* Content Layout */}
        <div className="contact-hero-content">
          <div className="hero-content-left">
            <span className="contact-pill">Contact Us</span>
            <h1>Reach Us Here</h1>
          </div>
          
          <div className="hero-content-right">
            <p>Connect With Us for Expert Advice and Personalized Assistance.</p>
          </div>
        </div>

      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="contact-grid">
          
          {/* Left: Info */}
          <div className="contact-info">
            <span className="contact-pill-small">Contact</span>
            <h2>Let's Connect and Begin Your Financial Success Story With Us.</h2>
            <p className="contact-intro">Let's connect! Fill out the form or get in touch using the details below.</p>
            
            <div className="info-blocks">
              <div className="info-item">
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <span>Call for Assistance</span>
                  <a href="tel:+918112215075" className="highlight-text">(+91) 8112215075</a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="info-content">
                  <h4>Address</h4>
                  <span>B-2 J P Tower Near Sanganer Flyover behind Dhruv Bar and Hotel Tonk Road, Sanganer, Jaipur</span>
                  <span className="highlight-text">Office</span>
                </div>
              </div>

              <div className="info-item">
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="info-content">
                  <h4>Address</h4>
                  <span>174 Vishwakarma Nagar 1, Maharani Farm, Durgapura, Jaipur</span>
                  <span className="highlight-text">Corporate office</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-card">
            <h3>Send Us Message</h3>
            <p className="form-subtitle">we're here to help!</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service</label>
                <input type="text" id="service" value={formData.service} onChange={handleChange} placeholder="Service" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Message" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'SENDING...' : 'SEND'}
              </button>
              {statusMsg && <p className="status-message" style={{ marginTop: '1rem', color: '#fbbf24', fontWeight: 'bold' }}>{statusMsg}</p>}
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Contact;
