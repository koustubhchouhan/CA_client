import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-page-wrapper">
      <section className="services-hero-section">
        
        {/* Background Image & Overlay */}
        <div className="services-hero-bg">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400" 
            alt="Business professionals collaborating over documents" 
          />
          <div className="services-hero-overlay"></div>
        </div>
        
        {/* Content Layout */}
        <div className="services-hero-content">
          <div className="hero-content-left">
            <span className="services-pill">Services</span>
            <h1>Tailored Solutions Await</h1>
          </div>
          
          <div className="hero-content-right">
            <p>Personalized Strategies for Your Financial Decisions.</p>
          </div>
        </div>

      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section">
        <div className="section-header">
          <span className="badge">Services</span>
          <h2>Services We Provide</h2>
          <p>Delivering End-to-End Financial Solutions Including Cost Audit, Internal Controls, Forecasting, and Compliance — All Backed by CA Expertise.</p>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3>Costing Related Services</h3>
            <p>We offer detailed cost analysis and cost audit support to help optimize pricing, budgeting, and decision-making for improved profitability.</p>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" /></svg>
            </div>
            <h3>Direct Taxes</h3>
            <p>From income tax planning to return filing and compliance, we deliver tailored tax solutions for individuals and businesses.</p>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3>Insolvency Professional</h3>
            <p>Expert advisory and representation in insolvency and bankruptcy matters under IBC, ensuring resolution with legal compliance.</p>
          </div>

          {/* Card 4 */}
          <div className="service-card">
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3>Startup Consultancy</h3>
            <p>Guiding startups from idea to execution with business registration, compliance, financial planning, and strategic advisory services.</p>
          </div>

          {/* Card 5 */}
          <div className="service-card">
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
            </div>
            <h3>Audit & Assurance</h3>
            <p>Delivering transparent, independent audits and assurance services that enhance financial credibility and meet statutory requirements.</p>
          </div>

          {/* Card 6 */}
          <div className="service-card">
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
            </div>
            <h3>Legal And Company Compliances</h3>
            <p>Ensure your business stays compliant with expert legal guidance. We handle registrations, documentation, licenses, and statutory obligations.</p>
          </div>

          {/* Card 7 */}
          <div className="service-card">
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3>Other Essential Business Services</h3>
            <p>RERA Registration, FSSAI License, Shop Act, NGO & Society Registration, BRN, MSME, PF & ESI Compliance.</p>
          </div>

          {/* Card 8 */}
          <div className="service-card">
            <div className="service-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            </div>
            <h3>Business Certifications & Legal Services</h3>
            <p>Secure Your Business with Trademark, ISO, ISI & Other Registrations.</p>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <span className="badge badge-testimonial">Testimonials</span>
          <h2>Our Customer Feedback</h2>
          
          <div className="testimonial-content">
            <p className="testimonial-text">
              Their financial planning support helped us streamline our costs and increase profitability. The CA team's insights on cost control and forecasting were spot on!
            </p>
            
            <div className="testimonial-author-box">
              <div className="author-info-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" 
                  alt="Rahul Mehta"
                  className="author-avatar"
                />
                <div className="author-details">
                  <h4>Rahul Mehta</h4>
                  <span>CFO, TechNova Solutions</span>
                </div>
              </div>
              
              <div className="quote-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
