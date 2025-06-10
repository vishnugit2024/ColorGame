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
    <div className="tutorial-referral-wrapper">
      <div className="tutorial-referral-header">
        <div className="tutorial-referral-left-header">New Referral</div>
        <div className="tutorial-referral-right-header">Bet Commission</div>
      </div>
      <div className="tutorial-referral-body">
        {levels.map((item, index) => (
          <div className="tutorial-referral-row" key={index}>
            <div className="tutorial-referral-left">
              Level {item.level} = {item.referral}
            </div>
            <div className="tutorial-referral-right">
              Level {item.level} = {item.commission}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorial;
