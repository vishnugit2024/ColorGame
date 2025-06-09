import React from "react";
import "./DepositHistory.css"; // Link to the CSS below

const depositData = [
  {
    amount: "₹10000000",
    type: "Mahapay - UPI x QR",
    time: "12:34 06/06/2025",
    orderNumber: "5755259013",
    status: "Approved",
  },
  {
    amount: "₹50000",
    type: "Mahapay - UPI x QR",
    time: "12:22 06/06/2025",
    orderNumber: "954684507568",
    status: "Approved",
  },
  // Add more items if needed
];

const DepositHistory = () => {
  return (
    <div className="deposit-history-container">
      {depositData.map((item, index) => (
        <div className="deposit-card" key={index}>
          <div className="deposit-header">
            <span className="deposit-btn">Deposit</span>
            <span className="deposit-status">{item.status}</span>
          </div>

          <div className="deposit-info">
            <div className="deposit-row">
              <span>Balance</span>
              <span>{item.amount}</span>
            </div>
            <div className="deposit-row">
              <span>Type</span>
              <span>{item.type}</span>
            </div>
            <div className="deposit-row">
              <span>Time</span>
              <span>{item.time}</span>
            </div>
            <div className="deposit-row">
              <span>Order number</span>
              <span className="order-no">
                {item.orderNumber}
                <img
                  src="https://cdn-icons-png.flaticon.com/512/60/60995.png"
                  alt="copy"
                  className="copy-icon"
                />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DepositHistory;
