import React from "react";
import {
  Settings,
  Cloud,
  ShoppingCart,
  Smartphone,
  BarChart3,
  Link2,
  Workflow,
} from "lucide-react";
import "./WhatWeBuild.css";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Settings size={48} />,
    title: "Custom Business Software",
    desc: "Tailored digital solutions designed specifically for your operations and long-term growth strategy.",
    link: "/services/custom-business-software",
  },
  {
    icon: <Cloud size={48} />,
    title: "SaaS Product Development",
    desc: "End-to-end SaaS solutions built with scalability, performance, and security in mind.",
    link: "/services/saas-product-development",
  },
  {
    icon: <ShoppingCart size={48} />,
    title: "Web & E-Commerce Platforms",
    desc: "High-performance platforms built for credibility, scalability, and business growth.",
    link: "/services/web-ecommerce-platforms",
  },
  {
    icon: <Smartphone size={48} />,
    title: "Mobile Applications",
    desc: "Secure and scalable mobile apps designed to enhance engagement and operations.",
    link: "/services/mobile-applications",
  },
  {
    icon: <BarChart3 size={48} />,
    title: "Digital Marketing",
    desc: "Data-driven marketing strategies focused on measurable and sustainable growth.",
    link: "/services/digital-marketing",
  },
  {
    icon: <Link2 size={48} />,
    title: "API Integrations",
    desc: "Seamless system integrations to connect tools into a unified digital ecosystem.",
    link: "/services/api-integrations",
  },
  {
    icon: <Workflow size={48} />,
    title: "Process Automation",
    desc: "Streamline workflows and eliminate repetitive tasks with smart automation.",
  },
];

const WhatWeBuild = () => {
  return (
    <section className="wwb-section">
      <div className="wwb-container">

        <div className="wwb-left">
          <h2 className="wwb-title">What We Build</h2>

          <p className="wwb-description">
            We build digital ecosystems that empower businesses to innovate,
            scale, and lead in a competitive world.
          </p>

          <div className="build-ctaa">
            <Link to="/letsconnect">
              <button className="cta-buttonn">Discuss Your Project</button>
            </Link>
          </div>
        </div>

        <div className="wwb-grid">
          {services.map((service, index) => {
            const CardContent = (
              <div className="wwb-card">
                <div className="wwb-icon">{service.icon}</div>

                <h4 className="wwb-card-title">{service.title}</h4>

                <p className="wwb-card-desc">{service.desc}</p>

                {service.link && (
                  <span className="wwb-load-more">Read More →</span>
                )}
              </div>
            );

            return service.link ? (
              <Link
                to={service.link}
                className="wwb-card-link"
                key={index}
              >
                {CardContent}
              </Link>
            ) : (
              <div key={index}>{CardContent}</div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhatWeBuild;