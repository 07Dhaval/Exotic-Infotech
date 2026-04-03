import React from "react";
import {
  Settings,
  Workflow,
  ShoppingCart,
  Cloud,
  Link2,
  BarChart3,
  Smartphone,
} from "lucide-react";
import "./SectionWhatWeBuild.css";

const SectionWhatWeBuild = () => {
  return (
    <section className="build-section">
      <div className="build-container">
        <h2 className="build-heading">What We Build</h2>

        <div className="build-grid">
          <div className="build-card">
            <Settings size={38} />
            <h4>Custom Business Software</h4>
            <p>
              Tailored digital solutions designed specifically for your
              operations, goals, and long-term growth strategy.
            </p>
          </div>

          <div className="build-card">
            <Cloud size={38} />
            <h4>SaaS Product Development</h4>
            <p>
              End-to-end SaaS solutions from idea validation to launch, built
              with scalability and security in mind.
            </p>
          </div>

          <div className="build-card">
            <ShoppingCart size={38} />
            <h4>Web Platforms & eCommerce & Marketplace Platforms</h4>
            <p>
              High-performance, conversion-focused websites built for
              credibility, scalability, and long-term business growth.
            </p>
          </div>

          <div className="build-card">
            <Smartphone size={38} />
            <h4>Mobile & Cross-Platform Applications</h4>
            <p>
              Secure and scalable mobile applications designed to enhance
              customer engagement and streamline internal operations.
            </p>
          </div>
        </div>

        <div className="build-gridd">
          <div className="build-card">
            <BarChart3 size={38} />
            <h4>Performance-Driven Digital Marketing</h4>
            <p>
              Data-driven marketing strategies focused on measurable growth,
              lead generation, and sustainable online visibility.
            </p>
          </div>

          <div className="build-card">
            <Link2 size={38} />
            <h4>API & System Integrations</h4>
            <p>
              Seamlessly connect your tools, platforms, and services to create a
              unified digital ecosystem.
            </p>
          </div>

          <div className="build-card">
            <Workflow size={38} />
            <h4>Workflow & Process Automation</h4>
            <p>
              Streamline repetitive tasks and optimize business workflows with
              smart automation systems.
            </p>
          </div>
        </div>

        <div className="build-cta">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=Info@exoticinfotech.com&su=Project%20Discussion&body=Hi%2C%20I%20would%20like%20to%20discuss%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionWhatWeBuild;
