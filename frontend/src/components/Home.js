import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StockCard from './StockCard';

const backendURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5001';

function Home() {
  const [stocks, setStocks] = useState([]);
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    fetchStockData();
    fetchCryptoData();
  }, []);

  const fetchStockData = async () => {
    try {
      const response = await axios.get(`${backendURL}/api/stocks`);
      setStocks(response.data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  const fetchCryptoData = async () => {
    try {
      const response = await axios.get(`${backendURL}/api/crypto`);
      setCryptos(response.data);
    } catch (error) {
      console.error('Error fetching crypto data:', error);
    }
  };

  return (
    <div className="container">
      <h2>Market Overview</h2>
      <div className="grid-container">
        {stocks.map((item) => <StockCard key={item.symbol} item={item} type="Stock" />)}
        {cryptos.map((item) => <StockCard key={item.symbol} item={item} type="Crypto" />)}
      </div>
    </div>
  );
}

export default Home;
