import React from "react";
import "./Showcase.css";

const Showcase = () => {
  return (
    <section className="design-hero-section">
      <div className="design-hero-container">

        <div className="design-hero-left">
          <span className="design-badge">
            EXOTIC INFOTECH PROJECTS
          </span>

          <h1>
            Designing Intelligent <br />
            <span>Digital Experiences</span>
          </h1>

          <p>
            We build scalable software, SaaS platforms, and automation
            systems that empower modern businesses.
          </p>

          {/* <div className="design-hero-buttons">
            <button className="btn-primary">View Projects</button>
            <button className="btn-outline">Contact Us</button>
          </div> */}
        </div>

        <div className="design-hero-right">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Zmdmb2tmeHY0dnM5bHlmMzBxcHVwd2F0bDBpbjQyN244aDUzaDJ1bCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wykXzIq14JZJyVOiAa/giphy.gif"
            alt="IT Animation"
          />
        </div>

      </div>
    </section>
  );
};

export default Showcase;