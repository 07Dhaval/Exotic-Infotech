import React from "react";
import "./CoreDevelopmentTechnologies.css";

import {
  FaJava,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaLaravel,
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaMobileAlt,
  FaAndroid,
  FaApple,
  FaShoppingCart,
  FaDatabase,
  FaShieldAlt,
  FaLock,
  FaUserShield,
  FaKey,
  FaProjectDiagram,
  FaServer,
  FaCode,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFlutter,
  SiMagento,
  SiShopify,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiStripe,
} from "react-icons/si";

import { BsGearFill } from "react-icons/bs";
import { MdPayment, MdApi } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const CoreDevelopmentTechnologies = () => {
  return (
    <section className="core-dev-section">
      <div className="core-dev-container">
        <div className="section-headerr">
          <h2 className="section-titlee">
            Core Development & Infrastructure Capabilities
          </h2>
          <p>
            We design scalable, secure, and high-performance digital systems
            built to evolve with your business growth.
          </p>
        
        </div>

        <div className="core-grid">
          <div className="core-card">
            <h3>
              <FaServer className="main-icon" /> Backend Engineering
            </h3>
            <ul>
              <li>
                <FaJava className="java" /> Java
              </li>
              <li>
                <FaNodeJs className="node" /> Node.js
              </li>
              <li>
                <FaPhp className="php" /> PHP
              </li>
              <li>
                <FaPython className="python" /> Python
              </li>
              <li>
                <FaLaravel className="laravel" /> Laravel
              </li>
            </ul>
            <p>
              Secure and high-performance server-side systems for enterprise
              platforms, automation, APIs, and SaaS products.
            </p>
          </div>

          <div className="core-card">
            <h3>
              <FaCode className="main-icon" /> Frontend Development
            </h3>
            <ul>
              <li>
                <FaReact className="react" /> React
              </li>
              <li>
                <FaAngular className="angular" /> Angular
              </li>
              <li>
                <SiNextdotjs className="next" /> Next.js
              </li>
              <li>
                <FaHtml5 className="html" /> HTML5
              </li>
              <li>
                <FaCss3Alt className="css" /> Modern CSS
              </li>
            </ul>
            <p>
              High-performance user interfaces optimized for usability,
              accessibility, and speed.
            </p>
          </div>

          <div className="core-card">
            <h3>
              <FaMobileAlt className="main-icon" /> Mobile & Cross-Platform
            </h3>
            <ul>
              <li>
                <FaReact className="react" /> React Native
              </li>
              <li>
                <SiFlutter className="flutter" /> Flutter
              </li>
              <li>
                <FaAndroid className="android" /> Native Android
              </li>
              <li>
                <FaApple className="apple" /> Native iOS
              </li>
            </ul>
            <p>
              Scalable mobile applications designed for performance, security,
              and long-term maintainability.
            </p>
          </div>

          <div className="core-card">
            <h3>
              <FaShoppingCart className="main-icon" /> eCommerce & Marketplace
            </h3>
            <ul>
              <li>
                <SiMagento className="magento" /> Magento
              </li>
              <li>
                <SiShopify className="shopify" /> Shopify
              </li>
              <li>
                <FaShoppingCart className="custom" /> Custom Platforms
              </li>
              <li>
                <FaMobileAlt className="headless" /> Headless Commerce
              </li>
            </ul>
            <p>
              High-performance commerce platforms engineered for growth,
              scalability, and seamless integrations.
            </p>
          </div>
        </div>

        <div className="infra-grid">
          <div className="infra-card">
            <div className="card-header">
              <FaProjectDiagram className="main-icon" />
              <h3>API & System Integrations</h3>
            </div>
            <ul>
              <li>
                <MdApi className="blue" /> REST APIs
              </li>
              <li>
                <MdPayment className="green" /> Payment Gateways
              </li>
              <li>
                <BsGearFill className="purple" /> ERP Systems
              </li>
              <li>
                <RiCustomerService2Fill className="orange" /> CRM Platforms
              </li>
              <li>
                <SiStripe className="stripe" /> Third-party Integrations
              </li>
            </ul>
          </div>

          <div className="infra-card">
            <div className="card-header">
              <FaDatabase className="main-icon" />
              <h3>Data & Database Technologies</h3>
            </div>
            <ul>
              <li>
                <SiPostgresql className="postgres" /> PostgreSQL
              </li>
              <li>
                <SiMysql className="mysql" /> MySQL
              </li>
              <li>
                <SiMongodb className="mongo" /> MongoDB
              </li>
              <li>
                <SiRedis className="redis" /> Redis
              </li>
            </ul>
          </div>

          <div className="infra-card full-width">
            <div className="card-header">
              <FaShieldAlt className="main-icon" />
              <h3>Security & Compliance</h3>
            </div>
            <ul>
              <li>
                <FaUserShield className="blue" /> Role-based access control
              </li>
              <li>
                <FaLock className="red" /> Data encryption
              </li>
              <li>
                <FaKey className="gold" /> Secure authentication systems
              </li>
              <li>
                <FaShieldAlt className="blue" /> GDPR-conscious architecture
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreDevelopmentTechnologies;
