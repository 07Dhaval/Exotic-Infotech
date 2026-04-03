import React, { useState } from "react";
import "./DesignGrid.css";
import vrusti from "../../assets/mockup/vrusti.png";
import step from "../../assets/mockup/step.png";
import ecomm from "../../assets/mockup/ecomm.png";
import fashion from "../../assets/mockup/fashion.png";
import gemlab from "../../assets/mockup/gemlab.png";
import jala from "../../assets/mockup/jala.png";
import million from "../../assets/mockup/million.png";
import mk from "../../assets/mockup/mk.png";
import opd from "../../assets/mockup/opd.png";
import scalping from "../../assets/mockup/scalping.png";
import service from "../../assets/mockup/service.png";
import sfd from "../../assets/mockup/sfd.png";
import stepp from "../../assets/mockup/stepp.png";
import templyy from "../../assets/mockup/templyy.png";

const projects = [
  {
    title: "E-Commerce Website",
    tag: "Website Developement",
    category: "Website",
    image: fashion,
  },
  {
    title: "MK Architects & Interior Website",
    tag: "Website Developement",
    category: "Website",
    image: mk,
  },
  {
    title: "Jalagarment Displey Website",
    tag: "Website Developement",
    category: "Website",
    image: jala,
  },
  {
    title: "Gemlab Website",
    tag: "Website Developement",
    category: "Website",
    image: gemlab,
  },
  {
    title: "E-Commerce Application",
    tag: "Application Development",
    category: "Application",
    image: ecomm,
  },
  {
    title: "SYD Fashion Designer",
    tag: "Application Developement",
    category: "Application",
    image: sfd,
  },
  {
    title: "Millionaire Vault Website",
    tag: "Website Developement",
    category: "Website",
    image: million,
  },
  {
    title: "OPD Management System",
    tag: "Software & Service Developement",
    category: "SaaS",
    image: opd,
  },
  {
    title: "Scalping Trading MLM",
    tag: "MLM Software",
    category: "MLM",
    image: scalping,
  },
  {
    title: "Service Provider Website",
    tag: "Website Developement",
    category: "Website",
    image: service,
  },

  {
    title: "4Step MLM",
    tag: "MLM Software",
    category: "MLM",
    image: step,
  },
  {
    title: "4Step E-Commerce Website",
    tag: "Website Developement",
    category: "Website",
    image: stepp,
  },
  {
    title: "Vrushti Green-Energy Website",
    tag: "Website Developement",
    category: "Website",
    image: vrusti,
  },
  {
    title: "Temply Degital E-Commerce Website",
    tag: "Website Developement",
    category: "Website",
    image: templyy,
  },
];

const categories = ["All", "Website", "Application", "MLM", "SaaS"];

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
