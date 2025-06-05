
import React, { useState } from 'react';

const GameHistory = ({ results, show }) => {
  const [activeHistoryTab, setActiveHistoryTab] = useState('game-history');

  if (!show && activeHistoryTab === 'game-history') return null;

  return (
    <div className="game-history">
      <div className="history-tabs">
        <button 
          className={`history-tab ${activeHistoryTab === 'game-history' ? 'active' : ''}`}
          onClick={() => setActiveHistoryTab('game-history')}
        >
          Game history
        </button>
        <button 
          className={`history-tab ${activeHistoryTab === 'chart' ? 'active' : ''}`}
          onClick={() => setActiveHistoryTab('chart')}
        >
          Chart
        </button>
        <button 
          className={`history-tab ${activeHistoryTab === 'my-history' ? 'active' : ''}`}
          onClick={() => setActiveHistoryTab('my-history')}
        >
          My history
        </button>
      </div>

      {activeHistoryTab === 'game-history' && (
        <div className="history-content">
          <div className="history-header">
            <span>Period</span>
            <span>Number</span>
            <span>Big Small</span>
            <span>Color</span>
          </div>
          {results.map((result) => (
            <div key={result.period} className="history-row">
              <span className="period">{result.period}</span>
              <span className={`number color-${result.colors[0]}`}>
                {result.number}
              </span>
              <span className="size">{result.size}</span>
              <div className="colors">
                {result.colors.map((color, i) => (
                  <span key={i} className={`color-dot ${color}`}></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeHistoryTab === 'chart' && (
        <div className="chart-content">
          <div className="chart-header">
            <span>Period</span>
            <span>Number</span>
          </div>
          {results.map((result) => (
            <div key={result.period} className="chart-row">
              <span className="period">{result.period}</span>
              <div className="number-sequence">
                {[0,1,2,3,4,5,6,7,8,9].map(num => (
                  <span 
                    key={num}
                    className={`number-circle ${num === result.number ? 'active' : ''} ${
                      num === result.number ? result.colors[0] : ''
                    }`}
                  >
                    {num}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeHistoryTab === 'my-history' && (
        <div className="my-history-content">
          <div className="no-bets">
            <p>No betting history found</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameHistory;