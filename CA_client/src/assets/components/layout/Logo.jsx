import React from 'react';

const Logo = ({ isFooter = false }) => {
  return (
    <div className="modern-ca-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
      <svg width={isFooter ? "45" : "36"} height={isFooter ? "45" : "36"} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        {/* Sleek Gradient Definition */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
             <stop offset="0%" stopColor="#fde047" />
             <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
        </defs>
        
        {/* Abstract "C" Shape */}
        <path d="M75 25 C45 15, 20 35, 20 50 C20 65, 45 85, 75 75" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Dynamic "A" / Growth Arrow overlapping */}
        <path d="M45 80 L65 25 L85 80" stroke="url(#goldGradient)" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M54 58 L76 58" stroke="url(#goldGradient)" strokeWidth="14" strokeLinecap="round" />
      </svg>
      
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
        <span style={{ fontSize: isFooter ? '1.5rem' : '1.25rem', fontWeight: '900', letterSpacing: '-0.5px', color: 'inherit' }}>
          AMAN<span style={{ color: '#fbbf24' }}>BANSAL</span>
        </span>
        <span style={{ fontSize: isFooter ? '0.7rem' : '0.55rem', fontWeight: '700', letterSpacing: '1.2px', opacity: 0.8, textTransform: 'uppercase', marginTop: '3px', color: 'inherit' }}>
          Chartered Accountant
        </span>
      </div>
    </div>
  );
};

export default Logo;
