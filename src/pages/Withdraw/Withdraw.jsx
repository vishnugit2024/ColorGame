import React from "react";
import "./Withdraw.css";
import balanacedeposite from "../../assets/balanacedeposite.png";
import cardchip from "../../assets/cardchip.png";
import UPI from "../../assets/UPI.png";
import payNameIcon from "../../assets/payNameIcon.png";
import walet from "../../assets/homewallet.png";
import { Link } from "react-router-dom";
const Withdraw = () => {
  const bankAccounts = [
    { bankName: "Canara Bank", accountNumber: "110115369002" },
    { bankName: "Bank of Baroda", accountNumber: "75086923919" },
    { bankName: "Canara Bank", accountNumber: "110099597252" },
    { bankName: "State Bank of India", accountNumber: "43269317650" },
  ];

  return (
    <>
      <div className="withdraw-section">
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
            <img src={cardchip} alt="Card" className="deposite-card-icon" />
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

        {/* Add icon */}
        <Link to="/addbank">
          <div className="add-icon-box">
            <div className="add-icon">+</div>
          </div>
        </Link>

        {/* Headings */}
        <h3 className="add-title">Add a bank account number</h3>
        <p className="add-subtitle">
          Need to add beneficiary information to be able to withdraw money
        </p>

        {/* Bank List */}
        <div className="bank-list">
          {bankAccounts.map((bank, idx) => (
            <div className="bank-card" key={idx}>
              <span className="bank-name">{bank.bankName}</span>
              <span className="account-number">{bank.accountNumber}</span>
            </div>
          ))}
        </div>
      </div>

      <section className="payment-withdraw-section">
        <div className="input-group amount-input">
          <span className="input-icon">₹</span>
          <input
            type="text"
            className="form-control"
            placeholder="Please enter the amount"
          />
        </div>

        <div className="balance-info">
          <div className="withdrawable-balance">
            <p>
              Withdrawable balance{" "}
              <strong className="text-white">₹14162631.28</strong>
            </p>
            <button>All</button>
          </div>
          <p className="received">
            Withdrawal amount received <span>₹23510173.55</span>
          </p>
        </div>
        <hr />
        <div className="input-group password-input">
          <span className="input-icon">🔑</span>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />
        </div>

        <button className="withdraw-btn">Withdraw</button>

        <div className="withdraw-note">
          <ul>
            <li>
              Need to bet <strong>₹1000.00</strong> to be able to withdraw
            </li>
            <li>
              Withdraw time <strong>00:05–23:55</strong>
            </li>
            <li>
              Inday Remaining Withdrawal Times <strong>2</strong>
            </li>
            <li>
              Withdrawal amount range <strong>₹500.00–₹100,000.00</strong>
            </li>
            <li>
              Please confirm your beneficial account information before
              withdrawing. If your information is incorrect, our company will
              not be liable for the amount of loss
            </li>
            <li>
              If your beneficial information is incorrect, please contact
              customer service
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Withdraw;
