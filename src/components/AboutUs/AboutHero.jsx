import React from "react";
import "./AboutHero.css";
import image from "../../assets/Services/4.gif";

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-container">
        <div className="about-left">
          <h1 className="about-title">
            Building Scalable Digital Solutions
            <span> with Excellence</span>
          </h1>

          <p className="about-description">
            Exotic Infotech is a software development and IT consulting company
            delivering tailored digital solutions across industries. Our expert
            team offers end-to-end services to meet your business goals.
          </p>

          <p className="about-description">
            We help startups, SMBs, and enterprises build scalable, secure
            software, providing dedicated teams and custom IT solutions that
            boost speed to market and ROI.
          </p>
        </div>

        <div className="about-right">
          <img src={image} alt="Exotic Infotech" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
