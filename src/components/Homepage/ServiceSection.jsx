import React from "react";
import { Link } from "react-router-dom";
import services from "../../data/servicesData";
import "./ServiceSection.css";

const ServiceSection = () => {
  return (
    <section id="service" className="service-section">
      <div className="service-wrapper">
        <div className="service-left">
          <span className="small-title">Ready To Start With Us?</span>
          <h2>Our Services</h2>
          <p>
            Empower your business with cutting-edge technologies to help it
            expand and thrive.
          </p>
          <Link to="/services" className="btn-primary">
            Read More
          </Link>
        </div>

        <div className="service-right">
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.slug}>
                <Link to={`/services/${service.slug}`}>
                  <img src={service.hero.image} alt={service.hero.title} />
                  <h3>{service.hero.title}</h3>
                  <p>{service.hero.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
