import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import GameBoard from "../../components/Win-Go/GameBoard";
import BettingPanel from "../../components/Win-Go/BettingPanel";
import GameHistory from "../../components/Win-Go/GameHistory";
import "../../pages/wingo/game.css";
const Index = () => {
  const [balance, setBalance] = useState(35131468.36);
  const [currentBets, setCurrentBets] = useState({});
  const [gameResults, setGameResults] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(34);
  const [currentPeriod, setCurrentPeriod] = useState("202506050732");
  const [activeTab, setActiveTab] = useState("1min");
  const [bettingHistory] = useState([
    {
      period: "202506050731",
      time: "07:31:00",
      betType: "green",
      amount: 250.0,
      status: "success",
    },
    {
      period: "202506050730",
      time: "07:30:00",
      betType: "red",
      amount: 100.0,
      status: "failed",
    },
    {
      period: "202506050729",
      time: "07:29:00",
      betType: "number-5",
      amount: 450.0,
      status: "success",
    },
    {
      period: "202506050728",
      time: "07:28:00",
      betType: "big",
      amount: 200.0,
      status: "failed",
    },
    {
      period: "202506050727",
      time: "07:27:00",
      betType: "violet",
      amount: 675.0,
      status: "success",
    },
    {
      period: "202506050726",
      time: "07:26:00",
      betType: "small",
      amount: 150.0,
      status: "failed",
    },
    {
      period: "202506050725",
      time: "07:25:00",
      betType: "number-3",
      amount: 540.0,
      status: "success",
    },
  ]);
  // esme jo small and big per click krne per jo modal open hoga betingpenel se
  const [selectedAmount, setSelectedAmount] = useState(1);
  const [betType, setBetType] = useState("");
  const [showBetModal, setShowBetModal] = useState(false);
  const handleBetClick = (type) => {
    setBetType(type);
    setSelectedAmount(1);
    setShowBetModal(true);
  };
  const confirmBet = () => {
    if (betType && selectedAmount > 0) {
      placeBet(betType, selectedAmount);
      setShowBetModal(false);
    }
  };
  // popup ke liye timer state start
  const [popupTimer, setPopupTimer] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          generateGameResult();
          return 60;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    let popupInterval;
    let randomDelayTimer;
    const startRandomPopup = () => {
      const randomDelay = Math.random() * (15000 - 5000) + 5000;
      randomDelayTimer = setTimeout(() => {
        setPopupTimer(4);
        setShowPopup(true);
      }, randomDelay);
    };
    startRandomPopup();
    if (showPopup && popupTimer !== null) {
      popupInterval = setInterval(() => {
        setPopupTimer((prev) => {
          if (prev <= 1) {
            setShowPopup(false);
            clearInterval(popupInterval);
            startRandomPopup();
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      clearInterval(popupInterval);
      clearTimeout(randomDelayTimer);
    };
  }, [showPopup, popupTimer]);
  // pupup ke liye timer end
  const generateGameResult = () => {
    const winningNumber = Math.floor(Math.random() * 10);
    const isSmall = winningNumber < 5;
    let colors = [];
    if (winningNumber === 0) colors = ["red", "violet"];
    else if (winningNumber === 5) colors = ["green", "violet"];
    else if ([1, 3, 7, 9].includes(winningNumber)) colors = ["green"];
    else if ([2, 4, 6, 8].includes(winningNumber)) colors = ["red"];
    const newResult = {
      period: currentPeriod,
      number: winningNumber,
      colors,
      size: isSmall ? "Small" : "Big",
      timestamp: new Date().toLocaleString(),
    };
    setGameResults((prev) => [newResult, ...prev.slice(0, 9)]);
    setCurrentPeriod((prev) => String(parseInt(prev) + 1));
    processBets(newResult);
  };
  const processBets = (result) => {
    let totalWinnings = 0;
    let totalLoss = 0;
    Object.entries(currentBets).forEach(([betType, amount]) => {
      if (betType === "green" && result.colors.includes("green")) {
        totalWinnings += amount * 2;
      } else if (betType === "red" && result.colors.includes("red")) {
        totalWinnings += amount * 2;
      } else if (betType === "violet" && result.colors.includes("violet")) {
        totalWinnings += amount * 4.5;
      } else if (betType === "big" && result.size === "Big") {
        totalWinnings += amount * 2;
      } else if (betType === "small" && result.size === "Small") {
        totalWinnings += amount * 2;
      } else if (betType === `number-${result.number}`) {
        totalWinnings += amount * 9;
      } else {
        totalLoss += amount;
      }
    });
    setBalance((prev) => prev + totalWinnings - totalLoss);
    setCurrentBets({});
  };
  const placeBet = (betType, amount) => {
    if (balance >= amount) {
      setCurrentBets((prev) => ({
        ...prev,
        [betType]: (prev[betType] || 0) + amount,
      }));
      setBalance((prev) => prev - amount);
    }
  };
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  return (
    <div className="game-container">
      <header className="game-header">
        <div className="wallet-section">
          <div className="wallet-balance">
            <span className="balance-label">
              <i className="bi bi-envelope"></i> Wallet balance
            </span>
            <span className="balance-amount">
              ₹{balance.toFixed(2)} <FontAwesomeIcon icon={faSyncAlt} />
            </span>
          </div>
          <div className="wallet-actions">
            <button className="withdraw-btn">Withdraw</button>
            <button className="deposit-btn">Deposit</button>
          </div>
        </div>
      </header>
      <nav className="game-nav">
        {["1min", "3min", "5min", "10min"].map((mode) => (
          <button
            key={mode}
            className={`nav-btn ${activeTab === mode ? "active" : ""}`}
            onClick={() => setActiveTab(mode)}
          >
            <div className="clock-icon" />
            Win Go {mode.replace("min", "Min")}
          </button>
        ))}
      </nav>
      <br />
      <div className="info-bar">
        <div className="how-to-play">
          <button className="how-btn">📖 How to play</button>
          <div className="win-go-info">
            Win Go {activeTab.replace("min", "Min")}
          </div>
          <div className="last-result">
            {gameResults.slice(0, 5).map((res, idx) => (
              <span key={idx} className={`ball ball-${res.number}`}>
                {res.number}
              </span>
            ))}
          </div>
        </div>
        <div className="time-remaining">
          <div className="label">Time remaining</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {formatTime(timeRemaining)
              .split("")
              .map((char, idx) =>
                char === ":" ? (
                  <span key={idx} className="time-separator">
                    :
                  </span>
                ) : (
                  <div key={idx} className="time-display">
                    {char}
                  </div>
                )
              )}
          </div>
          <div className="period-id">{currentPeriod}</div>
        </div>
      </div>
      {activeTab && (
        <>
          <BettingPanel
            onPlaceBet={placeBet}
            balance={balance}
            currentBets={currentBets}
            handleBetClick={handleBetClick}
          />
          <GameBoard
            onBetClick={handleBetClick}
            gameResults={gameResults}
            onBet={placeBet}
            currentBets={currentBets}
          />
        </>
      )}
      <GameHistory results={gameResults} bettingHistory={bettingHistory} />
      {/* popup timer start */}
      {/* {showPopup && popupTimer !== null && (
        <div className="random-timer-overlay">
          <div className="random-timer-popup">
            <div className="random-timer-digits-container">
              {String(popupTimer)
                .padStart(2, "0")
                .split("")
                .map((digit, index) => (
                  <div key={index} className="random-timer-digit-card">
                    {digit}
                  </div>
                ))}
            </div>
          </div>
        </div> */}

      {/* )} */}

      {/* popup timer end */}
      {/* small and big ka balance history start */}
      {showBetModal && (
        <div className="bet-modal-overlay">
          <div className={`bet-modal ${betType}-theme`}>
            <div className={`modal-header ${betType}-header`}>
              <h3>Win Go 1min</h3>
              <div className="bet-selection">Select {betType}</div>
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
              <button
                className="cancel-btn"
                onClick={() => setShowBetModal(false)}
              >
                Cancel
              </button>
              <button className="confirm-btn" onClick={confirmBet}>
                Total amount ₹{selectedAmount}
              </button>
            </div>
          </div>
        </div>
        // small and big ka balance history end
      )}
    </div>
  );
};
export default Index;
