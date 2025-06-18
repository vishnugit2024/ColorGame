import React, { useState } from "react";
import "./BetSection.css";

const balances = [1, 10, 100, 1000];
const multipliers = [1, 5, 10, 20, 50, 100];

const K3GameBet = ({ selectedOption, onClose }) => {
  const [selectedBalance, setSelectedBalance] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [multiplier, setMultiplier] = useState(1);
  const totalAmount = selectedBalance * quantity * multiplier;

  return (
   <div className="bet-modal-overlay"> <div className="bet-section">
      <div className="k3-bet-quantity-total-row">
        <span>Total:</span>
        <div className="k3-bet-quantity-total-value">{selectedOption}</div>
      </div>

      <div className="k3-bet-quantity-balance-row">
        <span>Balance</span>
        <div className="k3-bet-quantity-balance-buttons">
          {balances.map((val) => (
            <button
              key={val}
              className={`k3-bet-btn ${val === selectedBalance ? "selected" : ""}`}
              onClick={() => setSelectedBalance(val)}
            >
              {val}
            </button>
          ))}
        </div>
      </div>

      <div className="k3-bet-quantity-quantity-row">
        <span>Quantity</span>
        <div className="k3-bet-quantity-quantity-controls">
          <button
            className="k3-bet-quantity-btn"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1))
            }
          />
          <button
            className="k3-bet-quantity-btn"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="k3-bet-quantity-multiplier-row">
        {multipliers.map((val) => (
          <button
            key={val}
            className={`k3-bet-btn ${val === multiplier ? "selected" : ""}`}
            onClick={() => setMultiplier(val)}
          >
            X{val}
          </button>
        ))}
      </div>

      <div className="k3-bet-rules-row">
        <label>
          I agree <span className="k3-bet-rules">《Pre-sale rules》</span>
        </label>
      </div>

      <div className="k3-bet-footer-row">
        <button className="k3-bet-cancel" onClick={onClose}>
          Cancel
        </button>
        <button className="k3-bet-submit">
          Total amount ₹{totalAmount}
        </button>
      </div>
    </div></div>
  );
};

export default K3GameBet;
