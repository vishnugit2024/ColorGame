import React from "react";
import "./Wallet.css";
import walletdeposite from "../../assets/walletdeposite.png";
import walletdepositehistroy from "../../assets/walletdepositehistroy.png";
import walletwithdraw from "../../assets/walletwithdraw.png";
import walletwithdrawhistory from "../../assets/walletwithdrawhistory.png";
import { Link } from "react-router-dom";

const Wallet = () => {
  return (
    <>
      <div className="wallet-text">
        <h5>Wallet</h5>
        <i className="bi bi-wallet2 wallet-icon"></i>
        <div className="balance">₹2509.36</div>
        <div className="total-balance">Total Balance</div>
      </div>

      <div className="wallet-container">
        <div className="wallet-circles">
          <div className="wallet-circle">
            <div className="circle">
              <span>100%</span>
            </div>
            <p className="wallet-amount">₹2509.36</p>
            <p className="wallet-label">wallet</p>
          </div>

          <div className="wallet-circle">
            <div className="circle light">
              <span>0%</span>
            </div>
            <p className="wallet-amount">₹ 0</p>
            <p className="wallet-label">API Wallet</p>
          </div>
        </div>

        <button className="transfer-button">
          Transfer Amount to Main Wallet
        </button>

        <div className="wallet-actions">
          <Link to="/deposit">
            <div className="action-item">
              <img src={walletdeposite} alt="Deposit" />
              <p>Deposit</p>
            </div>
          </Link>
          <Link to={"/withdraw"}>
            <div className="action-item">
              <img src={walletwithdraw} alt="Withdraw" />
              <p>Withdraw</p>
            </div>
          </Link>
          <Link to={"/depositHistory"}>
            <div className="action-item">
              <img src={walletdepositehistroy} alt="Deposit History" />
              <p>
                Deposit
                <br />
                history
              </p>
            </div>
          </Link>
          <Link to={"/withdrawHistory"}>
            <div className="action-item">
              <img src={walletwithdrawhistory} alt="Withdrawal History" />
              <p>
                Withdrawal
                <br />
                history
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Wallet;
