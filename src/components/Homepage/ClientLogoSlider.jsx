import React from "react";
import "./ClientLogoSlider.css";
import mkLogo from "../../assets/logos/mk.png";
import jalLogo from "../../assets/logos/jalagarment1.png";
import scalpLogo from "../../assets/logos/scalping.png";
import millionLogo from "../../assets/logos/millionaire.png";
import fourStepLogo from "../../assets/logos/4step.png";
import regionalLogo from "../../assets/logos/regional.png";
import goldentimeLogo from "../../assets/logos/goldentime.png";
import vrushtiLogo from "../../assets/logos/vrushti.png";
import templyLogo from "../../assets/logos/temply.png";
import freshiyaLogo from "../../assets/logos/freshiya.png";

const logos = [
  { src: mkLogo, large: true },
  { src: jalLogo, large: false },
  { src: scalpLogo, large: false },
  { src: millionLogo, large: true },
  { src: fourStepLogo, large: false },
  { src: regionalLogo, large: false },
  { src: goldentimeLogo, large: false },
  { src: vrushtiLogo, large: false },
  { src: templyLogo, large: false },
  { src: freshiyaLogo, large: false },
];

const ClientLogoSlider = () => {
  return (
    <section className="client-slider-section">
      <div className="client-header">
        <h2>Our Happy Clients</h2>
        <p>Turning ideas into success stories for our valued clients.</p>
      </div>

      <div className="logo-slider">
        <div className="logo-track slide-left">
          {[...logos, ...logos].map((logo, index) => (
            <div
              className={`logo-card ${logo.large ? "large-logo" : ""}`}
              key={index}
            >
              <img src={logo.src} alt="client logo" />
            </div>
          ))}
        </div>
      </div>

      <div className="logo-slider">
        <div className="logo-track slide-right">
          {[...logos, ...logos].map((logo, index) => (
            <div
              className={`logo-card ${logo.large ? "large-logo" : ""}`}
              key={index}
            >
              <img src={logo.src} alt="client logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogoSlider;
