import React from "react";
import "./TransactionList.css";

const transactions = [
  {
    id: 1,
    detail: "Wingo",
    time: "09:54 10/06/2025",
    balance: "₹45080000.00",
  },
  {
    id: 2,
    detail: "Wingo",
    time: "09:53 10/06/2025",
    balance: "₹9800000.00",
  },
];

const TranscationHistory = () => {
  return (
    <div className="transaction-container">
      <select className="filter-dropdown">
        <option>Filter</option>
      </select>

      {transactions.map((txn) => (
        <div key={txn.id} className="transaction-card">
          <div className="card-header">Wingo</div>
          <div className="card-body">
            <div className="info-row">
              <span className="label">Detail</span>
              <span className="value">{txn.detail}</span>
            </div>
            <div className="info-row">
              <span className="label">Time</span>
              <span className="value">{txn.time}</span>
            </div>
            <div className="info-row">
              <span className="label">Balance</span>
              <span className="value balance">{txn.balance}</span>
            </div>
            <div className="comment-box"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TranscationHistory;
