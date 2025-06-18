import React, { useState } from "react";
import "../../pages/wingo/game.css";

const BettingPanel = ({ onPlaceBet, currentBets }) => {
  const [selectedAmount, setSelectedAmount] = useState(1);
  const [multipliersAmount, setMultipliersAmount] = useState(1);
  const [betType, setBetType] = useState("");
  const [showBetModal, setShowBetModal] = useState(false);

  const betAmounts = [1, 10, 100, 1000];
  const multipliers = [1, 5, 10, 20, 50, 100];

  const handleBetClick = (type) => {
    setBetType(type);
    setShowBetModal(true);
  };

  const confirmBet = () => {
    if (betType && selectedAmount > 0) {
      onPlaceBet(betType, selectedAmount);
      setShowBetModal(false);
    }
  };

  const getTotalBetAmount = () => {
    return Object.values(currentBets).reduce((sum, amount) => sum + amount, 0);
  };

  return (
    <>
      {showBetModal && (
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
                  {betAmounts.map((amount) => (
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
                      setSelectedAmount(
                        Math.max(1, parseInt(e.target.value) || 1)
                      )
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
                {multipliers.map((mult) => (
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
              <button
                className="wingo-bet-cancel-btn"
                onClick={() => setShowBetModal(false)}
              >
                Cancel
              </button>
              <button className="wingo-bet-confirm-btn" onClick={confirmBet}>
                Total amount ₹{selectedAmount}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="betting-panel">
        <div className="color-bets">
          <button
            className="bet-btn green-bet"
            onClick={() => handleBetClick("green")}
          >
            Green
            {currentBets.green && (
              <span className="bet-amount">₹{currentBets.green}</span>
            )}
          </button>
          <button
            className="bet-btn violet-bet"
            onClick={() => handleBetClick("violet")}
          >
            Violet
            {currentBets.violet && (
              <span className="bet-amount">₹{currentBets.violet}</span>
            )}
          </button>
          <button
            className="bet-btn red-bet"
            onClick={() => handleBetClick("red")}
          >
            Red
            {currentBets.red && (
              <span className="bet-amount">₹{currentBets.red}</span>
            )}
          </button>
        </div>
        {getTotalBetAmount() > 0 && (
          <div className="total-bets">Total Bets: ₹{getTotalBetAmount()}</div>
        )}
      </div>
    </>
  );
};

export default BettingPanel;
