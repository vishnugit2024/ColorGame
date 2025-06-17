import React from "react";
// import "./game.css"; 

const BettingModal = ({
  show,
  betType,
  selectedAmount,
  setSelectedAmount,
  confirmBet,
  onClose,
  activeTab, // Receive activeTab as prop
}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="bet-modal-overlay">
      <div className={`bet-modal ${betType}-theme`}>
        <div className={`small-modal-1 ${betType}-header}`}>
          <h3>Win Go {activeTab.replace("min", "Min")}</h3>
          <div className="selection-2">Select {betType}</div>
        </div>
        <div className="modal-content">
          <div className="balance-section-2">
            <span>Balance</span>
            <div className="balance-options">
              {[1, 10, 100, 1000].map((amount) => (
                <button
                  key={amount}
                  className={`balance-btn ${
                    selectedAmount === amount ? "active" : ""
                  }`}
                  onClick={() => setSelectedAmount(amount)}
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>
          <div className="quantity-section">
            <span>Quantity</span>
            <div className="quantity-controls">
              <button
                className="quantity-btn"
                onClick={() => setSelectedAmount(Math.max(1, selectedAmount - 1))}
              >
                -
              </button>
              <input
                type="number"
                value={selectedAmount}
                onChange={(e) =>
                  setSelectedAmount(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="quantity-input"
              />
              <button
                className="quantity-btn"
                onClick={() => setSelectedAmount(selectedAmount + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="multiplier-section">
            {[1, 5, 10, 20, 50, 100].map((mult) => (
              <button
                key={mult}
                className="multiplier-btn"
                onClick={() => setSelectedAmount(selectedAmount * mult)}
              >
                X{mult}
              </button>
            ))}
          </div>
          <div className="agreement">
            <input type="checkbox" id="agree" defaultChecked />
            <label htmlFor="agree">I agree</label>
            <span className="presale-rules">(Pre-sale rules)</span>
          </div>
        </div>
        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="confirm-btn" onClick={confirmBet}>
            Total amount ₹{selectedAmount}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BettingModal;