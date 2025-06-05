import React from "react";
import "./Deposite.css";
import balanacedeposite from "../../assets/balanacedeposite.png";
import cardchip from "../../assets/cardchip.png";
import UPI from "../../assets/UPI.png";
import payNameIcon from "../../assets/payNameIcon.png";

const Deposite = () => {
  return (
    <div className="deposit-section">
      {/* Balance Card */}
      <div className="deposite-balance-card">
        <div className="deposite-balance-header">
          <img
            src={balanacedeposite}
            alt="Balance"
            className="deposite-balance-icon"
          />
          <span>Balance</span>
        </div>
        <div className="deposite-balance-amount">
          ₹3836750.36 <i className="bi bi-arrow-clockwise" />
        </div>
        <div className="card-icon-row">
          <img src={cardchip} alt="Card" className="card-icon" />
          <span>***** *****</span>
        </div>
      </div>

      {/* Payment Method Tabs */}
      <div className="payment-methods">
        <div className="method upi-method">
          <img src={UPI} alt="UPI" />
          <div className="method-label">UPI x QR manual</div>
        </div>
        <div className="method selected">
          <img src={payNameIcon} alt="USDT" />
          <div className="method-label">USDT x QR</div>
        </div>
      </div>

      {/* Manual Deposit Card */}
      <div className="deposit-card">
        <div className="deposit-header">
          <img src="/icons/folder.png" alt="Deposit" />
          <span>Deposit manual amount</span>
        </div>

        <div className="amount-buttons">
          {["100", "300", "500", "1K", "2.5K", "5K", "10K", "25K", "50K"].map(
            (amt, idx) => (
              <button key={idx} className="amount-btn">
                ₹ {amt}
              </button>
            )
          )}
        </div>

        <div className="custom-amount">
          <span>₹</span>
          <input type="text" placeholder="Please enter the amount" />
        </div>
      </div>

      {/* Deposit Button */}
      <button className="deposit-button">Deposit</button>
    </div>
  );
};

export default Deposite;
