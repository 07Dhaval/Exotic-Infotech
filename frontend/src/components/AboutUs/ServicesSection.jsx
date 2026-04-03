import React from "react";
import "./ServicesSection.css";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
  FaBuilding,
  FaShoppingCart,
  FaBug,
  FaBrain,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Custom Software Development",
    desc: "Tailored solutions designed specifically for your business needs and workflows.",
    color: "soft-pink",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile & Web App Development",
    desc: "Cross-platform applications that deliver seamless user experiences.",
    color: "soft-blue",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design and Prototyping",
    desc: "User-centered designs that enhance engagement and satisfaction.",
    color: "soft-yellow",
  },
  {
    icon: <FaBuilding />,
    title: "Enterprise Solutions & Digital Transformation",
    desc: "Modernizing legacy systems and driving digital innovation at scale.",
    color: "soft-blue",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-commerce & CMS Development",
    desc: "Powerful online stores and content management systems that drive sales.",
    color: "soft-yellow",
  },
  {
    icon: <FaCloud />,
    title: "Cloud & DevOps Services",
    desc: "Scalable cloud infrastructure and CI/CD pipelines.",
    color: "soft-red",
  },
  {
    icon: <FaBug />,
    title: "QA & Testing Automation",
    desc: "Comprehensive testing strategies to ensure quality and reliability.",
    color: "soft-pink",
  },
  {
    icon: <FaBrain />,
    title: "AI/ML & Data Engineering",
    desc: "Intelligent systems and data pipelines that unlock business insights.",
    color: "soft-blue",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">What We Do</h2>
        <p className="services-subtitle">
          We offer a full spectrum of software development services.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className={`service-icon ${service.color}`}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
