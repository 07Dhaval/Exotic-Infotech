import React from "react";
import "./CareersCTA.css";

const CareersCTA = () => {
  return (
    <section className="careersCTA">
      <div className="container">
        <h2>Didn't find a role?</h2>
        <p>Send us your resume and we’ll get in touch!</p>

        <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@exoticinfotech.com&su=Project%20Discussion&body=Hi%2C%20I%20would%20like%20to%20discuss%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            Send Resume
          </a>
      </div>
    </section>
  );
};

export default CareersCTA;