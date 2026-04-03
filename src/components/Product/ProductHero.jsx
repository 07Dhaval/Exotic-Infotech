import React from "react";
import "./ProductHero.css";

const ProductHero = () => {
  return (
    <section className="product-hero">
      <div className="product-hero-container">
        <h1 className="product-hero-title">Products</h1>

        <div className="product-coming-card">
          <h2>🚀 Coming Soon</h2>

          <p>
            We are currently preparing our products to showcase our best
            projects and successful collaborations. Stay tuned for updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
