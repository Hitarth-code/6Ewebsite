import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-circuit" />

      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <svg viewBox="0 0 40 40" fill="none">
                  <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" fill="none" stroke="#00d4ff" strokeWidth="2"/>
                  <polygon points="20,8 32,15 32,25 20,32 8,25 8,15" fill="rgba(27,63,219,0.4)" stroke="#3d5fe0" strokeWidth="1.5"/>
                  <text x="20" y="24" textAnchor="middle" fill="white" fontSize="12" fontFamily="Orbitron" fontWeight="700">6E</text>
                </svg>
              </div>
              <div>
                <div className="footer-logo-name">6EVOLTEK</div>
                <div className="footer-logo-co">CO.</div>
              </div>
            </div>
            <p className="footer-tagline">
              Your trusted partner in industrial machinery trading — powering businesses with precision and reliability 
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link" title="LinkedIn">in</a>
              <a href="#" className="social-link" title="WhatsApp">WA</a>
              <a href="#" className="social-link" title="Email">@</a>
            </div>
          </div>

          
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#why-us">Why Us</a></li>              
            </ul>
          </div>

          
          <div className="footer-col">
            <h4 className="footer-col-title">Products</h4>
            <ul className="footer-links">
              <li><a href="#services"> Machinery</a></li>
              <li><a href="#services">CNC & Precision</a></li>
              <li><a href="#services">Powder Coating</a></li>

              <li><a href="#services">Welding Machines</a></li>
              <li><a href="#services">Material Handling</a></li>
            </ul>
          </div>

          {/* Contact & GST */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-list">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>
                  3rd floor LandMark Cyberpark 
                  Sector-67,Gurugram,
                  Hryana,122002 
                  India
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+919999999999">+91 7573959312</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <a href="mailto:info@6evoltek.com">rcatulkumarasthanaa@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <span>Mon–Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        
        <div className="footer-gst-strip">
          <div className="gst-block">
            <span className="gst-label">GST Identification Number</span>
            <span className="gst-value">XXXXXXX1234X1Z5</span>
          </div>
          <div className="gst-block">
            <span className="gst-label">CIN / Registration</span>
            <span className="gst-value">U51900DL2018PTC000000</span>
          </div>
          <div className="gst-block">
            <span className="gst-label">PAN Number</span>
            <span className="gst-value">XXXXX1234X</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">© {year} 6Evoltek Co. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
            <a href="#">This Website is just a demo. Real Website is under development.</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
