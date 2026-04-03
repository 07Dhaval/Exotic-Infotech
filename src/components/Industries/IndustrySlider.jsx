import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import industries from "../../data/IndustriesData";
import "./IndustrySlider.css";

export default function IndustrySlider({ currentSlug }) {
  const otherIndustries = industries.filter(
    (industry) => industry.slug !== currentSlug,
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === otherIndustries.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? otherIndustries.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 6000);
    return () => clearInterval(autoSlide);
  }, [otherIndustries.length]);

  if (otherIndustries.length === 0) {
    return null;
  }

  const currentIndustry = otherIndustries[currentIndex];

  return (
    <section className="industry-slider">
      <h2 className="industry-slider-title">Explore Other Industries</h2>

      <div className="industry-slider-wrapper">
        <button
          className="industry-slider-arrow industry-slider-arrow-left"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        <div className="industry-slider-track">
          <div
            className="industry-slider-slides"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {otherIndustries.map((industry, index) => (
              <Link
                to={`/industries/${industry.slug}`}
                key={index}
                className="industry-slider-slide"
              >
                <div className="industry-slider-slide-left">
                  <img src={industry.hero.image} alt={industry.hero.title} />
                </div>

                <div className="industry-slider-slide-right">
                  <h3>{industry.hero.title}</h3>
                  <p>{industry.hero.description}</p>
                  <span className="industry-slider-cta">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <button
          className="industry-slider-arrow industry-slider-arrow-right"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="industry-slider-dots">
        {otherIndustries.map((_, index) => (
          <button
            key={index}
            className={`industry-slider-dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
