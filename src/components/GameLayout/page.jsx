import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import GameBoard from "../../components/Win-Go/GameBoard";
import BettingPanel from "../../components/Win-Go/BettingPanel";
import GameHistory from "../../components/Win-Go/GameHistory";
import BettingModal from "../../components/BettingModal/BettingModal";
import { Link } from "react-router-dom";
import timerAudio from '/audio/timer_count.mp3';
import winnerImage from '../../assets/winner.png';
// import './game.css'; // Uncomment if you have this CSS file

const GameLayout = () => {
  // --- State Declarations ---
  const [balance, setBalance] = useState(35131468.36);
  const [currentBets, setCurrentBets] = useState({});
  const [gameResults, setGameResults] = useState([]);
  const [currentPeriod, setCurrentPeriod] = useState("202506050732");
  const [activeTab, setActiveTab] = useState("1min");

  // Main game timers for different tabs
  const [timers, setTimers] = useState({
    1: 60, // 1-minute timer (initially 60, changed to 10 for quick testing)
    3: 180, // 3-minute timer
    5: 300, // 5-minute timer
    10: 600, // 10-minute timer
  });

  // Popup specific states
  const [popupTimer, setPopupTimer] = useState(null); // Countdown for the 5-second popup
  const [showPopup, setShowPopup] = useState(false); // Controls visibility of the countdown popup
  const [showResultPopup, setShowResultPopup] = useState(false); // Controls visibility of the winner/loser popup
  const [resultPopupPeriod, setResultPopupPeriod] = useState(""); // To display the correct period in result popup

  // Flags to ensure popups and results show once per period per timer type
  const [hasProcessedRound, setHasProcessedRound] = useState({
    1: false,
    3: false,
    5: false,
    10: false,
  });

  // Betting modal states
  const [selectedAmount, setSelectedAmount] = useState(1);
  const [betType, setBetType] = useState("");
  const [showBetModal, setShowBetModal] = useState(false);

  // Refs for managing intervals and timeouts for cleanup
  const mainIntervalRef = useRef(null);
  const countdownIntervalRef = useRef(null);
  const resultPopupTimeoutRef = useRef(null); // This ref is specifically for the result popup's auto-close

  // Hardcoded betting history (can be fetched/managed if dynamic)
  const [bettingHistory] = useState([
    { period: "202506050731", time: "07:31:00", betType: "green", amount: 250.0, status: "success" },
    { period: "202506050730", time: "07:30:00", betType: "red", amount: 100.0, status: "failed" },
    { period: "202506050729", time: "07:29:00", betType: "number-5", amount: 450.0, status: "success" },
    { period: "202506050728", time: "07:28:00", betType: "big", amount: 200.0, status: "failed" },
    { period: "202506050727", time: "07:27:00", betType: "violet", amount: 675.0, status: "success" },
    { period: "202506050726", time: "07:26:00", betType: "small", amount: 150.0, status: "failed" },
    { period: "202506050725", time: "07:25:00", betType: "number-3", amount: 540.0, status: "success" },
  ]);

  // --- Utility Functions ---

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")} : ${secs.toString().padStart(2, "0")}`;
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
    setCurrentBets({}); // Clear current bets after processing
  };

  const generateGameResult = (triggeredTabKey, currentPeriodValue) => {
    const winningNumber = Math.floor(Math.random() * 10); // 0-9
    const isSmall = winningNumber < 5; // 0,1,2,3,4 are Small
    let colors = [];

    if (winningNumber === 0) colors = ["red", "violet"];
    else if (winningNumber === 5) colors = ["green", "violet"];
    else if ([1, 3, 7, 9].includes(winningNumber)) colors = ["green"];
    else if ([2, 4, 6, 8].includes(winningNumber)) colors = ["red"];

    const newResult = {
      period: currentPeriodValue, // Use the period from when the result was triggered
      number: winningNumber,
      colors,
      size: isSmall ? "Small" : "Big",
      timestamp: new Date().toLocaleString(),
    };

    setGameResults((prev) => [newResult, ...prev.slice(0, 9)]); // Keep last 10 results
    processBets(newResult); // Process bets with the new result

    // Mark this tab as having processed its round
    setHasProcessedRound((prev) => ({
      ...prev,
      [triggeredTabKey]: true,
    }));
  };

  // --- Handlers ---

  const handleBetClick = (type) => {
    setBetType(type);
    setSelectedAmount(1);
    setShowBetModal(true);
  };

  const placeBet = (type, amount) => {
    if (balance >= amount) {
      setCurrentBets((prev) => ({
        ...prev,
        [type]: (prev[type] || 0) + amount,
      }));
      setBalance((prev) => prev - amount);
    } else {
      console.warn("Insufficient balance to place bet.");
      // You might want to show a user-facing error message here
    }
  };

  const confirmBet = () => {
    if (betType && selectedAmount > 0) {
      placeBet(betType, selectedAmount);
      setShowBetModal(false);
    }
  };

  const handleTabChange = (mode) => {
    setActiveTab(mode);
    // When switching tabs, ensure any active popups related to previous tab are cleared
    setShowPopup(false);
    setShowResultPopup(false);
    setPopupTimer(null);

    // Clear any pending timeouts/intervals associated with popups
    if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
    }
    // Also clear the result popup timeout if switching tabs
    if (resultPopupTimeoutRef.current) {
        clearTimeout(resultPopupTimeoutRef.current);
        resultPopupTimeoutRef.current = null;
    }
  };

  // --- Effects ---

  // Preload tick sound (runs once on mount)
  useEffect(() => {
    const tickAudio = new Audio("/sounds/tick.mp3"); // Assuming this path is correct
    tickAudio.load();
  }, []);

  // Main game timer logic (continues uninterrupted)
  useEffect(() => {
    mainIntervalRef.current = setInterval(() => {
      setTimers((prevTimers) => {
        const updatedTimers = { ...prevTimers };

        Object.entries(updatedTimers).forEach(([tabKeyStr, time]) => {
          const numericTabKey = parseInt(tabKeyStr);

          if (time > 0) {
            updatedTimers[numericTabKey] = time - 1;

            // Play sound for last few seconds (e.g., last 5 seconds of betting)
            // This range should ideally be where betting closes, and the popup appears.
            if (time <= 6 && time >= 1) { // This means sounds for main timer values 6, 5, 4, 3, 2, 1
              const tickAudio = new Audio(timerAudio);
              tickAudio.play().catch((e) => console.log("Sound play error:", e));
            }

            // Trigger countdown popup logic
            // This condition means the main timer is currently '5', and on the next render, it will be '4'.
            // So, we want the popup to start displaying '4' to be in sync.
            if (time === 5 && !hasProcessedRound[numericTabKey]) {
                if (!showPopup) {
                    // Initialize popup timer to be '1' second less than the current 'time' value
                    // This makes it show '4' when the main timer shows '4' (after its decrement)
                    let initialCountdownValue = time - 1;
                    setPopupTimer(initialCountdownValue);
                    setShowPopup(true);
                    setResultPopupPeriod(currentPeriod);

                    // Clear any existing countdown interval to prevent duplicates
                    if (countdownIntervalRef.current) {
                        clearInterval(countdownIntervalRef.current);
                    }

                    countdownIntervalRef.current = setInterval(() => {
                        setPopupTimer((prevCountdown) => {
                            const newCountdown = prevCountdown - 1;
                            // When newCountdown becomes -1, it means it just showed 0, so clear and proceed
                            if (newCountdown < 0) {
                                clearInterval(countdownIntervalRef.current);
                                countdownIntervalRef.current = null;
                                setShowPopup(false); // Hide the 5-second countdown popup

                                setShowResultPopup(true); // Show the result popup
                                console.log("Result popup shown for period:", currentPeriod);
                                generateGameResult(numericTabKey, currentPeriod);
                                // The auto-closing of the result popup is handled by the dedicated useEffect below
                            }
                            return newCountdown;
                        });
                    }, 1000); // Countdown every second
                }
            }
          } else {
            // Timer has reached 0.
            // Reset timer only IF its round has been processed (i.e., result generated and displayed)
            if (hasProcessedRound[numericTabKey]) {
                updatedTimers[numericTabKey] = numericTabKey * 60; // Reset to full duration (e.g., 60, 180, etc.)
                // Reset the processed flag for the new round
                setHasProcessedRound((prev) => ({
                    ...prev,
                    [numericTabKey]: false,
                }));
                 // Increment currentPeriod only once when all timers that triggered a result reset
                 // This logic might need refinement if you want different periods for different game modes
                 // For now, it increments globally after one timer cycle completes.
                setCurrentPeriod((prev) => String(parseInt(prev) + 1));
            }
          }
        });

        return updatedTimers;
      });
    }, 1000); // Main interval ticks every second

    // Cleanup function for main interval
    return () => {
      if (mainIntervalRef.current) clearInterval(mainIntervalRef.current);
      // Other cleanups (countdown, result popup) are handled by their specific effects or direct conditions.
    };
  }, [hasProcessedRound, currentPeriod, currentBets, balance, showPopup]); // Added showPopup to dependencies to ensure it's fresh

  // DEDICATED useEffect to handle the auto-closing of the result popup
  useEffect(() => {
    if (showResultPopup) {
      console.log("Setting timeout to close result popup in 2-3 seconds...");
      // Clear any existing timeout for safety before setting a new one
      if (resultPopupTimeoutRef.current) {
        clearTimeout(resultPopupTimeoutRef.current);
      }
      resultPopupTimeoutRef.current = setTimeout(() => {
        setShowResultPopup(false);
        resultPopupTimeoutRef.current = null; // Clear ref after execution
        console.log("Result popup hidden by dedicated useEffect.");
      }, 2500); // Popup visible for 2.5 seconds (adjust to 2000 for 2s or 3000 for 3s)
    }

    // Cleanup function for this specific useEffect
    return () => {
      if (resultPopupTimeoutRef.current) {
        clearTimeout(resultPopupTimeoutRef.current);
        resultPopupTimeoutRef.current = null;
        console.log("Cleared result popup timeout on cleanup.");
      }
    };
  }, [showResultPopup]); // This effect runs ONLY when showResultPopup changes

  // Cleanup for countdownIntervalRef (general cleanup on unmount)
  useEffect(() => {
    return () => {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
      }
    };
  }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

  // --- Render Logic ---
  return (
    <div className="game-container">
      <header className="game-header">
        <div className="wallet-section">
          <div className="wallet-balance">
            <span className="balance-label">
              <i className="bi bi-envelope-fill"></i> Wallet balance
            </span>
            <span className="wingo-balance-amount">
              ₹{balance.toFixed(2)} <FontAwesomeIcon icon={faSyncAlt} />
            </span>
          </div>
          <div className="wallet-actions">
            <Link to={"/withdraw"} className="withdraw-1">
              Withdraw
            </Link>
            <Link to={"/deposit"} className="deposit-2">
              Deposit
            </Link>
          </div>
        </div>
      </header>
      <nav className="game-nav">
        {["1min", "3min", "5min", "10min"].map((mode) => (
          <button
            key={mode}
            className={`nav-btn ${activeTab === mode ? "active" : ""}`}
            onClick={() => handleTabChange(mode)}
          >
            <div className="clock-icon" />
            Win Go {mode.replace("min", "Min")}
          </button>
        ))}
      </nav>
      <div className="info-bar">
        <div className="how-to-play">
          <button className="how-btn">📖 How to play</button>
          <div className="win-go-info">
            Win Go {activeTab.replace("min", "Min")}
          </div>
          <div className="last-result">
            {gameResults.slice(0, 5).map((res) => (
              <span
                key={`${res.period}-${res.timestamp}`}
                className={`ball ball-${res.number}`}
              >
                {res.number}
              </span>
            ))}
          </div>
        </div>
        <div className="time-remaining">
          <div className="tm-label">Time remaining</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            {formatTime(timers[parseInt(activeTab)])
              .split("")
              .map((char, idx) => {
                if (char === ":") {
                  return (
                    <span key={idx} className="time-separator">
                      :
                    </span>
                  );
                } else if (char === " ") {
                  return <span key={idx} style={{ width: "8px" }} />;
                } else {
                  return (
                    <div key={idx} className="time-display">
                      {char}
                    </div>
                  );
                }
              })}
          </div>
          <div className="period-id">{currentPeriod}</div>
        </div>
      </div>

      {activeTab && (
        <>
          <div className="bating-panel-main">
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
          </div>
        </>
      )}
      <GameHistory results={gameResults} bettingHistory={bettingHistory} />

      {/* Countdown Timer Popup (Visible when showPopup is true and popupTimer has a value) */}
      {showPopup && popupTimer !== null && (
        <div className="random-timer-overlay">
          <div className="random-timer-popup">
            <div className="random-timer-digits-container">
              {/* Ensure popupTimer doesn't go below 0 for display, although internally it might reach -1 */}
              {String(Math.max(0, popupTimer))
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

      {/* Result (Winner/Loser) Popup (Visible when showResultPopup is true) */}
      {showResultPopup && (
        <div className="result-pop">
          <img src={winnerImage} alt="Winner" className="winner-image" />
          <p className="result-win-msg">Congratulations</p>
          <div className="result-details-pop">
            <p className="result-bonus">Bonus</p>
            <p className="result-price">₹ 2000.00</p> {/* This is static */}
            <span className="result-period">
              Period: 1 minute {resultPopupPeriod} {/* Display the period that triggered this result */}
            </span>
          </div>
        </div>
      )}

      {/* Betting Modal */}
      <BettingModal
        show={showBetModal}
        betType={betType}
        selectedAmount={selectedAmount}
        setSelectedAmount={setSelectedAmount}
        confirmBet={confirmBet}
        onClose={() => setShowBetModal(false)}
        activeTab={activeTab}
      />
    </div>
  );
};

export default GameLayout;