import React from "react";
import "./withdrawHistory.css"; // Link to the CSS below

const withdrawData = [
  {
    amount: "₹10000000",
    type: "Mahapay - UPI x QR",
    tax: "₹400",
    time: "12:34 06/06/2025",
    orderNumber: "5755259013",
    status: "Pending",
  },
  {
    amount: "₹50000",
    type: "Mahapay - UPI x QR",
    tax: "₹400",
    time: "12:22 06/06/2025",
    orderNumber: "954684507568",
    status: "success",
  },
  // Add more items if needed
];

const WithdrawHistory = () => {
  return (
    <div className="withdraw-history-container">
      {withdrawData.map((item, index) => (
        <div className="withdraw-history-card" key={index}>
          <div className="withdraw-history-header">
            <span className="withdraw-history-btn">withdraw</span>
            <span className="withdraw-history-status">{item.status}</span>
          </div>

          <div className="withdraw-history-info">
            <div className="withdraw-history-row">
              <span>Balance</span>
              <span>{item.amount}</span>
            </div>
            <div className="withdraw-history-row">
              <span>Type</span>
              <span>{item.type}</span>
            </div>
            <div className="withdraw-history-row">
              <span>Tax</span>
              <span>{item.tax}</span>
            </div>
            <div className="withdraw-history-row">
              <span>Time</span>
              <span>{item.time}</span>
            </div>
            <div className="withdraw-history-row">
              <span>Order number</span>
              <span className="order-no">{item.orderNumber}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WithdrawHistory;
