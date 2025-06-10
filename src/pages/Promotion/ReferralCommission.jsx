import React from "react";
import "./ReferralCommission.css";
import { Link } from "react-router-dom";

const ReferralCommission = () => {
  return (
    <>
      <div className="only-bg-change">
        <h1 className="commission-amount">70000</h1>
        <div className="commission-label">Yesterday's total commission</div>
        <p className="commission-subtext">
          Upgrade the level to increase commission income
        </p>

        <div className="date-filters">
          <input type="date" className="date-input" />
          <input type="date" className="date-input" />
          <button className="filter-btn">Filter</button>
        </div>

        <div className="referral-boxes">
          <div className="referral-box">
            <div className="referral-box-header">
              <i className="bi bi-person-fill"></i> Direct subordinates
            </div>
            <div className="referral-details">
              <p className="blue-zero">0</p>
              <p>number of register</p>
              <p className="blue-zero">0</p>
              <p>Deposit number</p>
              <p className="red-zero">0</p>
              <p>Deposit amount</p>
              <p className="green-zero">0</p>
              <p>Number of people making first deposit</p>
            </div>
          </div>

          <div className="referral-box">
            <div className="referral-box-header">
              <i className="bi bi-person-fill"></i> Team subordinates
            </div>
            <div className="referral-details">
              <p className="blue-zero">0</p>
              <p>number of register</p>
              <p className="blue-zero">0</p>
              <p>Deposit number</p>
              <p className="red-zero">0</p>
              <p>Deposit amount</p>
              <p className="green-zero">0</p>
              <p>Number of people making first deposit</p>
            </div>
          </div>
        </div>
      </div>

      <div className="referral-container">
        <button className="copy-btn">Copy Referral Code</button>
        <button className="copy-btn">Copy Link</button>
        <Link to={"/support"} className="text-decoration-none">
          <div className="nav-card">
            <i className="bi bi-headset"></i>
            <span>Customer Support Online 24/7</span>
            <span className="arrow">›</span>
          </div>
        </Link>
        <Link to="/about" className="text-decoration-none">
          <div className="nav-card">
            <i className="bi bi-ui-checks-grid"></i>
            <span>About</span>
            <span className="arrow">›</span>
          </div>
        </Link>
        <div className="nav-card">
          <i className="bi bi-calendar2-range"></i>
          <span>My Team</span>
          <span className="arrow">›</span>
        </div>
        <Link to={"/tutorial"} className="text-decoration-none">
          <div className="nav-card">
            <i className="bi bi-journal-bookmark-fill"></i>{" "}
            <span>Tutorial</span>
            <span className="arrow">›</span>
          </div>
        </Link>

        <div className="promotion-container">
          <div className="promotion-header">
            <i className="bi bi-cash-coin"></i>
            <span>promotion data</span>
          </div>
          <div className="promotion-stats">
            <div className="promotion-item">
              <h3>0</h3>
              <p>Total Direct Member</p>
            </div>
            <div className="promotion-item">
              <h3>0</h3>
              <p>Total Sub-ordinate Member</p>
            </div>
            <div className="promotion-item">
              <h3>80.65</h3>
              <p>All Time Commision</p>
            </div>
            <div className="promotion-item">
              <h3>0</h3>
              <p>This Week Commision</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralCommission;
