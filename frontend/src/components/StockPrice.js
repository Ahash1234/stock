import React, { useState } from 'react';

function StockPrice() {
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');
  const apiKey = "59cbc10031f0463a9377207e10185012";

  const getStockPrice = async () => {
    if (!symbol) {
      setError("Please enter a valid stock symbol!");
      setPrice('');
      return;
    }
    try {
      const url = `https://api.twelvedata.com/price?symbol=${symbol}&apikey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.price) {
        setPrice(`Current Price: $${parseFloat(data.price).toFixed(2)}`);
        setError('');
      } else {
        setError("Invalid stock symbol or API error!");
        setPrice('');
      }
    } catch {
      setError("Error fetching stock data!");
    }
  };

  return (
    <section className="card">
      <h2>Get Stock Price</h2>
      <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value.toUpperCase())} placeholder="Enter Stock Symbol (e.g. AAPL)" />
      <button onClick={getStockPrice}>Get Price</button>
      {price && <p className="result" style={{ color: '#FFFFFF' }}>{price}</p>}
      {error && <p className="result" style={{ color: 'red' }}>{error}</p>}
    </section>
  );
}

export default StockPrice;
