import React from 'react';
import './Hero.css';
import logo from '../assets/logo.png';

const Hero = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-scan-line" />

      <div className="hero-content">
        {/* Left: Text */}
        <div className="hero-text">
          <span className="hero-badge">
            <span className="dot" />
            Trusted Machinery Partner
          </span>

          <h1 className="hero-title">
            Powering Industry With{' '}
            <span className="highlight">Precision </span>{' '}
            &amp; Smart Solutions
          </h1>

          <p className="hero-desc">
            6Evoltek Co. is a leading company for JobWork,Tooling,Capital Goods and Miscllinious delivering
            industrial equipment, tools, and technology solutions to businesses
            across sectors. Quality, reliability, and after-sales service —
            built into every deal.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('services')}>
              Explore Products
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contact')}>
              Get a Quote
            </button>
          </div>
        </div>

        
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-header">
              <img src={logo} alt="6Evoltek Logo" className="custom-logo" />
              <div>
                <div className="hc-title">6Evoltek Co.</div>
                <div className="hc-tag">Precision In Motion</div>
              </div>
            </div>

            <div className="hero-stats">
              <div className="stat-box">
                <span className="stat-num">500+</span>
                <span className="stat-label">Products</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">10+</span>
                <span className="stat-label">Years Exp.</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">300+</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="stat-box">
                <span className="stat-num">PAN</span>
                <span className="stat-label">India Supply</span>
              </div>
            </div>

            <div className="hero-tag-row">
              <span className="hero-tag">⚙️ Industrial</span>
              <span className="hero-tag">🔩 Engineering</span>
              <span className="hero-tag">🏭 Manufacturing</span>
              <span className="hero-tag">🔧 Maintenance</span>
              <span className="hero-tag">📦 Import/Export</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="hero-bottom-bar">
        <div className="hero-bottom-inner">
          <div className="hb-item">
            <span className="hb-icon">🚚</span>
            <span className="hb-text">Pan-India Delivery</span>
          </div>
          <div className="hb-item">
            <span className="hb-icon">✅</span>
            <span className="hb-text">GST Compliant Invoicing</span>
          </div>
          <div className="hb-item">
            <span className="hb-icon">🔧</span>
            <span className="hb-text">After-Sales Support</span>
          </div>
          <div className="hb-item">
            <span className="hb-icon">📞</span>
            <span className="hb-text">Dedicated Account Manager</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
