import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/exoticlogo.png";
import logodigi from "../../assets/images/exoticdigitech.png";
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
          {/* Brand Section */}
          <div className="footer-brand footer-divider">
            <img src={logo} alt="Exotic Infotech" className="footer-logo" />

            <p>
              Exotic Infotech delivers innovative digital solutions, scalable
              software, and cutting-edge technologies that empower businesses to
              grow in the modern digital era.
            </p>

            <div className="footer-brand-line"></div>

            <img
              src={logodigi}
              alt="Exotic Digitech"
              className="footer-logodigi"
            />

            <p>
              Exotic Digitech is the digital marketing arm of Exotic Infotech.We
              help businesses grow online with tailored strategies that deliver
              measurable results.
            </p>
          </div>

          {/* Company */}
          <div className="footer-col footer-divider">
            <h4>Company</h4>

            <ul>
              <li>
                <Link to="/company">About Us</Link>
              </li>

              {/* <li><Link to="/Leader">Our Team</Link></li> */}

              <li>
                <Link to="/design">Design</Link>
              </li>

              <li>
                <Link to="/careers">Careers</Link>
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col footer-divider">
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
                <Link to="/services/digital-marketing">Digital Marketing</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col contact-col">
            <h4>Contact</h4>

            <div className="contact-itemm">
              <Mail size={16} />
              <span>info@exoticinfotech.com</span>
            </div>

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
                Bharuch,
                <br />
                B-315, Alpha Arcades, Near Mipco Chowkdi,
                <br />
                GIDC, Gujarat 392001
              </span>
            </div>

            <div className="contact-itemm">
              <MapPin size={18} />

              <span>
                Vadodara,
                <br />
                329/330 SWC HUB, Nr. Vasana Bhayili Road,
                <br />
                Gujarat 390019
              </span>
            </div>
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
                href="https://www.instagram.com/exotic__infotech"
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
