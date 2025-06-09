import React, { useState } from 'react';
import '../../pages/wingo/game.css';
const BettingPanel = ({ onPlaceBet, currentBets }) => {
  const [selectedAmount, setSelectedAmount] = useState(1);
  const [betType, setBetType] = useState('');
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
  if (showBetModal) {
    return (
      <div className="bet-modal-overlay">
        <div className={`bet-modal ${betType}-theme`}>
       <div className={`modal-header-1 ${betType}-header`}>
            <h3>Win Go 1min</h3>
            <div className="bet-selection">
              Select {betType}
            </div>
          </div>
          <div className="modal-content">
            <div className="balance-section-2">
              <span>Balance</span>
              <div className="balance-options">
                {betAmounts.map(amount => (
                  <button
                    key={amount}
                    className={`balance-btn ${selectedAmount === amount ? 'active' : ''}`}
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
                  onChange={(e) => setSelectedAmount(Math.max(1, parseInt(e.target.value) || 1))}
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
              {multipliers.map(mult => (
                <button
                  key={mult}
                  className={`multiplier-btn ${mult === 1 ? 'active' : ''}`}
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
            <button 
              className="cancel-btn"
              onClick={() => setShowBetModal(false)}
            >
              Cancel
            </button>
            <button 
              className="confirm-btn"
              onClick={confirmBet}
            >
              Total amount ₹{selectedAmount}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="betting-panel">
      <div className="color-bets">
  <button className="bet-btn green-bet" onClick={() => handleBetClick('green')}>
    Green
    {currentBets.green && <span className="bet-amount">₹{currentBets.green}</span>}
  </button>
  <button className="bet-btn violet-bet" onClick={() => handleBetClick('violet')}>
    Violet
    {currentBets.violet && <span className="bet-amount">₹{currentBets.violet}</span>}
  </button>
  <button className="bet-btn red-bet" onClick={() => handleBetClick('red')}>
    Red
    {currentBets.red && <span className="bet-amount">₹{currentBets.red}</span>}
  </button>
</div>
      {getTotalBetAmount() > 0 && (
        <div className="total-bets">
          Total Bets: ₹{getTotalBetAmount()}
        </div>
      )}
    </div>
  );
};

export default BettingPanel;