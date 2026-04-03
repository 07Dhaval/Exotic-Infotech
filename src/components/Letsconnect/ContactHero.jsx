import React from "react";
import "./ContactHero.css";

const ContactHero = () => {
  return (
    <section className="contact-hero" style={{ background: "#bdcede" }}>
      <div className="contact-overlay"></div>

      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          “Have a project in mind or need help with your business? Get in touch with us. We’re here to help you build, grow, and succeed.”
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
