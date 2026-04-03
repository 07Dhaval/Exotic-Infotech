import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHospital,
  FaHome,
  FaDraftingCompass,
  FaGraduationCap,
  FaConciergeBell,
  FaShip,
  FaTruck,
  FaFutbol,
  FaIndustry,
  FaCloud,
  FaShoppingCart,
  FaMobileAlt,
  FaChartLine,
  FaLink,
  FaChevronDown,
} from "react-icons/fa";

import logo from "../../assets/images/companylogo.png";
import industries from "../../data/IndustriesData";
import "./Header.css";

const industryIconMap = {
  healthcare: FaHospital,
  "real-estate": FaHome,
  "architects-interior": FaDraftingCompass,
  manufacturing: FaIndustry,
  education: FaGraduationCap,
  hospitality: FaConciergeBell,
  "import-export": FaShip,
  logistics: FaTruck,
  sports: FaFutbol,
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobile = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeAllMobileMenus = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (!mobile) {
        setMobileOpen(false);
        setMobileServicesOpen(false);
        setMobileIndustriesOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  return (
    <header className="header">
      <div className="navbar">
        <Link to="/" className="navbar-brand" onClick={closeAllMobileMenus}>
          <img src={logo} alt="Exotic Infotech" />
        </Link>

        <div
          className={`hamburger ${mobileOpen ? "active" : ""}`}
          onClick={toggleMobile}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${mobileOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/company"
              className="nav-link"
              onClick={closeAllMobileMenus}
            >
              Company
            </Link>
          </li>

          <li className="nav-item services-item">
            {isMobile ? (
              <>
                <button
                  type="button"
                  className={`mobile-dropdown-toggle ${
                    mobileServicesOpen ? "active" : ""
                  }`}
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                >
                  <span>Services</span>
                  <FaChevronDown className="dropdown-icon" />
                </button>

                <div
                  className={`mega-menu ${
                    mobileServicesOpen ? "show-mobile" : ""
                  }`}
                >
                  <div className="mega-grid services-grid">
                    <Link
                      to="/services/custom-business-software"
                      className="service-link"
                      onClick={closeAllMobileMenus}
                    >
                      <div className="service-icon">
                        <FaIndustry />
                      </div>
                      <div className="service-content">
                        <h5>Custom Business Software</h5>
                        <p>Tailored systems built for operations and growth.</p>
                      </div>
                    </Link>

                    <Link
                      to="/services/saas-product-development"
                      className="service-link"
                      onClick={closeAllMobileMenus}
                    >
                      <div className="service-icon">
                        <FaCloud />
                      </div>
                      <div className="service-content">
                        <h5>SaaS Product Development</h5>
                        <p>Scalable cloud SaaS platforms.</p>
                      </div>
                    </Link>

                    <Link
                      to="/services/web-ecommerce-platforms"
                      className="service-link"
                      onClick={closeAllMobileMenus}
                    >
                      <div className="service-icon">
                        <FaShoppingCart />
                      </div>
                      <div className="service-content">
                        <h5>Web & E-Commerce Platforms</h5>
                        <p>High performance websites and stores.</p>
                      </div>
                    </Link>

                    <Link
                      to="/services/mobile-applications"
                      className="service-link"
                      onClick={closeAllMobileMenus}
                    >
                      <div className="service-icon">
                        <FaMobileAlt />
                      </div>
                      <div className="service-content">
                        <h5>Mobile Applications</h5>
                        <p>Android and iOS apps built for scale.</p>
                      </div>
                    </Link>

                    <Link
                      to="/services/digital-marketing"
                      className="service-link"
                      onClick={closeAllMobileMenus}
                    >
                      <div className="service-icon">
                        <FaChartLine />
                      </div>
                      <div className="service-content">
                        <h5>Digital Marketing</h5>
                        <p>Data-driven marketing for growth.</p>
                      </div>
                    </Link>

                    <Link
                      to="/services/api-integrations"
                      className="service-link"
                      onClick={closeAllMobileMenus}
                    >
                      <div className="service-icon">
                        <FaLink />
                      </div>
                      <div className="service-content">
                        <h5>API Integrations</h5>
                        <p>Connect systems into one ecosystem.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="nav-link services-trigger">Services</div>

                <div className="mega-menu">
                  <div className="mega-grid services-grid">
                    <Link
                      to="/services/custom-business-software"
                      className="service-link"
                    >
                      <div className="service-icon">
                        <FaIndustry />
                      </div>
                      <div>
                        <h5>Custom Business Software</h5>
                        <p>Tailored systems built for operations and growth.</p>
                      </div>
                    </Link>

                    <Link
                      to="/services/saas-product-development"
                      className="service-link"
                    >
                      <div className="service-icon">
                        <FaCloud />
                      </div>
                      <div>
                        <h5>SaaS Product Development</h5>
                        <p>Scalable cloud SaaS platforms.</p>
                      </div>
                    </Link>

                    <Link
                      to="/services/web-ecommerce-platforms"
                      className="service-link"
                    >
                      <div className="service-icon">
                        <FaShoppingCart />
                      </div>
                      <div>
                        <h5>Web & E-Commerce Platforms</h5>
                        <p>High performance websites and stores.</p>
                      </div>
                    </Link>

                    <Link
                      to="/services/mobile-applications"
                      className="service-link"
                    >
                      <div className="service-icon">
                        <FaMobileAlt />
                      </div>
                      <div>
                        <h5>Mobile Applications</h5>
                        <p>Android and iOS apps built for scale.</p>
                      </div>
                    </Link>

                    <Link
                      to="/services/digital-marketing"
                      className="service-link"
                    >
                      <div className="service-icon">
                        <FaChartLine />
                      </div>
                      <div>
                        <h5>Digital Marketing</h5>
                        <p>Data-driven marketing for growth.</p>
                      </div>
                    </Link>

                    <Link
                      to="/services/api-integrations"
                      className="service-link"
                    >
                      <div className="service-icon">
                        <FaLink />
                      </div>
                      <div>
                        <h5>API Integrations</h5>
                        <p>Connect systems into one ecosystem.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </li>

          <li>
            <Link
              to="/technology"
              className="nav-link"
              onClick={closeAllMobileMenus}
            >
              Technology
            </Link>
          </li>

          <li>
            <Link
              to="/design"
              className="nav-link"
              onClick={closeAllMobileMenus}
            >
              Design
            </Link>
          </li>

          <li className="nav-item industries-item">
            {isMobile ? (
              <>
                <button
                  type="button"
                  className={`mobile-dropdown-toggle ${
                    mobileIndustriesOpen ? "active" : ""
                  }`}
                  onClick={() => setMobileIndustriesOpen((prev) => !prev)}
                >
                  <span>Industries</span>
                  <FaChevronDown className="dropdown-icon" />
                </button>

                <div
                  className={`mega-menu ${
                    mobileIndustriesOpen ? "show-mobile" : ""
                  }`}
                >
                  <div className="mega-grid industries-grid">
                    {industries.map((ind) => {
                      const Icon = industryIconMap[ind.slug] || FaHome;

                      return (
                        <Link
                          key={ind.slug}
                          to={`/industries/${ind.slug}`}
                          className="industry-link"
                          onClick={closeAllMobileMenus}
                        >
                          <Icon size={30} className="industry-icon" />
                          <span>{ind.hero.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="nav-link industries-trigger">Industries</div>

                <div className="mega-menu">
                  <div className="mega-grid industries-grid">
                    {industries.map((ind) => {
                      const Icon = industryIconMap[ind.slug] || FaHome;

                      return (
                        <Link
                          key={ind.slug}
                          to={`/industries/${ind.slug}`}
                          className="industry-link"
                        >
                          <Icon size={36} className="industry-icon" />
                          <span>{ind.hero.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </li>

          <li>
            <Link
              to="/product"
              className="nav-link"
              onClick={closeAllMobileMenus}
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/Careers"
              className="nav-link"
              onClick={closeAllMobileMenus}
            >
              Careers
            </Link>
          </li>

          <li>
            <Link
              to="/blog"
              className="nav-link"
              onClick={closeAllMobileMenus}
            >
              Blog
            </Link>
          </li>

          <li className="mobile-contact-wrap">
            <Link to="/letsconnect" onClick={closeAllMobileMenus}>
              <button className="contact-btn">Let's Connect</button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;