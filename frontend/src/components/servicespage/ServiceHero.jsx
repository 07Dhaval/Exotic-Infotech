import "./Servicepage.css";

const ServiceHero = ({ service }) => {
  return (
    <section className="service-hero">
      <div className="service-hero-container">
        <div className="service-hero-text">
          <h1>{service.title}</h1>

          <p>{service.description}</p>

          <div className="service-hero-buttons">
            <button className="secondary-btn">View Portfolio</button>
          </div>
        </div>

        <div className="service-hero-image">
          <img src={service.heroImage} alt={service.title} />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
