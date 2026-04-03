import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonialsData = [
  {
    id: 1,
    name: "Mr. Hardik Gujjar",
    role: "-Owner M K Architech",
    review:
      "Team Techforce is a highly skilled team with an eye for details. The project management and communication work really well through the online project tools.",
  },
  {
    id: 2,
    name: "Mr. Mitul Patel",
    role: "-Owner Jalagarment",
    review:
      "Excellent coordination and smooth workflow. The team delivered exactly what we required.",
  },
  {
    id: 3,
    name: "Mr. Ajay Jariwala",
    role: "-Owner Scalping Trading",
    review:
      "Professional, responsive, and technically strong. We appreciated the structured project handling.",
  },
  {
    id: 4,
    name: "Mr. Ritesh Patel",
    role: "-Owner Millionaire Vault",
    review:
      "A reliable technology partner with strong business understanding and execution strategy.",
  },
  {
    id: 5,
    name: "Mr. Sandeep",
    role: "-Owner 4step",
    review:
      "From planning to deployment everything was seamless. We value their long-term support.",
  },
  {
    id: 6,
    name: "Mr. Jatin",
    role: "-Owner Regional To Global",
    review:
      "Outstanding results with strong communication and disciplined workflow.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleNext = () => {
    triggerFade(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    });
  };

  const handlePrev = () => {
    triggerFade(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? testimonialsData.length - 1 : prev - 1,
      );
    });
  };

  const triggerFade = (callback) => {
    setFade(false);
    setTimeout(() => {
      callback();
      setFade(true);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2>Testimonials: Trusted by Our Clients</h2>
        </div>

        <div className="testimonial-cards">
          <div className="rating-card">
            <h1>4.9</h1>
            <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐</div>
            <p className="review-count">(6 Reviews)</p>
            <p className="rating-desc">
              Customer experiences that speak for themselves
            </p>
          </div>

          <div className={`testimonial-card ${fade ? "fade-in" : "fade-out"}`}>
            <div className="card-top">
              <div className="stars green">⭐ ⭐ ⭐ ⭐ ⭐</div>
              <span className="rating-number">5.0</span>
            </div>

            <p className="testimonial-text">{currentTestimonial.review}</p>

            <div className="testimonial-footer">
              <div className="owner-info">
                <h4 className="owner-name">{currentTestimonial.name}</h4>
                <span className="owner-role">{currentTestimonial.role}</span>
              </div>

              <div className="nav-buttons">
                <button className="nav-btn" onClick={handlePrev}>
                  <ArrowLeft size={18} />
                </button>
                <button className="nav-btn" onClick={handleNext}>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
