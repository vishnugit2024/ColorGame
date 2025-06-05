
import React from 'react';
import NumberBall from './NumberBall';

const GameBoard = ({ gameResults }) => {
  const lastResults = gameResults.slice(0, 5);

  return (
    <div className="game-board">
      <div className="game-title"></div>
      
      <div className="recent-results">
        {lastResults.map((result) => (
          <div key={result.period} className="result-item">
            <NumberBall 
              number={result.number} 
              colors={result.colors}
              size="small"
            />
          </div>
        ))}
      </div>

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
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (
          <NumberBall 
            key={number}
            number={number}
            colors={getNumberColors(number)}
            size="large"
            clickable={true}
          />
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

const getNumberColors = (number) => {
  if (number === 0) return ['red', 'violet'];
  if (number === 5) return ['green', 'violet'];
  if ([1, 3, 7, 9].includes(number)) return ['green'];
  if ([2, 4, 6, 8].includes(number)) return ['red'];
  return ['gray'];
};

export default GameBoard;