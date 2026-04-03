import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./TechStrategySection.css";
import techImage from "../../assets/Services/Custom3.gif";

const TechStrategySection = () => {
  return (
    <section className="strategy-section">
      <div className="strategy-wrapper">
        <div className="strategy-container">
          <div className="strategy-content">

            <h2 className="strategy-title">
              Technology is a tool.
              <br />
              <span className="gradient-highlight">
                Strategy is what creates value.
              </span>
            </h2>

            <p className="strategy-description">
              We combine engineering expertise with structured execution to
              build digital systems that deliver measurable business impact.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@exoticinfotech.com&su=Project%20Discussion&body=Hi%2C%20I%20would%20like%20to%20discuss%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="strategy-btn"
            >
              Discuss Your Technical Requirements
              <FaArrowRight className="btn-icon" />
            </a>
          </div>
          <div className="strategy-image-wrapper">
            <div className="image-glow"></div>
            <img
              src={techImage}
              alt="Engineering and Digital Systems Illustration"
              className="strategy-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStrategySection;
