import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('ca-theme-dark');
    return savedMode === 'true';
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('ca-theme-dark', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('ca-theme-dark', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Add subtle shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close mobile menu upon navigating
  };

  // Helper function to easily identify active link based on current path
  const isActive = (path) => location.pathname === path ? 'active-link' : '';

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <a onClick={() => handleNavigation('/')} style={{cursor: 'pointer'}}>CA<span></span></a>
      </div>

      <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
        {isMobileMenuOpen ? (
          // Close Icon
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
          </svg>
        ) : (
          // Hamburger Icon
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        )}
      </button>

      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <a onClick={() => handleNavigation('/')} className={isActive('/')} style={{cursor: 'pointer'}}>Home</a>
        <a onClick={() => handleNavigation('/about')} className={isActive('/about')} style={{cursor: 'pointer'}}>About Us</a>
        <a onClick={() => handleNavigation('/services')} className={isActive('/services')} style={{cursor: 'pointer'}}>Services</a>
        <a onClick={() => handleNavigation('/Contact')} className={isActive('/Contact')} style={{cursor: 'pointer'}}>Contact</a>
        
        {/* Mobile CTA (only shows on mobile) */}
        <button onClick={() => handleNavigation('/contact')} className="cta-button mobile-only">Contact Us</button>
      </div>

      <div className="nav-actions-container">
        <button 
          className="theme-toggle-btn" 
          onClick={toggleDarkMode}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>
        {/* Desktop CTA (only shows on desktop) */}
        <button onClick={() => handleNavigation('/contact')} className="cta-button desktop-only">Contact Us</button>
      </div>
    </nav>
  );
}

export default Navbar;