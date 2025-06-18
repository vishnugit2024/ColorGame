import React, { useState } from "react";
// import "./game.css";

const BettingModal = ({
  show,
  betType,
  selectedAmount,
  setSelectedAmount,
  confirmBet,
  onClose,
}) => {
  if (!show) {
    return null;
  }

  const [multipliersAmount, setMultipliersAmount] = useState(1);

  return (
    <div className="wingo-bet-modal-overlay">
      <div className={`wingo-bet-modal ${betType}-theme`}>
        <div className={`wingo-bet-modal-header ${betType}-header`}>
          <h3>Win Go 1min</h3>
          <div className="wingo-bet-selection">Select {betType}</div>
        </div>

        <div className="wingo-bet-modal-content">
          <div className="wingo-bet-balance-section">
            <h6>Balance</h6>
            <div className="wingo-bet-balance-options">
              {[1, 10, 100, 1000].map((amount) => (
                <button
                  key={amount}
                  className={`wingo-bet-balance-btn ${
                    selectedAmount === amount ? "active" : ""
                  }`}
                  onClick={() => setSelectedAmount(amount)}
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>

          <div className="wingo-bet-quantity-section">
            <h6>Quantity</h6>
            <div className="wingo-bet-quantity-controls">
              <button
                className="wingo-bet-quantity-btn"
                onClick={() =>
                  setSelectedAmount(Math.max(1, selectedAmount - 1))
                }
              >
                -
              </button>
              <input
                type="number"
                value={selectedAmount}
                onChange={(e) =>
                  setSelectedAmount(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="wingo-bet-quantity-input"
              />
              <button
                className="wingo-bet-quantity-btn"
                onClick={() => setSelectedAmount(selectedAmount + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="wingo-bet-multiplier-section">
            {[1, 5, 10, 20, 50, 100].map((mult) => (
              <button
                key={mult}
                className={`wingo-bet-multiplier-btn ${
                  multipliersAmount === mult ? "active" : ""
                }`}
                onClick={() => {
                  setMultipliersAmount(mult);
                  setSelectedAmount((prev) => Math.max(1, prev * mult));
                }}
              >
                X{mult}
              </button>
            ))}
          </div>

          <div className="wingo-bet-agreement">
            <p className="wingo-bet-presale-rules text-dark">I agree</p>
            <p className="wingo-bet-presale-rules">(Pre-sale rules)</p>
          </div>
        </div>

        <div className="wingo-bet-modal-actions">
          <button className="wingo-bet-cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="wingo-bet-confirm-btn" onClick={confirmBet}>
            Total amount ₹{selectedAmount}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BettingModal;
