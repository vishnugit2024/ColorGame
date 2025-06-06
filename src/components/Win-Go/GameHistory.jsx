import React, { useState } from 'react';

const GameHistory = ({ results, bettingHistory = [] }) => {
  const itemsPerPage = 10;

  const [activeHistoryTab, setActiveHistoryTab] = useState('game-history');

  // Page states for each tab
  const [gamePage, setGamePage] = useState(1);
  const [chartPage, setChartPage] = useState(1);
  const [myHistoryPage, setMyHistoryPage] = useState(1);

  const totalGamePages = Math.ceil(results.length / itemsPerPage);
  const totalChartPages = Math.ceil(results.length / itemsPerPage);
  const totalMyHistoryPages = Math.ceil(bettingHistory.length / itemsPerPage);

  const paginatedGameHistory = results.slice(
    (gamePage - 1) * itemsPerPage,
    gamePage * itemsPerPage
  );

  const paginatedChartData = results.slice(
    (chartPage - 1) * itemsPerPage,
    chartPage * itemsPerPage
  );

  const paginatedMyHistory = bettingHistory.slice(
    (myHistoryPage - 1) * itemsPerPage,
    myHistoryPage * itemsPerPage
  );

  const handleTabChange = (tab) => {
    setActiveHistoryTab(tab);
  };

  const renderPagination = (currentPage, totalPages, setPageFn) => (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => setPageFn(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <span className="pagination-info">{currentPage} / {totalPages}</span>
      <button
        className="pagination-btn"
        onClick={() => setPageFn(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );

  return (
    <div className="game-history">
      {/* Tabs */}
      <div className="history-tabs">
        <button
          className={`history-tab ${activeHistoryTab === 'game-history' ? 'active' : ''}`}
          onClick={() => handleTabChange('game-history')}
        >
          Game history
        </button>
        <button
          className={`history-tab ${activeHistoryTab === 'chart' ? 'active' : ''}`}
          onClick={() => handleTabChange('chart')}
        >
          Chart
        </button>
        <button
          className={`history-tab ${activeHistoryTab === 'my-history' ? 'active' : ''}`}
          onClick={() => handleTabChange('my-history')}
        >
          My history
        </button>
      </div>

      {/* Game History */}
      {activeHistoryTab === 'game-history' && (
        <div className="history-content">
          <div className="history-header">
            <span>Period</span>
            <span>Number</span>
            <span>Big Small</span>
            <span>Color</span>
          </div>
          {paginatedGameHistory.map((result) => (
            <div key={result.period} className="history-row">
              <span className="period">{result.period}</span>
              <span className={`number color-${result.colors[0]}`}>{result.number}</span>
              <span className="size">{result.size}</span>
              <div className="colors">
                {result.colors.map((color, i) => (
                  <span key={i} className={`color-dot ${color}`}></span>
                ))}
              </div>
            </div>
          ))}
          {renderPagination(gamePage, totalGamePages, setGamePage)}
        </div>
      )}

      {/* Chart */}
      {activeHistoryTab === 'chart' && (
        <div className="chart-content">
          <div className="chart-header">
            <span>Period</span>
            <span>Number</span>
          </div>
          {paginatedChartData.map((result) => (
            <div key={result.period} className="chart-row">
              <span className="period">{result.period}</span>
              <div className="number-sequence">
                {[...Array(10).keys()].map((num) => (
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
          {renderPagination(chartPage, totalChartPages, setChartPage)}
        </div>
      )}

      {/* My History */}
      {activeHistoryTab === 'my-history' && (
        <div className="my-history-content">
          {bettingHistory.length === 0 ? (
            <div className="no-bets">
              <p>No betting history found</p>
            </div>
          ) : (
            <>
              <div className="betting-history-list">
                {paginatedMyHistory.map((bet, index) => (
                  <div key={index} className="betting-history-item">
                    <div className="bet-info">
                      <div
                        className={`bet-type-icon ${
                          bet.betType.includes('green')
                            ? 'green'
                            : bet.betType.includes('red')
                            ? 'red'
                            : bet.betType.includes('violet')
                            ? 'violet'
                            : bet.betType.includes('big')
                            ? 'big'
                            : 'small'
                        }`}
                      >
                        {bet.betType.includes('number-')
                          ? bet.betType.split('-')[1]
                          : bet.betType.includes('green')
                          ? 'big'
                          : bet.betType.includes('red')
                          ? '9'
                          : bet.betType.includes('violet')
                          ? '6'
                          : bet.betType.includes('big')
                          ? '2'
                          : '0'}
                      </div>
                      <div className="bet-details">
                        <div className="bet-period">{bet.period}</div>
                        <div className="bet-time">{bet.time}</div>
                      </div>
                    </div>
                    <div className="bet-result">
                      <span className={`bet-status ${bet.status}`}>{bet.status}</span>
                      <div
                        className={`bet-amount ${
                          bet.status === 'success' ? 'positive' : 'negative'
                        }`}
                      >
                        {bet.status === 'success' ? '+' : '-'}{Math.abs(bet.amount).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {renderPagination(myHistoryPage, totalMyHistoryPages, setMyHistoryPage)}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default GameHistory;
