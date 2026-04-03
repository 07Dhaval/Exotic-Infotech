import React from "react";
import "./HeaderSection.css";
import {
  FaEnvelope,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";

const HeaderSection = () => {
  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="left-content">
          <div className="topbar-item">
            <img
              src="https://flagcdn.com/in.svg"
              alt="India Flag"
              className="flag"
            />
            <span>India +91-8511624907 </span>
            <div className="separator"></div>
            <span>+91-7621833798</span>
          </div>
          <div className="separator"></div>
          
          <div className="topbar-item">
            <FaEnvelope />
            <span>contact@exoticinfotech.com</span>
          </div>
        </div>

        <div className="right-social">
          <a
            href="https://www.linkedin.com/company/exotic-infotech/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://x.com/ExoticInfo99367"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.instagram.com/exotic__infotech"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.facebook.com/share/1QWiANxMDX/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
