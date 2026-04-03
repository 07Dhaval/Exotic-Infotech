import React from "react";
import "./ModernTechSection.css";
import {
  FaRobot,
  FaCloud,
  FaShoppingCart,
  FaMobileAlt,
  FaChartLine,
  FaBullseye,
  FaUsers,
  FaDatabase,
  FaShieldAlt,
  FaExpandArrowsAlt,
} from "react-icons/fa";

import techImage from "../../assets/images/modern.gif";

const ModernTechSection = () => {
  return (
    <section className="modern-section">
      <div className="modern-wrapper">
        <div className="section-header">
          <h2 className="gradient-title">Modern & Emerging Technologies</h2>
          <p>
            We continuously evaluate and adopt innovative technologies that
            strengthen business performance.
          </p>
        </div>

        <div className="modern-contentt">
          <div className="tech-grid">
            <div className="tech-cardd">
              <FaRobot className="tech-icon" />
              <h4>AI-Powered Automation</h4>
              <p>
                Intelligent automation systems that improve efficiency and
                reduce operational costs.
              </p>
            </div>

            <div className="tech-cardd">
              <FaCloud className="tech-icon" />
              <h4>Cloud-Native Microservices</h4>
              <p>
                Scalable distributed architectures built for flexibility and
                resilience.
              </p>
            </div>

            <div className="tech-cardd">
              <FaShoppingCart className="tech-icon" />
              <h4>Headless Commerce</h4>
              <p>
                Decoupled commerce platforms for omnichannel digital
                experiences.
              </p>
            </div>

            <div className="tech-cardd">
              <FaMobileAlt className="tech-icon" />
              <h4>Progressive Web Apps</h4>
              <p>
                Fast, reliable web applications delivering native-like
                performance.
              </p>
            </div>

            <div className="tech-cardd last-card">
              <FaChartLine className="tech-icon" />
              <h4>Real-Time Data Processing</h4>
              <p>
                Live data pipelines enabling smarter and faster business
                decisions.
              </p>
            </div>
          </div>

          <div className="image-wrapper">
            <div className="image-gloww"></div>
            <img src={techImage} alt="Modern Technology System" />
          </div>
        </div>

        <div className="section-header evaluation-header">
          <h2 className="gradient-title">How We Choose Technology</h2>
          <p>
            Every project begins with a technical evaluation phase to ensure
            scalability, security, and long-term efficiency.
          </p>
        </div>

        <div className="evaluation-grid">
          <div className="evaluation-card">
            <FaBullseye />
            <span>Business Objectives</span>
          </div>

          <div className="evaluation-card">
            <FaUsers />
            <span>User Scale Expectations</span>
          </div>

          <div className="evaluation-card">
            <FaDatabase />
            <span>Data Complexity</span>
          </div>

          <div className="evaluation-card">
            <FaShieldAlt />
            <span>Security Requirements</span>
          </div>

          <div className="evaluation-card">
            <FaExpandArrowsAlt />
            <span>Future Expansion Plans</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernTechSection;
