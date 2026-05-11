import React, { useState } from "react";
import "./Services.css";

const services = [
  {
    id: "01",
    title: "Industrial Machinery",
    icon: "🏗️",
    desc: "Supply and trading of industrial equipment including  excavators, compressors, industrial presses, conveyors and  manufacturing machinery.",
    tags: [, "Conveyors", "Compressors", "Industrial Presses"],
  },
  {
    id: "02",
    title: "CNC & Precision Machines (Job-work)",
    icon: "🔩",
    desc: "Advanced CNC lathes, milling machines, turning centres, and precision tooling equipment for high-accuracy manufacturing operations.",
    tags: ["CNC Lathes", "Milling Machines", "Turning Centres", "Precision Tools"],
  },
  {
    id: "03",
    title: "Powder Coating",
    icon: "🛠️",
    desc: "Complete powder coating systems, including spray booths, curing ovens, and material handling equipment for surface finishing applications.",
    tags: ["Spray Booths", "Curing Ovens", "Material Handling", "Coating Systems"],
  },
  
  {
    id: "05",
    title: "Fabrication & Welding",
    icon: "🔥",
    desc: "Industrial welding machines, cutting equipment, metal fabrication tools, and allied accessories for metalworking and fabrication shops.",
    tags: ["Welding Machines", "Plasma Cutters", "Fabrication Tools", "Metal Saws"],
  },
  {
    id: "06",
    title: "Material Handling Equipment",
    icon: "📦",
    desc: "Forklifts, conveyors, hoists, palletizers, and complete warehouse automation solutions for efficient material movement.",
    tags: ["Forklifts", "Conveyors", "Hoists", "Palletizers"],
  },
];

const Services = () => {
  const [active, setActive] = useState(null);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-tag-center">What We Offer</div>
          <h2 className="section-title">Our Product Categories</h2>
          <div className="accent-bar" />
          <p className="section-subtitle">
            Comprehensive range of industrial machinery across sectors and applications
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div
              key={s.id}
              className={`service-card ${active === s.id ? "active" : ""}`}
              onMouseEnter={() => setActive(s.id)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="service-number">{s.id}</div>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((tag) => (
                  <span key={tag} className="service-tag">{tag}</span>
                ))}
              </div>
              <div className="service-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
