import React from "react";
import { FileText, Link2, Cpu } from "lucide-react";
import "./SectionProblem.css";

const SectionProblem = () => {
  const renderMarquee = (direction) => (
    <div className={`company-marquee ${direction}`}>
      <div className="marquee-track">
        {Array(14)
          .fill("• Exotic Infotech •")
          .map((text, index) => (
            <span key={index} className="marquee-text">
              {text}
            </span>
          ))}
      </div>
    </div>
  );

  return (
    <section className="problem-section">
      {renderMarquee("left")}

      <div className="problem-container">
        <h2 className="problem-heading">
          Is Your Business Stuck with Inefficient Systems?
        </h2>

        <div className="problem-points">
          <span>Manual processes.</span>
          <span>Disconnected tools.</span>
          <span>Unstructured data.</span>
          <span>Lack of automation.</span>
        </div>

        <p className="problem-description">
          These slow down operations, increase errors, and limit scalability. We
          help businesses replace manual work with structured digital systems.
        </p>

        <div className="problem-flow">
          <div className="flow-card">
            <FileText size={40} />
            <h4>Manual Work</h4>
            <p>
              Time-consuming repetitive tasks handled manually that reduce
              productivity and increase human errors.
            </p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-card">
            <Link2 size={40} />
            <h4>Disconnected Tools</h4>
            <p>
              Multiple systems that do not communicate properly, creating
              inefficiencies and data silos.
            </p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-card highlight">
            <Cpu size={40} />
            <h4>Automated System</h4>
            <p>
              A structured, integrated digital system that improves accuracy,
              efficiency, and scalability.
            </p>
          </div>
        </div>
      </div>

      {renderMarquee("right")}
    </section>
  );
};

export default SectionProblem;
