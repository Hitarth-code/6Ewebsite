import React from "react";
import "./WhyUs.css";

const reasons = [
  { icon: "🎯", title: "Verified Suppliers", desc: "We work only with certified and vetted manufacturers and authorized dealers." },
  { icon: "💼", title: "One-Stop Solution", desc: "From sourcing to delivery — all your machinery procurement needs under one roof." },
  { icon: "📋", title: "Transparent Dealing", desc: "Clear quotations, GST-compliant invoicing, and zero hidden charges." },
  { icon: "🔄", title: "After-Sales Support", desc: "Dedicated support team for installation guidance, spares, and service referrals." },
  { icon: "🌐", title: "Pan-India Network", desc: "Strong logistics and supply chain across all major industrial hubs in India." },
  { icon: "💡", title: "Expert Consultation For Tooling", desc: "Our team helps you choose the right machine for your exact operational requirement." },
];

const WhyUs = () => {
  return (
    <section className="why-us" id="why-us">
      {/* Blue strip background */}
      <div className="why-bg">
        <div className="why-bg-dots" />
      </div>

      <div className="container why-container">
        <div className="section-header">
          <div className="section-tag-white">Why 6Evoltek</div>
          <h2 className="section-title white">Why Choose Us</h2>
          <div className="accent-bar" style={{ margin: "0.75rem auto 1rem auto" }} />
          <p className="section-subtitle white-sub">
            The reasons our clients trust us for critical machinery procurement
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon">{r.icon}</div>
              <h4 className="why-title">{r.title}</h4>
              <p className="why-desc">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="cta-banner" id="contact">
          <div className="cta-text">
            <h3 className="cta-title">Ready to source the right Tooling&Equipemnt?</h3>
            <p className="cta-sub">Get in touch with our experts for a free consultation and competitive quote.</p>
          </div>
          <div className="cta-buttons">
            <a href="mailto:info@6evoltek.com" className="cta-btn-solid">Email Us</a>
            <a href="tel:+919999999999" className="cta-btn-outline">Call Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
