import React from "react";
import "./MapSection.css";

const MapSection = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.10613387445!2d73.00929131533171!3d21.726450985649984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5f37090d7fa0243%3A0xe1b2f9f6e0afd119!2sExotic%20Infotech!5e0!3m2!1sen!2sin!4v1708425600000"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
