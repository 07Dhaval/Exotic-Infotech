import React from "react";
import "./WhyChoose.css";
import { FaCheck } from "react-icons/fa";
import image from "../../assets/exoticphotos/why1.gif";

const points = [
  {
    title: "Agile Delivery",
    desc: "Sprint-based execution with transparency and flexibility.",
  },
  {
    title: "Skilled Talent Pool",
    desc: "A diverse team of certified developers, designers, and engineers.",
  },
  {
    title: "Client-Centric Approach",
    desc: "Dedicated account management and structured project governance.",
  },
  {
    title: "IP Protection & NDA",
    desc: "Enterprise-grade confidentiality and compliance practices.",
  },
];

export default function WhyChoose() {
  return (
    <section className="why-section">
      <div className="why-container">
        <h2 className="why-title">Why Choose Exotic Infotech?</h2>

        <div className="why-content">
          <div className="why-image">
            <img src={image} alt="Why Choose Exotic Infotech" />
          </div>

          <div className="why-points">
            {points.map((item, index) => (
              <div key={index} className="why-item">
                <div className="check-icon">
                  <FaCheck />
                </div>
                <div className="why-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
