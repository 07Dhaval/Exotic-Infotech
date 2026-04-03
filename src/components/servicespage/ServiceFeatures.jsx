import "./Servicepage.css";
import { FaCheckCircle } from "react-icons/fa";

const ServiceFeatures = ({ features }) => {
  return (
    <section className="service-features">
      <div className="service-container">
        <div className="section-headerr">
          <h2>Key Features</h2>
          <p>Powerful capabilities designed to help your business grow.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <FaCheckCircle />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
