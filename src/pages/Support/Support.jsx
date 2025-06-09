import React from "react";
import "./SupportOptions.css";
import Customerservice from "../../assets/Customerservice_background.png";
import { Link } from "react-router-dom";

const supportOptions = [
  {
    icon: <i className="bi bi-telephone-fill"></i>,
    label: "Customer Support",
    color: "red",
    link: "/submitIssue", // You can replace this with your customer support number or page
  },
  {
    icon: <i className="bi bi-telegram"></i>,
    label: "Telegram Chat",
    color: "#2196f3",
    link: "https://t.me/yourtelegramchat", // Replace with actual link
  },
  {
    icon: <i className="bi bi-telegram"></i>,
    label: "Telegram Channel",
    color: "#1da1f2",
    link: "https://t.me/yourtelegramchannel", // Replace with actual link
  },
];

const Support = () => {
  return (
    <div className="support-container">
      <div className="support-banner">
        <img src={Customerservice} alt="Support" className="support-img" />
      </div>

      <div className="support-list">
        {supportOptions.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            rel="noopener noreferrer"
            className="support-card text-decoration-none"
          >
            <div
              className="support-icon"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>
            <span className="support-text">{item.label}</span>
            <span className="support-arrow">›</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Support;
