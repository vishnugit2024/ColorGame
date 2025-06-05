import React from "react";
import "./account.css";
import profilepicture2 from "../../assets/profilepicture2.png";
import accountdeposite from "../../assets/accountdeposite.png";
import accountbet from "../../assets/accountbet.png";
import accountdeposite1 from "../../assets/accountdeposite1.png";
import accounttransition from "../../assets/accounttransition.png";
import accountvip from "../../assets/accountvip.png";
import accountwallet from "../../assets/accountwallet.png";
import accountwithdraw from "../../assets/accountwithdraw.png";
import accountwallet1 from "../../assets/accountwallet1.png";
import { Link } from "react-router-dom";
const Account = () => {
  return (
    <>
      <div className="dashboard-container">
        <header className="profile-header">
          <div className="profile-info">
            <img
              src={profilepicture2}
              alt="Profile"
              className="profile-picture"
            />{" "}
            {/* REPLACE with your actual profile icon path */}
            <div className="user-details">
              <span className="username">1234567890</span>
              <div className="uid-section">
                <span className="uid-label">UID |</span>
                <span className="uid-value">1234567890</span>

                <i className="bi bi-copy small-icon"></i>
              </div>
              <span className="join-date">Join Date: 03:40 16/01/2024</span>
            </div>
          </div>
        </header>

        <section className="balance-section">
          <div className="balance-header">
            <span className="total-balance-label">Total balance</span>
            <div className="balance-amount">
              ₹2509.36{" "}
              <span>
                <i className="bi bi-shuffle"></i>
              </span>
            </div>
          </div>
          <div className="action-buttons">
            <Link to="/wallet">
              <div className="action-item">
                <div className="action-icon wallet-bg">
                  <img src={accountwallet} alt="Wallet" />{" "}
                  {/* REPLACE with your actual wallet icon path */}
                </div>
                <span className="action-text">Wallet</span>
              </div>
            </Link>
            <Link to={"/deposit"}>
              <div className="action-item">
                <div className="action-icon deposit-bg">
                  <img src={accountdeposite} alt="Deposit" />{" "}
                  {/* REPLACE with your actual deposit icon path */}
                </div>
                <span className="action-text">Deposit</span>
              </div>
            </Link>
            <Link to="/withdraw">
              <div className="action-item">
                <div className="action-icon withdraw-bg">
                  <img src={accountwithdraw} alt="Withdraw" />{" "}
                  {/* REPLACE with your actual withdraw icon path */}
                </div>
                <span className="action-text">Withdraw</span>
              </div>
            </Link>
            <Link to="/vip">
              <div className="action-item">
                <div className="action-icon vip-bg">
                  <img src={accountvip} alt="VIP" />{" "}
                  {/* REPLACE with your actual VIP icon path */}
                </div>
                <span className="action-text">VIP</span>
              </div>
            </Link>
          </div>
        </section>

        <section className="history-sections">
          <div className="history-row">
            <div className="history-card">
             <Link >
               <div className="card-icon">
                <img src={accountbet} alt="Bet" />{" "}
              </div>
             </Link>
             <Link>
               <div className="card-text">
                <span className="card-title">Bet</span>
                <span className="card-subtitle">My betting history</span>
              </div>
             </Link>
            </div>
            <div className="history-card">
             <Link>
               <div className="card-icon transaction-bg">
                <img src={accounttransition} alt="Transaction" />{" "}
                {/* REPLACE with your actual transaction icon path */}
              </div>
             </Link>
              <Link><div className="card-text">
                <span className="card-title">Transaction</span>
                <span className="card-subtitle">My transaction history</span>
              </div></Link>
            </div>
          </div>
          <div className="history-row">
            <div className="history-card">
             <Link>
               <div className="card-icon deposit-history-bg">
                <img src={accountdeposite1} alt="Deposit" />{" "}
                {/* REPLACE with your actual deposit history icon path */}
              </div>
             </Link>
              <Link>
                <div className="card-text">
                <span className="card-title">Deposit</span>
                <span className="card-subtitle">My deposit history</span>
              </div>
              </Link>
            </div>
            <div className="history-card">
              <Link>
                <div className="card-icon withdraw-history-bg">
                <img src={accountwallet1} alt="Withdraw" />{" "}
                {/* REPLACE with your actual withdraw history icon path */}
              </div>
              </Link>
             <Link>
               <div className="card-text">
                <span className="card-title">Withdraw</span>
                <span className="card-subtitle">My withdraw history</span>
              </div>
             </Link>
            </div>
          </div>
        </section>

        <section className="menu-list">
          <div className="menu-item">
            <div className="menu-icon">
              <i className="bi bi-gift-fill"></i>{" "}
              {/* REPLACE with your actual gifts icon path */}
            </div>
            <span className="menu-text">Gifts</span>

            {/* REPLACE with your actual arrow icon path */}
          </div>
          <div className="menu-item">
            <div className="menu-icon">
              <i className="bi bi-key-fill"></i>
              {/* REPLACE with your actual change password icon path */}
            </div>
            <span className="menu-text">Change Password</span>

            {/* REPLACE with your actual arrow icon path */}
          </div>
          <div className="menu-item">
            <div className="menu-icon">
              <i className="bi bi-chat-square-dots-fill"></i>
              {/* REPLACE with your actual customer support icon path */}
            </div>
            <span className="menu-text">Customer Support Online 24/7</span>

            {/* REPLACE with your actual arrow icon path */}
          </div>
          <div className="menu-item">
            <div className="menu-icon">
              <i className="bi bi-box"></i>{" "}
              {/* REPLACE with your actual about icon path */}
            </div>
            <span className="menu-text">About</span>
          </div>
          <div className="menu-item">
            <div className="menu-icon">
              <i className="bi bi-gear-wide-connected"></i>{" "}
              {/* REPLACE with your actual about icon path */}
            </div>
            <span className="menu-text">Settings</span>
          </div>

          <button className="logout-button">Log out</button>
        </section>
      </div>
    </>
  );
};

export default Account;
