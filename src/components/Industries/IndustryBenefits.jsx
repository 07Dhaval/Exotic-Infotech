import React from "react";
import "./IndustryBenefits.css";

export default function IndustryBenefits({ industry }) {
  if (!industry || !industry.benefits) return null;

  const { benefits, offerings } = industry;

  return (
    <section className="industry-benefits-section">
      <div className="benefits-wrapper">
        <div className="benefits-container">
          <h2 className="benefits-heading">Key Benefits</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon">
                  <span>{idx + 1}</span>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider"></div>

        <div className="offerings-container">
          <h2 className="offerings-heading">What We Offer</h2>
          <div className="offerings-grid">
            {offerings.map((offering, idx) => (
              <div key={idx} className="offering-item">
                <div className="offering-check">✓</div>
                <span>{offering}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
