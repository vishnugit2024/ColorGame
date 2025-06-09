import React from "react";
import "./DepositHistory.css"; // Link to the CSS below

const depositData = [
  {
    amount: "₹10000000",
    type: "Mahapay - UPI x QR",
    time: "12:34 06/06/2025",
    orderNumber: "5755259013",
    status: "Pending",
  },
  {
    amount: "₹50000",
    type: "Mahapay - UPI x QR",
    time: "12:22 06/06/2025",
    orderNumber: "954684507568",
    status: "Pending",
  },
  // Add more items if needed
];

const DepositHistory = () => {
  return (
    <div className="deposit-history-container">
      {depositData.map((item, index) => (
        <div className="deposit-history-card" key={index}>
          <div className="deposit-history-header">
            <span className="deposit-history-btn">Deposit</span>
            <span className="deposit-history-status">{item.status}</span>
          </div>

          <div className="deposit-history-info">
            <div className="deposit-history-row">
              <span>Balance</span>
              <span>{item.amount}</span>
            </div>
            <div className="deposit-history-row">
              <span>Type</span>
              <span>{item.type}</span>
            </div>
            <div className="deposit-history-row">
              <span>Time</span>
              <span>{item.time}</span>
            </div>
            <div className="deposit-history-row">
              <span>Order number</span>
              <span className="order-no">{item.orderNumber}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DepositHistory;
