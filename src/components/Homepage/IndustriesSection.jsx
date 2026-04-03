import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./IndustriesSection.css";

import Healthcare from "../../assets/Industries/helthcare.webp";
import RealEstate from "../../assets/Industries/realestate.jpg";
import Architects from "../../assets/Industries/Architects.jpeg";
import Manufacturing from "../../assets/Industries/manufacturing.jpg";
import Education from "../../assets/Industries/education.jpg";
import Hospitality from "../../assets/Industries/hospitality.webp";
import ImportExport from "../../assets/Industries/import.webp";
import Logistics from "../../assets/Industries/logistics.png";
import Sports from "../../assets/Industries/sports.jpg";

const industries = [
  { slug: "healthcare", title: "Healthcare", image: Healthcare },
  { slug: "real-estate", title: "Real Estate", image: RealEstate },
  { slug: "architects-interior", title: "Architects & Interior", image: Architects },
  { slug: "manufacturing", title: "Manufacturing", image: Manufacturing },
  { slug: "education", title: "Education", image: Education },
  { slug: "hospitality", title: "Hospitality", image: Hospitality },
  { slug: "import-export", title: "Import/Export", image: ImportExport },
  { slug: "logistics", title: "Logistics", image: Logistics },
  { slug: "sports", title: "Sports", image: Sports },
];

export default function IndustriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="industries-section">
      <h2 className="industries-heading">Industries We Serve</h2>

      <div className="industries-container">
        {industries.map((item, index) => (
          <Link
            key={index}
            to={`/industries/${item.slug}`}
            className={`industry-cardd ${
              activeIndex === index ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}