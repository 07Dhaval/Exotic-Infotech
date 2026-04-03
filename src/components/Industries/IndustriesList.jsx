import React from "react";
import { Link } from "react-router-dom";
import industries from "../../data/IndustriesData";
import "./IndustriesList.css";

export default function IndustriesList() {
  return (
    <section className="industry-list-section">
      <h1 className="industry-list-heading">Our Industries</h1>
      <div className="industry-list-container">
        {industries.map((item) => (
          <Link
            to={`/industries/${item.slug}`}
            key={item.slug}
            className="industry-card-link"
          >
            <div
              className="industry-card"
              style={{ backgroundImage: `url(${item.hero.image})` }}
            >
              <div className="industry-list-card-overlay">
                <h3>{item.hero.title}</h3>
                <p>{item.hero.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
