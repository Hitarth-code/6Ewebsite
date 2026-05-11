import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
  <div className="nav-inner">

    <div className="nav-logo" onClick={() => scrollTo('hero')}>
      <img
        src={logo}
        alt="Evoltek Logo"
        className="custom-logo"
      />
    </div>
        {/* Desktop nav */}
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li><a onClick={() => scrollTo('about')} href="#about">About</a></li>
          <li><a onClick={() => scrollTo('services')} href="#services">Products</a></li>
          <li><a onClick={() => scrollTo('why-us')} href="#why-us">Why Us</a></li>
          <li><a onClick={() => scrollTo('contact')} href="#contact" className="nav-cta">Contact Us</a></li>
        </ul>

        
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
