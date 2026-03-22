import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-page-wrapper">
      <section className="about-hero-section">
        
        {/* Background Image & Overlay */}
        <div className="about-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1400" 
            alt="Business professionals in meeting" 
          />
          <div className="about-hero-overlay"></div>
        </div>
        
        {/* Content Layout */}
        <div className="about-hero-content">
          <div className="hero-content-left">
            <span className="about-pill">About Us</span>
            <h1>Our Proud Journey</h1>  
          </div>
          
          <div className="hero-content-right">
            <p>Learn More About Who We Are and What We Stand For.</p>
          </div>
        </div>

      </section>

      {/* About Team Section */}
      <section className="about-team-section">
        <div className="about-team-container">
          
          {/* Image Left */}
          <div className="team-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
              alt="Team professionals collaborating"
            />
          </div>

          {/* Content Right */}
          <div className="team-content-wrapper">
            <span className="badge badge-team">About Team</span>
            <h2>Tailored Solutions for Your Financial Growth, Explore Opportunities with Us</h2>
            
            <p>
              Based in Jaipur, Rajasthan, our firm is backed by a team of seasoned professionals with a pan-India presence. We've successfully managed a diverse range of projects across the country, serving clients from various industries and business sizes.
            </p>
            
            <p className="expertise-intro">
              Our core areas of expertise include:
            </p>
            
            <ul className="expertise-list">
              <li>Cost Audit & Cost Records</li>
              <li>GST Compliance & Advisory</li>
              <li>Income Tax Planning & Filing</li>
              <li>MSME & Startup Support</li>
              <li>Regulatory Compliances (MCA, ROC, etc.)</li>
            </ul>
          </div>

        </div>
      </section>

      {/* About Company Section */}
      <section className="about-company-section">
        <div className="about-company-header">
          <span className="badge badge-company">About Company</span>
          <h2>Tailored Financial Support</h2>
          <p>We are a team of dedicated Chartered and Cost Accountants committed to delivering expert financial, tax, and advisory services with integrity and precision.</p>
        </div>

        <div className="mission-vision-grid">
          {/* Mission Card */}
          <div className="mv-card">
            <div className="mv-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2" fill="#475569"/></svg>
            </div>
            <h3>Mission</h3>
            <p>To empower businesses and individuals through transparent, reliable, and value-driven financial solutions while maintaining the highest professional standards.</p>
          </div>

          {/* Vision Card */}
          <div className="mv-card">
            <div className="mv-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3" fill="#22c55e"/></svg>
            </div>
            <h3>Vision</h3>
            <p>To be a trusted partner in financial excellence, recognized for our expertise, innovation, and unwavering commitment to client success.</p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="about-stats-grid">
          <div className="about-stat-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
            <h4>1,000<span>+</span></h4>
            <p>Happy Clients</p>
          </div>
          <div className="about-stat-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.5"><path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
            <h4>2,000<span>+</span></h4>
            <p>Projects Completed</p>
          </div>
          <div className="about-stat-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.5"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>
            <h4>10<span>+</span></h4>
            <p>Years Of Experience</p>
          </div>
          <div className="about-stat-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
            <h4>5<span>+</span></h4>
            <p>Team Members</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-cta-bg">
          <img 
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200"
            alt="Team consulting"
          />
          <div className="about-cta-overlay"></div>
        </div>

        <div className="about-cta-content">
          <h2>Get A Consultation Now!</h2>
          <p>
            Let our experts guide you with trusted financial and compliance advice tailored to your business needs. We're here to simplify tax, accounting, and management challenges — so you can focus on growth.
          </p>
          <button onClick={() => navigate('/Contact')} className="cta-button">
            CONTACT US
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
