import React from "react";
import "./TechnologyExpertise.css";
import { FaServer, FaShieldAlt, FaBolt, FaCode, FaCloud } from "react-icons/fa";

const philosophy = [
  {
    icon: <FaServer />,
    title: "Scalable Architecture",
    desc: "Systems designed to grow with your business and handle increasing workloads effortlessly.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security-First Development",
    desc: "Security is integrated at every layer to protect data, infrastructure, and users.",
  },
  {
    icon: <FaBolt />,
    title: "Performance Optimization",
    desc: "High-performance systems engineered for speed, reliability, and efficiency.",
  },
  {
    icon: <FaCode />,
    title: "Clean Maintainable Code",
    desc: "Readable, scalable code that allows long-term maintainability and easy upgrades.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud-Ready Infrastructure",
    desc: "Cloud optimized systems built for modern deployment, scaling, and reliability.",
  },
];

const TechnologyExpertise = () => {
  return (
    <section className="tech-section">
      <div className="tech-container">
        <div className="tech-header">
          <h2>Technology & Engineering Expertise</h2>

          <p className="tech-intro">
            We build modern digital systems using reliable, scalable, and
            future-ready technologies. Our technology decisions are driven by
            business goals, performance requirements, and long-term
            maintainability.
          </p>

          <p className="tech-intro">
            We do not select tools based on trends alone. We select technologies
            based on what delivers measurable value.
          </p>
        </div>

        <h3 className="philosophy-title">Our Technology Philosophy</h3>

        <div className="philosophy-grid">
          {philosophy.map((item, index) => (
            <div className="philosophy-card" key={index}>
              <div className="philosophy-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="tech-footer">
          We design systems that are built to evolve with your business.
        </p>
      </div>
    </section>
  );
};

export default TechnologyExpertise;
