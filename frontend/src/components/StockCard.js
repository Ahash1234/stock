import React from 'react';

const StockCard = ({ item, type }) => (
  <div className="stock-card">
    <h3>{item.symbol} ({type})</h3>
    {item.data ? (
      <>
        <p>Close: ${item.data.close}</p>
        <p>High: ${item.data.high}, Low: ${item.data.low}</p>
        <p>Volume: {item.data.volume}</p>
      </>
    ) : (
      <p>No data available</p>
    )}
  </div>
);

export default StockCard;
