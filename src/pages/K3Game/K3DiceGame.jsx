import React, { useState } from "react";
import "./K3DiceGame.css";
import selectclock from "../../assets/yellowtimetype.png";
import whiteclock from "../../assets/timetype.png";
import { Link } from "react-router-dom";

const K3DiceGame = () => {
  const timeOptions = [
    { label: "1Min", key: "1" },
    { label: "3Min", key: "3" },
    { label: "5Min", key: "5" },
    { label: "10Min", key: "10" },
  ];

  const [selected, setSelected] = useState("1");

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
          
        </div>
      </section>
    </>
  );
};

export default K3DiceGame;
