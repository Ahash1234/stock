import React from 'react';
import StockPrice from './StockPrice';
import ProfitCalculator from './ProfitCalculator';
import './Calculate.css';

const Calculate = () => {
  return (
    <div className="calculate-container">
      <h2>Calculate Stock Price and Profit/Loss</h2>
      <StockPrice />
      <ProfitCalculator />
    </div>
  );
};

export default Calculate;
