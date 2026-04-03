import React from "react";
import "./ContactHero.css";

const ContactHero = () => {
  return (
    <section className="contact-hero" style={{ background: "#bdcede" }}>
      <div className="contact-overlay"></div>

      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
