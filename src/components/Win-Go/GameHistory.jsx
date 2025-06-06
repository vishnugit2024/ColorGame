
import React, { useState } from 'react';

const GameHistory = ({ results, bettingHistory = [] }) => {
  const [activeHistoryTab, setActiveHistoryTab] = useState('game-history');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate pagination for betting history
  const totalPages = Math.ceil(bettingHistory.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBettingHistory = bettingHistory.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
            <span>Big/Small</span>
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
          {bettingHistory.length === 0 ? (
            <div className="no-bets">
              <p>No betting history found</p>
            </div>
          ) : (
            <>
              <div className="betting-history-list">
                {currentBettingHistory.map((bet, index) => (
                  
                  <div key={index} className="betting-history-item">
                    <div className="bet-info">
                      <div className={`bet-type-icon ${bet.betType.includes('green') ? 'green' : bet.betType.includes('red') ? 'red' : bet.betType.includes('violet') ? 'violet' : bet.betType.includes('big') ? 'big' : 'small'}`}>
                        {bet.betType.includes('number-') ? bet.betType.split('-')[1] : 
                         bet.betType.includes('green') ? 'big' :
                         bet.betType.includes('red') ? '9' : 
                         bet.betType.includes('violet') ? '6' :
                         bet.betType.includes('big') ? '2' : '0'}
                      </div>
                      <div className="bet-details">
                        <div className="bet-period">{bet.period}</div>
                        <div className="bet-time">{bet.time}</div>
                      </div>
                    </div>
                    <div className="bet-result">
                      <span className={`bet-status ${bet.status}`}>
                        {bet.status}
                      </span>


                      <div className={`bet-amount ${bet.status === 'success' ? 'positive' : 'negative'}`}>
                        {bet.status === 'success' ? '+' : '-'}₹{Math.abs(bet.amount).toFixed(2)}
                      </div>

                    </div>

                  </div>
                ))}
              </div>
              
              {totalPages > 1 && (
                <div className="pagination">
                  <button 
                    className="pagination-btn" 
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                  >
                    &lt;
                  </button>
                  <span className="pagination-info">
                    {currentPage} / {totalPages}
                  </span>
                  <button 
                    className="pagination-btn" 
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                  >
                    &gt;
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default GameHistory;