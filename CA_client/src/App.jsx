import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/layout/Navbar'
import Footer from './assets/components/layout/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'

// A wrapper to handle animations and scroll-to-top on route change
function AnimatedRoutes() {
  const location = useLocation();
  
  // Scroll to top instantly when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
     <Navbar/>
     <main>
       <AnimatedRoutes />
     </main>
     <Footer/>
    </Router>
  )
}

export default App
