import React, { useEffect, useState } from "react";
import "./K3DiceGame.css";
import selectclock from "../../assets/yellowtimetype.png";
import whiteclock from "../../assets/timetype.png";
import { Link } from "react-router-dom";
import dice1 from "../../assets/diceFront1.png";
import dice2 from "../../assets/diceFront2.png";
import dice3 from "../../assets/diceFront3.png";
import dice4 from "../../assets/diceFront4.png";
import dice5 from "../../assets/diceFront5.png";
import dice6 from "../../assets/diceFront6.png";
import gamehistorydice1 from "../../assets/gamehistorydice1.png";
import gamehistorydice2 from "../../assets/gamehistorydice2.png";
import gamehistorydice3 from "../../assets/gamehistorydice3.png";
import gamehistorydice4 from "../../assets/gamehistorydice4.png";
import gamehistorydice5 from "../../assets/gamehistorydice5.png";
import gamehistorydice6 from "../../assets/gamehistorydice6.png";
import redball from "../../assets/k3gameball.png";
import greenball from "../../assets/kmgameballgreen.png";

const timeOptions = [
  { label: "1Min", key: "1" },
  { label: "3Min", key: "3" },
  { label: "5Min", key: "5" },
  { label: "10Min", key: "10" },
];

const getSecondsFromKey = (key) => {
  switch (key) {
    case "1":
      return 10;
    case "3":
      return 180;
    case "5":
      return 300;
    case "10":
      return 600;
    default:
      return 60;
  }
};

const numberOptions = [
  { number: 3, color: "red", multiplier: "207.36X" },
  { number: 4, color: "green", multiplier: "69.12X" },
  { number: 5, color: "red", multiplier: "34.56X" },
  { number: 6, color: "green", multiplier: "20.74X" },
  { number: 7, color: "red", multiplier: "13.83X" },
  { number: 8, color: "green", multiplier: "9.88X" },
  { number: 9, color: "red", multiplier: "8.3X" },
  { number: 10, color: "green", multiplier: "7.68X" },
  { number: 11, color: "red", multiplier: "7.68X" },
  { number: 12, color: "green", multiplier: "8.3X" },
  { number: 13, color: "green", multiplier: "9.88X" },
  { number: 14, color: "green", multiplier: "13.83X" },
  { number: 15, color: "red", multiplier: "20.74X" },
  { number: 16, color: "green", multiplier: "34.56X" },
  { number: 17, color: "red", multiplier: "69.12X" },
  { number: 18, color: "green", multiplier: "207.36X" },
];

