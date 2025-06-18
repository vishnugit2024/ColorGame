import React from "react";
import "../../pages/wingo/game.css";
import NumberBal0 from "../../assets/ball0.png";
import NumberBall from "../../assets/ball1.png";
import NumberBal2 from "../../assets/ball2.png";
import NumberBal3 from "../../assets/ball3.png";
import NumberBal4 from "../../assets/ball4.png";
import NumberBal5 from "../../assets/ball5.png";
import NumberBal6 from "../../assets/ball6.png";
import NumberBal7 from "../../assets/ball7.png";
import NumberBal8 from "../../assets/ball8.png";
import NumberBal9 from "../../assets/ball9.png";

const numberImageUrls = {
  0: NumberBal0,
  1: NumberBall,
  2: NumberBal2,
  3: NumberBal3,
  4: NumberBal4,
  5: NumberBal5,
  6: NumberBal6,
  7: NumberBal7,
  8: NumberBal8,
  9: NumberBal9,
};
const GameBoard = ({ onBetClick }) => {
  return (
    <div className="game-board">
      <div className="wingame-title"></div>
      <div className="number-grid">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <div key={number} className="number-image-item">
            <img
              src={numberImageUrls[number]}
              alt={`Number ${number}`}
              className="number-image"
              onClick={() => onBetClick(number)}
            />
          </div>
        ))}
      </div>
      <div className="size-betting-section">
        <div className="size-option big" onClick={() => onBetClick("big")}>
          <span>Big</span>
        </div>
        <div className="size-option small" onClick={() => onBetClick("small")}>
          <span>Small</span>
        </div>
      </div>
    </div>
  );
};
export default GameBoard;
