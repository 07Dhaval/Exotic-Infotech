import React from "react";
import "./ContactColumnSection.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactColumnSection() {
  return (
    <div className="contact-section-wrapper">
      <div className="contact-card">
        <FaMapMarkerAlt className="contact-icon" />
        <h3>Address</h3>
        <p>
          B-315, Alpha Arcades,
          <br />
          Near Mipco Chowkdi, GIDC,
          <br />
          Bharuch, Gujarat 392001
        </p>
      </div>

      <div className="contact-card">
        <FaPhoneAlt className="contact-icon" />
        <h3>Contact Us</h3>
        <p>+91 8511624907</p>
      </div>

      <div className="contact-card">
        <FaEnvelope className="contact-icon" />
        <h3>Email</h3>
        <p>info@exoticinfo.com</p>
        <p>ridhi.rana@exoticinfotech.com</p>
      </div>
    </div>
  );
}
