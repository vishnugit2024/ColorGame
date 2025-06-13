import React, { useState } from "react";
import "./K3DiceGame.css";
import selectclock from "../../assets/yellowtimetype.png";
import whiteclock from "../../assets/timetype.png";
import { Link } from "react-router-dom";
import dice1 from "../../assets/diceFront1.png";
import dice2 from "../../assets/diceFront2.png";
import dice5 from "../../assets/diceFront5.png";

const K3DiceGame = () => {
  const timeOptions = [
    { label: "1Min", key: "1" },
    { label: "3Min", key: "3" },
    { label: "5Min", key: "5" },
    { label: "10Min", key: "10" },
  ];

  const tabOptions = ["Total", "2 same", "3 same", "Different"];

  const [selected, setSelected] = useState("1");
  const [activeTab, setActiveTab] = useState("Total");

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
              <i class="bi bi-envelope-fill"></i>
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
              <div className="Running-counter">Running Counter</div>
            </div>
          </div>
          <div className="three-dice-animation">
            <div className="three-dice-inner">
              <div className="dice-1">
                <img src={dice1} className="dice-img" alt="dice-image" />
              </div>
              <div className="dice-1">
                <img src={dice2} className="dice-img" alt="dice-image" />
              </div>
              <div className="dice-1">
                <img src={dice5} className="dice-img" alt="dice-image" />
              </div>
            </div>
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
        <div className="k3-tab-change-data p-1">
          {activeTab === "Total" && <div>Show Total UI here</div>}
          {activeTab === "2 same" && <div>Show 2 Same UI here</div>}
          {activeTab === "3 same" && <div>Show 3 Same UI here</div>}
          {activeTab === "Different" && <div>Show Different UI here</div>}
        </div>
      </section>
    </>
  );
};

export default K3DiceGame;
