import React from "react";
import "./CareersHero.css";
import image from "../../assets/Services/c3.gif";

const CareersHero = () => {
  return (
    <section className="careers-hero">
      <div className="careers-container">

        <div className="careers-image">
          <img src={image} alt="Exotic Infotech Careers" />
        </div>

        <div className="careers-content">
          <h1 className="careers-title">
            Join Exotic Infotech...
            <span>
              At Exotic Infotech, we don’t just build software. We create
              real-world digital solutions that help businesses grow and scale.
            </span>
          </h1>

          <p className="careers-description">
            We are a fast-growing IT company focused on web development,
            custom software, mobile apps, UI/UX design, and digital marketing.
            <br></br> Skills + Execution matter more than degrees.<br></br>
            If you're serious about growth and innovation — this is your place.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CareersHero;