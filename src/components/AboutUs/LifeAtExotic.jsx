import React from "react";
import "./LifeAtExotic.css";
import {
  FaLightbulb,
  FaGraduationCap,
  FaBalanceScale,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaLightbulb />,
    title: "Innovation Culture",
    desc: "We encourage experimentation, knowledge-sharing, and a growth mindset across all departments.",
    className: "pink",
  },
  {
    icon: <FaGraduationCap />,
    title: "Continuous Learning",
    desc: "Our teams have access to regular training, certifications, tech talks, and workshops to stay ahead of industry trends.",
    className: "yellow",
  },
  {
    icon: <FaBalanceScale />,
    title: "Work-Life Balance",
    desc: "With flexible working hours, hybrid options, and wellness programs, we prioritize a healthy balance between work and life.",
    className: "blue",
  },
  {
    icon: <FaTrophy />,
    title: "Celebration & Recognition",
    desc: "From milestone achievements to cultural festivals and team outings or a birthday celebration we believe in celebrating success and fostering camaraderie.",
    className: "yellow wide",
  },
  {
    icon: <FaUsers />,
    title: "Inclusive Environment",
    desc: "We champion diversity and equality, creating a workplace where every voice is heard and respected.",
    className: "blue wide",
  },
];

export default function LifeAtExotic() {
  return (
    <section className="life-section">
      <div className="life-container">
        <h2 className="life-title">Life at Exotic!</h2>

        <p className="life-description">
          At Exotic Global, our culture is rooted in innovation, collaboration,
          and continuous learning. We believe that empowering people is the key
          to building exceptional technology. Our diverse and inclusive
          environment fosters creativity, encourages open communication, and
          supports professional growth.
        </p>

        <div className="life-grid">
          {cards.map((card, index) => (
            <div key={index} className={`life-card ${card.className}`}>
              <div className="icon-wrapper">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
