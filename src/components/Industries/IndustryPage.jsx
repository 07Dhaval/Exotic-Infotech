import React from "react";
import "./IndustryPage.css";

const IndustryPage = ({ industry }) => {
  if (!industry) return null;

  const { hero, themeColor, longDescription } = industry;

  return (
    <>
      <section
        className="industry-hero"
        style={{ backgroundImage: `url(${hero.image})` }}
      >
        <div className="industry-hero-overlay">
          <h1>{hero.title}</h1>
          <p>{hero.description}</p>
        </div>
      </section>
      {longDescription && longDescription.length > 0 && (
        <section className="industry-description">
          <div className="description-content">
            {longDescription.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default IndustryPage;
