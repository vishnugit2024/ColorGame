import React from "react";
import "./Tutorial.css";

const levels = [
  { level: 1, referral: "%", commission: "0.6%" },
  { level: 2, referral: "%", commission: "0.7%" },
  { level: 3, referral: "%", commission: "0.7%" },
  { level: 4, referral: "%", commission: "0.75%" },
  { level: 5, referral: "%", commission: "0.8%" },
  { level: 6, referral: "%", commission: "0.85%" },
  { level: 7, referral: "%", commission: "1.00%" },
  { level: 8, referral: "%", commission: "1.00%" },
  { level: 9, referral: "%", commission: "1.00%" },
  { level: 10, referral: "%", commission: "1%" },
];

const Tutorial = () => {
   return (
    <div className="referral-wrapper">
      <div className="referral-header">
        <div className="referral-left-header">New Referral</div>
        <div className="referral-right-header">Bet Commission</div>
      </div>
      <div className="referral-body">
        {levels.map((item, index) => (
          <div className="referral-row" key={index}>
            <div className="referral-left">Level {item.level} = {item.referral}</div>
            <div className="referral-right">Level {item.level} = {item.commission}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorial;
