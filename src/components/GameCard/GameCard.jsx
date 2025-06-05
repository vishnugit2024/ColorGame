import React from "react";
import "./GameCard.css";

// Sample images (replace with actual imports or paths)
import lotteryImg from "../../assets/game1.png";
import popularImg from "../../assets/game2.png";
import slotsImg from "../../assets/game3.png";
import sportsImg from "../../assets/game4.png";
import originalImg from "../../assets/game5.png";
import rummyImg from "../../assets/game6.png";
import casinoImg from "../../assets/game7.png";

const gameList = [
  { name: "Lottery", image: lotteryImg },
  { name: "Popular", image: popularImg },
  { name: "Slots", image: slotsImg },
  { name: "Sports", image: sportsImg },
  { name: "Original", image: originalImg },
  { name: "Rummy", image: rummyImg },
  { name: "Casino", image: casinoImg },
];

const GameCard = () => {
  return (
    <div className="game-card-wrapper">
      {gameList.map((game, index) => (
        <div className="game-card" key={index}>
          <img src={game.image} alt={game.name} className="game-img" />
          <div className="game-title">{game.name}</div>
        </div>
      ))}
    </div>
  );
};

export default GameCard;
