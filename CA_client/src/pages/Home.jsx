import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page" id="home">
      <section className="hero">
        <h1>
          Your Partner in Finance and Taxation
        </h1>
        <p>
          Reliable, end-to-end financial, regulatory, and tax solutions for startups and enterprises. Get expert guidance crafted just for you.
        </p>
        <button className="hero-btn" onClick={() => navigate('/services')}>
          Explore Our Services
        </button>
      </section>

      {/* Trust Indicators / Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-icon">
              {/* Heart Outline SVG */}
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3>1,000<span>+</span></h3>
            <p>Happy Clients</p>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              {/* Checkmark Square Outline SVG */}
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3>2,000<span>+</span></h3>
            <p>Projects Completed</p>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              {/* Thumbs Up Outline SVG */}
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h3>10<span>+</span></h3>
            <p>Years Of Experience</p>
          </div>

          <div className="stat-item">
            <div className="stat-icon">
              {/* Users Outline SVG */}
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3>5<span>+</span></h3>
            <p>Team Members</p>
          </div>
        </div>
      </section>

      {/* About Us / Team Section */}
      <section className="team-section" id="about">
        <div className="section-header">
          <h2>Meet Our Expert</h2>
          <p>Dedicated professionals committed to your financial success.</p>
        </div>
        
        <div className="team-container">
          <div className="profile-card">
            <div className="profile-image">
              <img src="./src/assets/images/aman.png" alt="Aman Bansal" />
            </div>
            <div className="profile-content">
              <h3>Aman Bansal</h3>
              <span className="profile-title">Chartered Accountant (CA)</span>
              <p className="profile-desc">
                Aman Bansal A qualified Chartered Accountant (CA) with advanced academic credentials, including M.Com and DIISSA. Experienced in taxation, auditing, and related financial domains, demonstrating expertise in compliance, accuracy, and strategic financial practices.
              </p>
              
              <div className="profile-divider"></div>
              
              <div className="profile-contact">
                <div className="contact-row">
                  <span className="contact-label">Phone:</span>
                  <span className="contact-value">987654321</span>
                </div>
                <div className="contact-row">
                  <span className="contact-label">Email:</span>
                  <span className="contact-value">info@example.com</span>
                </div>
              </div>

              <a href="#" className="linkedin-btn" aria-label="LinkedIn Profile">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Articles (Blog) Section */}
      <section className="insights-section" id="insights">
        <div className="section-header">
          <span className="badge">Our Blog</span>
          <h2>Fresh Insights & Articles</h2>
          <p>Discover valuable insights and practical advice from industry professionals — curated to keep you informed and empowered.</p>
        </div>

        <div className="insights-grid">
          {/* Card 1 */}
          <article className="insight-card">
            <div className="insight-image">
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600" alt="Tax-Saving Strategies" />
              <span className="category-badge">Business Setup & Legal</span>
            </div>
            <div className="insight-content">
              <h3>Top Tax-Saving Strategies for Small Businesses in 2026</h3>
              <a href="#read-more" className="read-more">
                READ MORE 
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>

          {/* Card 2 */}
          <article className="insight-card">
            <div className="insight-image">
              <img src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=600" alt="CA vs CMA" />
              <span className="category-badge">Career & Professional Guidance</span>
            </div>
            <div className="insight-content">
              <h3>CA vs. CMA: What's the Difference and Who Do You Need in 2026?</h3>
              <a href="#read-more" className="read-more">
                READ MORE 
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>

          {/* Card 3 */}
          <article className="insight-card">
            <div className="insight-image">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600" alt="GST Filing Mistakes" />
              <span className="category-badge">Business Setup & Legal</span>
            </div>
            <div className="insight-content">
              <h3>Common GST Filing Mistakes and How to Avoid Them</h3>
              <a href="#read-more" className="read-more">
                READ MORE 
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;
