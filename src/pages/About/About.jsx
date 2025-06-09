import React from "react";
import Aboutus from "../../assets/Aboutus_background_new.png";
import { Link } from "react-router-dom";
import "./About.css";

const aboutOptions = [
  {
    icon: <i className="bi bi-file-earmark-text-fill"></i>,
    label: "Confidentiality Agreement",
    link: "/confidentialityAgreement", // You can replace this with your customer about number or page
  },
  {
    icon: <i className="bi bi-file-pdf-fill"></i>,
    label: "Risk Disclosure Agreement",
    color: "#2196f3",
    link: "/riskDisclosureAgreement", // Replace with actual link
  },
];

const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <img src={Aboutus} alt="about" className="about-img" />
      </div>

      <div className="about-list">
        {aboutOptions.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            rel="noopener noreferrer"
            className="about-card text-decoration-none"
          >
            <div className="about-icon">{item.icon}</div>
            <span className="about-text">{item.label}</span>
            <span className="about-arrow">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