const gameHistorydiceImages = {
  1: gamehistorydice1,
  2: gamehistorydice2,
  3: gamehistorydice3,
  4: gamehistorydice4,
  5: gamehistorydice5,
  6: gamehistorydice6,
};

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
const tabOptions = ["Total", "2 same", "3 same", "Different"];
const matchingPairs = ["11", "22", "33", "44", "55", "66"];
const uniquePairs = ["11", "22", "33", "44", "55", "66"];
const uniqueSingles = ["1", "2", "3", "4", "5", "6"];
const tripleNumbers = ["111", "222", "333", "444", "555", "666"];
const singleNumbers = ["1", "2", "3", "4", "5", "6"];
const K3DiceGame = () => {
  const [selected, setSelected] = useState("1");
  const [activeTab, setActiveTab] = useState("Total");
  const [historyTab, setHistoryTab] = useState("game");
  const [timeLeft, setTimeLeft] = useState(getSecondsFromKey("1"));
  const [showPopup, setShowPopup] = useState(false);
  const [diceResult, setDiceResult] = useState([1, 1, 1]); // final dice values
  const [diceHistory, setDiceHistory] = useState([]);

  const [shuffling, setShuffling] = useState(false);
  // ================ Funcanility Code  =========================

  useEffect(() => {
    setTimeLeft(getSecondsFromKey(selected));
    setShowPopup(false);
  }, [selected]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft <= 5 && timeLeft > 0) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      setShuffling(true);
      const shuffleInterval = setInterval(() => {
        setDiceResult([
          Math.floor(Math.random() * 6) + 1,
          Math.floor(Math.random() * 6) + 1,
          Math.floor(Math.random() * 6) + 1,
        ]);
      }, 100); // shuffle fast every 100ms

      setTimeout(() => {
        clearInterval(shuffleInterval);
        const final = [
          Math.floor(Math.random() * 6) + 1,
          Math.floor(Math.random() * 6) + 1,
          Math.floor(Math.random() * 6) + 1,
        ];
        const finalResult = getDiceResultInfo(final);
        setDiceResult(final);
        setShuffling(false);
        setTimeLeft(getSecondsFromKey(selected));

        setDiceHistory((prev) => [finalResult, ...prev.slice(0, 9)]); // 🔥 actual update
      }, 2000);
    }
  }, [timeLeft]);

  const getDiceResultInfo = (diceArray) => {
    const sum = diceArray.reduce((acc, val) => acc + val, 0);
    const size = sum <= 10 ? "Small" : "Big";
    const parity = sum % 2 === 0 ? "even" : "odd";
    const images = diceArray.map((num) => gameHistorydiceImages[num]);

    return {
      period: Date.now().toString().slice(0, 12), // e.g. 202506140685
      sum,
      size,
      parity,
      result: diceArray,
      images,
    };
  };

  return (
    <>
      <section className="k3-dice-game-section">
        <div className="k3-header">
          <h5>
            ₹684578945.75
            <span>
              <i className="bi bi-shuffle"></i>
            </span>
          </h5>
          <p>
            <span>
              <i className="bi bi-envelope-fill"></i>
            </span>
            Wallet balance
          </p>

          <div className="k3header-button">
            <Link className="text-decoration-none">
              <button className="withdraw">Withdraw</button>
            </Link>
            <Link className="text-decoration-none">
              <button className="deposit">Deposit</button>
            </Link>{" "}
          </div>
        </div>

        <div className="k3-game-time-select">
          {timeOptions.map((item) => (
            <div
              key={item.key}
              className={`watch-time-select ${
                selected === item.key ? "selected-tab" : ""
              }`}
              onClick={() => setSelected(item.key)}
            >
              <img
                src={selected === item.key ? selectclock : whiteclock}
                alt="watch"
              />
              <p className="m-0">K3 Lotre</p>
              <p className="m-0">{item.label}</p>
            </div>
          ))}

          <div className="dice-scroll-section"></div>
        </div>

        <div className="k3-game-play-section">
          <div className="game-play-head">
            <div className="period-text">
              <h6>Period</h6>
              <button>How to play</button>
            </div>
            <div className="game-number-timing">
              <h5>2025469875</h5>
              <div className="Running-counter">
                {String(Math.floor(timeLeft / 60))
                  .padStart(2, "0")
                  .split("")
                  .map((char, i) => (
                    <p key={i}>{char}</p>
                  ))}
                <p>:</p>
                {String(timeLeft % 60)
                  .padStart(2, "0")
                  .split("")
                  .map((char, i) => (
                    <p key={i}>{char}</p>
                  ))}
              </div>{" "}
            </div>
          </div>
          <div className="three-dice-animation">
            <div className="three-dice-inner">
              {diceResult.map((val, i) => (
                <div key={i} className="dice-1">
                  <img
                    src={diceImages[val - 1]}
                    className="dice-img"
                    alt={`dice-${val}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="k3-ball-select-tab-sections">
            {tabOptions.map((tab) => (
              <div
                key={tab}
                className={`ball-tab-select ${
                  activeTab === tab ? "active-tab" : "inactive-tab"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>

          {activeTab === "Total" && (
            <div className="k3-tab-change-data py-2 px-1">
              {showPopup && (
                <div className="k3-timer-popup-overlay">
                  <div className="k3-timer-popup-content d-flex gap-2">
                    <h1>0</h1>
                    <h1>{timeLeft}</h1>
                  </div>
                </div>
              )}

              {/* Number grid */}
              <div className="k3-number-grid">
                {numberOptions.map((item) => (
                  <div className="k3-ball-wrapper" key={item.number}>
                    <div
                      className="k3-ball"
                      style={{
                        backgroundImage: `url(${
                          item.color === "red" ? redball : greenball
                        })`,
                      }}
                    >
                      <span
                        className={
                          item.color === "red"
                            ? "k3-ball-number"
                            : "k3-ball-number-green"
                        }
                      >
                        {item.number}
                      </span>
                    </div>
                    <div className="k3-multiplier">{item.multiplier}</div>
                  </div>
                ))}
              </div>

              {/* Bottom Tabs */}
              <div className="k3-bottom-tabs">
                <div className="k3-tab orange">
                  Big
                  <br />
                  1.92X
                </div>
                <div className="k3-tab blue">
                  Small
                  <br />
                  1.92X
                </div>
                <div className="k3-tab red">
                  Odd
                  <br />
                  1.92X
                </div>
                <div className="k3-tab green">
                  Even
                  <br />
                  1.92X
                </div>
              </div>
            </div>
          )}

          {activeTab === "2 same" && (
            <div className="k3-tab2-wrapper">
              {/* Matching Numbers */}
              <div className="k3-tab2-section">
                <div className="k3-tab2-title">
                  2 matching numbers: odds(13.83){" "}
                  <span className="k3-tab2-tooltip">
                    <i className="bi bi-question-lg"></i>
                  </span>
                </div>
                <div className="k3-tab2-grid">
                  {matchingPairs.map((num) => (
                    <div className="k3-tab2-box purple" key={num}>
                      {num}
                    </div>
                  ))}
                </div>
              </div>

              {/* Unique Numbers */}
              <div className="k3-tab2-section">
                <div className="k3-tab2-title">
                  A pair of unique numbers: odds(69.12){" "}
                  <span className="k3-tab2-tooltip">
                    <i className="bi bi-question-lg"></i>
                  </span>
                </div>
                <div className="k3-tab2-grid">
                  {uniquePairs.map((num) => (
                    <div className="k3-tab2-box red" key={num}>
                      {num}
                    </div>
                  ))}
                </div>
                <div className="k3-tab2-grid mt-2">
                  {uniqueSingles.map((num) => (
                    <div className="k3-tab2-box blue" key={num}>
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {activeTab === "3 same" && (
            <div className="k3-tab3-wrapper">
              {/* Exact 3 of the same number */}
              <div className="k3-tab3-section">
                <div className="k3-tab3-title">
                  3 of the same number: odds(207.36){" "}
                  <span className="k3-tab3-tooltip">
                    {" "}
                    <i className="bi bi-question-lg"></i>
                  </span>
                </div>
                <div className="k3-tab3-grid">
                  {tripleNumbers.map((num) => (
                    <div className="k3-tab3-box purple" key={num}>
                      {num}
                    </div>
                  ))}
                </div>
              </div>

              {/* Any 3 of the same number */}
              <div className="k3-tab3-section mt-1">
                <div className="k3-tab3-title">
                  Any 3 of the same number: odds(34.56){" "}
                  <span className="k3-tab3-tooltip">
                    {" "}
                    <i className="bi bi-question-lg"></i>
                  </span>
                </div>
                <div className="k3-tab3-any-box">
                  Any 3 of the same number: odds
                </div>
              </div>
            </div>
          )}
          {activeTab === "Different" && (
            <div className="k3-tab3-wrapper">
              {/* Exact 3 of the same number */}
              <div className="k3-tab3-section">
                <div className="k3-tab3-title">
                  3 different numbers: odds(207.36){" "}
                  <span className="k3-tab3-tooltip">
                    {" "}
                    <i className="bi bi-question-lg"></i>
                  </span>
                </div>
                <div className="k3-tab3-grid">
                  {singleNumbers.map((num) => (
                    <div className="k3-tab3-box purple" key={num}>
                      {num}
                    </div>
                  ))}
                </div>
              </div>

              {/* Any 3 of the same number */}
              <div className="k3-tab3-section mt-1">
                <div className="k3-tab3-title">
                  Any 3 of the same number: odds(34.56){" "}
                  <span className="k3-tab3-tooltip">
                    {" "}
                    <i className="bi bi-question-lg"></i>
                  </span>
                </div>
                <div className="k3-tab3-any-box">
                  3 continuous numbers odd (8.64)
                </div>
              </div>
              {/* Exact 3 of the same number */}
              <div className="k3-tab3-section mt-1">
                <div className="k3-tab3-title">
                  2 different number: odds(6.91){" "}
                  <span className="k3-tab3-tooltip">
                    {" "}
                    <i className="bi bi-question-lg"></i>
                  </span>
                </div>
                <div className="k3-tab3-grid">
                  {singleNumbers.map((num) => (
                    <div className="k3-tab3-box purple" key={num}>
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="k3-gameHistory-myHistory-btn-section">
          <button
            className={`k3-gameHistory-btn ${
              historyTab === "game" ? "active" : ""
            }`}
            onClick={() => setHistoryTab("game")}
          >
            Game history
          </button>
          <button
            className={`k3-myHistory-btn ${
              historyTab === "my" ? "active" : ""
            }`}
            onClick={() => setHistoryTab("my")}
          >
            My history
          </button>
        </div>

        <div className="k3-gameHistory-myHistory-btn-tab-data mt-4">
          {historyTab === "game" ? (
            <div className="k3-gameHistory-table">
              <div className="k3-gameHistory-tab-row">
                <div>Period</div>
                <div>Sum</div>
                <div>Results</div>
              </div>

              {diceHistory.map((diceHistory) => (
                <div className="k3-gameHistory-row" key={diceHistory.period}>
                  <div>{diceHistory.period}</div>

                  <div>{diceHistory.sum}</div>
                  <div>{diceHistory.size}</div>
                  <div>{diceHistory.parity}</div>

                  <div className="k3-dice-images">
                    {diceHistory.result.map((num, idx) => (
                      <img
                        src={gameHistorydiceImages[num]}
                        alt={`dice-${num}`}
                        key={idx}
                        className="k3-dice-icon"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="k3-myHistory-placeholder">
              <div>
                <div className="game-history-number">
                  <div className="number">12646987456</div>
                  <button className="game-history-status">failed</button>
                </div>
                <div className="date-and-time-history">
                  <div className="time">05:12</div>
                  <div className="date">01/01/2023</div>
                </div>
              </div>

              <div className="my-history-payment">
                <h6 className="payment-amount text-danger">-9800</h6>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default K3DiceGame;
