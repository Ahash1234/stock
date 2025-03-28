import React, { useState } from 'react';

function ProfitCalculator() {
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [result, setResult] = useState('');

  const calculateProfitLoss = () => {
    const buy = parseFloat(buyPrice);
    const sell = parseFloat(sellPrice);
    const qty = parseInt(quantity);

    if (isNaN(buy) || isNaN(qty) || qty <= 0) {
      setResult("Please enter valid numbers!");
      return;
    }

    const sellVal = isNaN(sell) ? buy : sell;
    const profitLoss = (sellVal - buy) * qty;
    setResult(profitLoss >= 0 ? `Profit: $${profitLoss.toFixed(2)}` : `Loss: $${Math.abs(profitLoss).toFixed(2)}`);
  };

  return (
    <section className="card">
      <h2>Profit/Loss Calculator</h2>
      <input type="number" placeholder="Buy Price" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} />
      <input type="number" placeholder="Sell Price (optional)" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={calculateProfitLoss}>Calculate</button>
      {result && <p className="result">{result}</p>}
    </section>
  );
}

export default ProfitCalculator;
