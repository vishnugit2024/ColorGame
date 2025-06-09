import React from "react";
import "../../pages/wingo/game.css";
// import NumberBall from './NumberBall';
const numberImageUrls = {
  0: "https://winfast.site/images/n0-30bd92d1.png",
  1: "https://winfast.site/images/n1-dfccbff5.png",
  2: "https://winfast.site/images/n2-c2913607.png",
  3: "https://winfast.site/images/n3-f92c313f.png",
  4: "https://winfast.site/images/n4-cb84933b.png",
  5: "https://winfast.site/images/n5-49d0e9c5.png",
  6: "https://winfast.site/images/n6-a56e0b9a.png",
  7: "https://winfast.site/images/n7-5961a17f.png",
  8: "https://winfast.site/images/n8-d4d951a4.png",
  9: "https://winfast.site/images/n9-a20f6f42.png",
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
              onClick={() => console.log(`Bet placed on number ${number}`)}
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
