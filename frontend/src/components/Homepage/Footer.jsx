import React from "react";
import logo from "../../assets/images/exoticlogo.png";
import {
  Linkedin,
  X,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Exotic Infotech" className="footer-logo" />

            <p>
              Exotic Infotech delivers innovative digital solutions, scalable
              software, and cutting-edge technologies that empower businesses to
              grow in the modern digital era.
            </p>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/company/exotic-infotech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/ExoticInfo99367"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  style={{ fontSize: "18px" }}
                />
              </a>
              <a
                href="https://www.instagram.com/exotic__infotech?igsh=MXM5bXA5eGtpYmU0eQ=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1QWiANxMDX/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Custom Software</li>
              <li>Cloud Solutions</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div className="footer-col contact-col">
            <h4>Contact</h4>
            <div className="contact-itemm">
              <Mail size={16} />
              <span>Info@exoticinfotech.com</span>
            </div>
            <div className="contact-itemm">
              <Mail size={16} />
              <span>riddhi.rana@exoticinfotech.com</span>
            </div>
            <div className="contact-itemm">
              <Phone size={16} />
              <span>+91-8511624907</span>
            </div>
            <div className="contact-itemm">
              <MapPin size={18} />
              <span>
                B-315, Alpha Arcades, 
                <br></br>Near Mipco Chowkdi, GIDC,<br></br> Bharuch, Gujarat
                392001
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
