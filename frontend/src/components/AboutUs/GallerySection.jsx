import React from "react";
import "./GallerySection.css";

import img1 from "../../assets/exoticphotos/img1.jpeg";
import img2 from "../../assets/exoticphotos/img2.jpeg";
import img3 from "../../assets/exoticphotos/img3.jpeg";
import img4 from "../../assets/exoticphotos/img4.jpeg";
import img5 from "../../assets/exoticphotos/img5.jpeg";
import img6 from "../../assets/exoticphotos/img6.jpeg";
import img7 from "../../assets/exoticphotos/img7.jpeg";

import video1 from "../../assets/exoticphotos/exotic1.mp4";
import video2 from "../../assets/exoticphotos/exotic2.mp4";
import video3 from "../../assets/exoticphotos/exotic3.mp4";

export default function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-layout">
          <div className="gallery-column">
            <div className="gallery-item">
              <img src={img1} alt="" />
            </div>
            <div className="gallery-item video-item">
              <video autoPlay muted loop playsInline>
                <source src={video2} type="video/mp4" />
              </video>
            </div>
            <div className="gallery-item">
              <img src={img4} alt="" />
            </div>
            <div className="gallery-item">
              <img src={img3} alt="" />
            </div>
          </div>

          <div className="gallery-center">
            <div className="gallery-item center-video">
              <video autoPlay muted loop playsInline>
                <source src={video1} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="gallery-column">
            <div className="gallery-item">
              <img src={img2} alt="" />
            </div>
            <div className="gallery-item video-item">
              <video autoPlay muted loop playsInline>
                <source src={video3} type="video/mp4" />
              </video>
            </div>
            <div className="gallery-item">
              <img src={img5} alt="" />
            </div>
            <div className="gallery-item">
              <img src={img6} alt="" />
            </div>
          </div>
        </div>

        <div className="bottom-full-image">
          <img src={img7} alt="" />
        </div>
      </div>
    </section>
  );
}
