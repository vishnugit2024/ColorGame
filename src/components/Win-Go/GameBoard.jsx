
import React from 'react';
import '../../pages/wingo/game.css';
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


const GameBoard = () => {

  return (
    <div className="game-board">
      <div className="game-title"></div>
      
      {/* <div className="recent-results">
        {lastResults.map((result) => (
          <div key={result.period} className="result-item">
            <NumberBall 
              number={result.number} 
              colors={result.colors}
              size="small"
            />
          </div>
        ))}
      </div> */}

      {/* <div className="color-betting-section">
        <div className="color-option green">
          <span>Green</span>
        </div>
        <div className="color-option violet">
          <span>Violet</span>
        </div>
        <div className="color-option red">
          <span>Red</span>
        </div>
      </div> */}

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
        <div className="size-option big">
          <span>Big</span>
        </div>
        <div className="size-option small">
          <span>Small</span>
        </div>
      </div>
    </div>
  );
};

// const getNumberColors = (number) => {
//   if (number === 0) return ['red', 'violet'];
//   if (number === 5) return ['green', 'violet'];
//   if ([1, 3, 7, 9].includes(number)) return ['green'];
//   if ([2, 4, 6, 8].includes(number)) return ['red'];
//   return ['gray'];
// };

export default GameBoard;