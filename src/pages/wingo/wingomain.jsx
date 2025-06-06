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
  const [bettingHistory] = useState([{
        period: '202506050731',
        time: '07:31:00',
        betType: 'green',
        amount: 250.00,
        status: 'success'
      },
      {
        period: '202506050730',
        time: '07:30:00',
        betType: 'red',
        amount: 100.00,
        status: 'failed'
      },
      {
        period: '202506050729',
        time: '07:29:00',
        betType: 'number-5',
        amount: 450.00,
        status: 'success'
      },
      {
        period: '202506050728',
        time: '07:28:00',
        betType: 'big',
        amount: 200.00,
        status: 'failed'
      },
      {
        period: '202506050727',
        time: '07:27:00',
        betType: 'violet',
        amount: 675.00,
        status: 'success'
      },
      {
        period: '202506050726',
        time: '07:26:00',
        betType: 'small',
        amount: 150.00,
        status: 'failed'
      },
      {
        period: '202506050725',
        time: '07:25:00',
        betType: 'number-3',
        amount: 540.00,
        status: 'success'
      },]);
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
          <button className="how-btn">📖 How to play
          </button>
          <div className="game-title">
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
          />
          <GameBoard
            gameResults={gameResults}
            onBet={placeBet}
            currentBets={currentBets}
          />
        </>
      )}
      <GameHistory
        results={gameResults}
        bettingHistory={bettingHistory}
      />
       {showPopup && popupTimer !== null && (
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
        </div>
      )}
    </div>
  );
};

export default Index;
