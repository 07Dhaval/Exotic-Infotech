import React, { useState } from "react";
import "./DesignGrid.css";

const projects = [
  {
    title: "SaaS Analytics Platform",
    tag: "Featured Project",
    category: "SaaS",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",
  },
  {
    title: "Enterprise Admin Dashboard",
    tag: "Dashboard System",
    category: "Dashboard",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600",
  },
  {
    title: "Corporate Website Experience",
    tag: "Web Development",
    category: "Web",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600",
  },
  {
    title: "Automation SaaS Software",
    tag: "Cloud Platform",
    category: "SaaS",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1600",
  },
  {
    title: "Mobile App Interface",
    tag: "App Design",
    category: "App",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1600",
  },
  {
    title: "Data Visualization System",
    tag: "Analytics UI",
    category: "Analytics",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600",
  },
];

const categories = ["All", "SaaS", "Dashboard", "Web", "App", "Analytics"];

const DesignShowcase = () => {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <section className="showcase-section">
      <div className="showcase-container">
        <div className="filter-section">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="showcase-grid">
          {filteredProjects.map((item, index) => (
            <div key={index} className="portfolio-card">
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <span className="tag">{item.tag}</span>
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase;
