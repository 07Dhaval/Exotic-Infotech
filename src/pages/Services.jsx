import { useEffect } from "react";
import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData";
import { Link } from "react-router-dom";

import ServiceHero from "../components/servicespage/ServiceHero";
import ServiceFeatures from "../components/servicespage/ServiceFeatures";
import ServiceFAQ from "../components/servicespage/ServiceFAQ";

const Services = () => {
  const { slug } = useParams();

  // 🔥 Guaranteed scroll to top
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }, 0);
  }, [slug]);

  const service = servicesData.find((s) => s.slug === slug);

  if (slug) {
    if (!service) {
      return <h2 style={{ textAlign: "center" }}>Service not found</h2>;
    }

    return (
      <>
        <ServiceHero service={service} />
        <ServiceFeatures features={service.features} />
        <ServiceFAQ faqs={service.faqs} />
      </>
    );
  }

  return (
    <section className="services-grid">
      {servicesData.map((service) => (
        <Link
          key={service.slug}
          to={`/services/${service.slug}`}
          className="service-card"
        >
          <img src={service.heroImage} alt={service.title} />
          <h3>{service.title}</h3>
          <p>{service.shortDesc}</p>
        </Link>
      ))}
    </section>
  );
};

export default Services;