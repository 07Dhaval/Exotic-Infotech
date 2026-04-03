import React from "react";
import "./OurApproach.css";
import {
  FaProjectDiagram,
  FaCode,
  FaCheckCircle,
  FaLayerGroup,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaProjectDiagram />,
    title: "Agile Methodology",
  },
  {
    icon: <FaCode />,
    title: "Industry-Standard Coding Practices",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Assurance in Every Phase",
  },
  {
    icon: <FaLayerGroup />,
    title: "Scalable Architecture for Growth",
  },
  {
    icon: <FaTools />,
    title: "Ongoing Support & Maintenance",
  },
  {
    icon: <FaShieldAlt />,
    title: "ISO Certified Processes",
  },
];

export default function OurApproach() {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <h2 className="approach-title">Our Approach</h2>

        <p className="approach-description">
          At Exotic Infotech Global, we follow a consultative and structured
          development process. We analyze business goals, define a clear
          technical roadmap, and deliver scalable solutions with transparency,
          collaboration, and continuous improvement.
        </p>

        <div className="approach-grid">
          {features.map((item, index) => (
            <div key={index} className="approach-card">
              <div className="approach-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}