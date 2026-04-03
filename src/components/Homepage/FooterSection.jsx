import React from "react";
import "./FooterSection.css";
import { FaEnvelope } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterSection = () => {
  return (
    <div className="footerbar">
      <div className="footer-container">
        <div className="footer-left">
          <span style={{ color: "#ffffff" }}>
            © 2024-2025 Exotic Infotech. All rights reserved.
          </span>
        </div>
        <div className="separator"></div>
        <div className="footer-item">
          <span className="gst-label">GSTIN:</span>
          <span className="gst-number"> 24AAMFE4638E1ZI</span>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
