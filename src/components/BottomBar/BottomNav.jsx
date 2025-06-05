import React from "react";
import "./BottomNav.css";

// Replace with your actual image imports or paths
import homeIcon from "../../assets/homeicon.png";
import activityIcon from "../../assets/homeactivity.png";
import promoIcon from "../../assets/homepromotion.png";
import walletIcon from "../../assets/homewallet.png";
import accountIcon from "../../assets/homeuser.png";
import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/" className="nav-item">
        <img src={homeIcon} alt="Home" className="nav-icon" />
        <span className="nav-label active">Home</span>
      </Link>
      <Link to="/activity" className="nav-item">
        <img src={activityIcon} alt="Activity" className="nav-icon" />
        <span className="nav-label">Activity</span>
      </Link>
      <Link to="/promotion" className="nav-item promotion-item">
        <div className="promotion-circle">
          <img src={promoIcon} alt="Promotion" />
        </div>
        <span className="nav-label">Promotion</span>
      </Link>

      <Link to="/wallet" className="nav-item">
        <img src={walletIcon} alt="Wallet" className="nav-icon" />
        <span className="nav-label">Wallet</span>
      </Link>
      <Link to="/account" className="nav-item">
        <img src={accountIcon} alt="Account" className="nav-icon" />
        <span className="nav-label">Account</span>
      </Link>
    </nav>
  );
}
