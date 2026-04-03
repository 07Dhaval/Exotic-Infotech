import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/exoticlogo.png";
import {
  Linkedin,
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
              <a href="https://www.linkedin.com/company/exotic-infotech/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} />
              </a>
              <a href="https://x.com/ExoticInfo99367" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: "18px" }} />
              </a>
              <a href="https://www.instagram.com/exotic__infotech" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/share/1QWiANxMDX/" target="_blank" rel="noopener noreferrer">
                <Facebook size={18} />
              </a>
            </div>
          </div>

         
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/company">About Us</Link></li>
              {/* <li><Link to="/company">Our Team</Link></li> */}
              <li><Link to="/design">Design</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li>
                <Link to="/services/custom-business-software">
                  Custom Business Software
                </Link>
              </li>
              <li>
                <Link to="/services/saas-product-development">
                  SaaS Product Development
                </Link>
              </li>
              <li>
                <Link to="/services/web-ecommerce-platforms">
                  Web & E-Commerce Platforms
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-applications">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          
          <div className="footer-col contact-col">
            <h4>Contact</h4>

            <div className="contact-itemm">
              <Mail size={16} />
              <span>contact@exoticinfotech.com</span>
            </div>

            {/* <div className="contact-itemm">
              <Mail size={16} />
              <span>riddhi.rana@exoticinfotech.com</span>
            </div> */}

            <div className="contact-itemm">
              <Phone size={16} />
              <span>+91-8511624907 | +91-7621833798</span>
            </div>

            <div className="contact-itemm">
              <MapPin size={18} />
              <span>
                B-315, Alpha Arcades,<br />
                Near Mipco Chowkdi, GIDC,<br />
                Bharuch, Gujarat 392001
              </span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;