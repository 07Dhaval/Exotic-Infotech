import React from "react";
import "./WhyJoinUs.css";

const WhyJoinUs = () => {
  const data = [
    {
      title: "Work on real client projects",
      desc: "Gain hands-on experience by working on real-world client requirements and live projects.",
    },
    {
      title: "Fast learning environment",
      desc: "Enhance your skills quickly with continuous learning opportunities and practical exposure.",
    },
    {
      title: "Opportunity to convert internship → full-time job",
      desc: "Show your potential and secure a full-time role based on your performance.",
    },
    {
      title: "Direct mentorship from experienced developers",
      desc: "Learn directly from industry experts who guide you throughout your journey.",
    },
    {
      title: "Exposure to global clients & real business problems",
      desc: "Work with international clients and solve real business challenges.",
    },
  ];

  return (
    <section className="whyJoin">
      <div className="container">
        <h2 className="section-titlee">Why Work With Us</h2>

        <div className="whyJoin-grid">
          {data.map((item, i) => (
            <div key={i} className="whyJoin-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;