import React from "react";
import "./ContactSection.css";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Get In Touch</h2>

          <p>
            “Have a project in mind or need help with your business? Get in touch with us. We’re here to help you build, grow, and succeed.”
          </p>

          <div className="contact-info-grid">
            <div className="contact-item">
              <div className="icon-box">
                <FaPhoneAlt />
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <span>+91-8511624907 | +91-7621833798</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-box">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <span>
                  contact@exoticinfotech.com
                  {/* <br />
                  riddhi.rana@exoticinfotech.com */}
                </span>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-box">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <h4>Address</h4>
                <span>
                  B-315, Alpha Arcades, Near Mipco Chowkdi, GIDC
                  <br />
                  Bharuch, Gujarat 392001
                </span>
              </div>
            </div>
          </div>

          <div className="right-sociall">
            <a
              href="https://www.linkedin.com/company/exotic-infotech/"
              target="_blank"
              rel="noopener noreferrer"
              className="sociall-icon"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://x.com/ExoticInfo99367"
              target="_blank"
              rel="noopener noreferrer"
              className="sociall-icon"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://www.instagram.com/exotic__infotech"
              target="_blank"
              rel="noopener noreferrer"
              className="sociall-icon"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/share/1QWiANxMDX/"
              target="_blank"
              rel="noopener noreferrer"
              className="sociall-icon"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="E-Mail" />
            </div>

            <input type="text" placeholder="Phone" />

            <textarea rows="8" placeholder="Message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
