import React from "react";
import "./BetHistory.css"; // Link this to the CSS below

const lossData = [
  {
    type: "Win Go",
    time: "11:30 06/06/2025",
    period: "202506060690",
    orderNumber: "6517270162",
    amount: "₹980.00",
    status: "Loss",
  },
  {
    type: "Win Go",
    time: "11:03 06/06/2025",
    period: "202506060663",
    orderNumber: "6607679628",
    amount: "₹98000.00",
    status: "Loss",
  },
  // Repeat or generate more objects here
  ...Array(8).fill({
    type: "Win Go",
    time: "10:30 06/06/2025",
    period: "202506060600",
    orderNumber: "6500000000",
    amount: "₹500.00",
    status: "Loss",
  }),
];

const BetHistory = () => {
  return (
    <div className="loss-history-container">
      {lossData.map((entry, index) => (
        <div key={index} className="loss-card">
          <div className="loss-card-header">
            <h4>{entry.type}</h4>
            <span className="loss-status">{entry.status}</span>
          </div>
          <p className="loss-time">{entry.time}</p>
          <div className="loss-details">
            <div className="dot-line" />
            <div className="loss-row">
              <span>Type</span>
              <span>{entry.type}</span>
            </div>
            <div className="loss-row">
              <span>Period</span>
              <span>{entry.period}</span>
            </div>
            <div className="loss-row">
              <span>Order number</span>
              <span>{entry.orderNumber}</span>
            </div>
            <div className="loss-row">
              <span>Total bet</span>
              <span>{entry.amount}</span>
            </div>
            <div className="dot-line bottom-dot" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BetHistory;
