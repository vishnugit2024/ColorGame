import React from "react";
import "./WinnerChart.css";
import crown1 from "../../assets/Taj1.png"; // gold
import crown2 from "../../assets/Taj2.png"; // silver
import crown3 from "../../assets/Taj3.png"; // bronze
import user1 from "../../assets/profilepicture1.png"; // replace with actual images
import user2 from "../../assets/profilepicture2.png";
import user3 from "../../assets/profilepicture3.png";
import user4 from "../../assets/profilepicture4.png";
import user5 from "../../assets/profilepicture5.png";
import number1 from "../../assets/number1.png";
import number2 from "../../assets/number2.png";
import number3 from "../../assets/number3.png";

const winners = [
  {
    rank: "NO2",
    name: "Mem***AZA",
    amount: "₹19,598,433.96",
    image: user1,
    crown: crown2,
    rankimage: number2,
  },
  {
    rank: "NO1",
    name: "Mem***DWX",
    amount: "₹509,945,491.16",
    image: user2,
    crown: crown1,
    rankimage: number1,
  },
  {
    rank: "NO3",
    name: "Mem***XKK",
    amount: "₹19,598,040.00",
    image: user3,
    crown: crown3,
    rankimage: number3,
  },
];

const others = [
  {
    rank: 4,
    name: "Mem***LSI",
    amount: "₹14,784,230.00",
    image: user4,
  },
  {
    rank: 5,
    name: "Mem***QIQ",
    amount: "₹10,519,361.16",
    image: user5,
  },
];

const WinnerChart = () => {
  return (
    <div className="winnerchart-section">
      <div className="winnerchart-header">
        <h5 className="winnerchart-title">
          <span className="dot"></span> Winning Information
        </h5>
      </div>


      <div className="top-three">
        {winners.map((winner, index) => (
          <div
            key={index}
            className={`winner-box ${
              winner.rank === "NO1" ? "center" : "side"
            }`}
          >
            <div className="img-container">
              <img
                src={winner.image}
                alt={winner.name}
                className="winner-img"
              />
              <img src={winner.crown} alt="crown" className="crown-img" />
            </div>
            <img
              src={winner.rankimage}
              alt={winner.rank}
              className="rank-tag"
            />
            <div className="winnerChart-name">{winner.name}</div>
            <div className="winnerChart-amount">{winner.amount}</div>
          </div>
        ))}
      </div>

      <div className="others-list">
        {others.map((user, index) => (
          <div className="other-card" key={index}>
            <span className="rank-number">{user.rank}</span>
            <img src={user.image} alt={user.name} className="other-img" />
            <span className="other-name">{user.name}</span>
            <span className="other-amount">{user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinnerChart;
