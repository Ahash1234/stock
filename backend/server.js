const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;
const API_KEY = 'e86d23e770144b00b182d3cb91d7d908';

// Middleware
app.use(express.json());
app.use(cors());

// Root Route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Route to fetch stock data
app.get('/api/stocks', async (req, res) => {
  const symbols = ['GOOGL', 'AMZN', 'TSLA', 'MSFT', 'NVDA', 'NFLX', 'META'];
  const results = [];

  try {
    for (const symbol of symbols) {
      const response = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${API_KEY}`
      );

      // Validate response
      if (!response.data || !response.data.values || response.data.status === 'error') {
        console.error(`Error fetching data for ${symbol}:`, response.data);
        continue;
      }

      results.push({ symbol, data: response.data.values[0] });
    }

    res.json(results);
  } catch (error) {
    console.error('Error fetching stock data:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Route to fetch crypto data
app.get('/api/crypto', async (req, res) => {
  const cryptos = ['BTC/USD', 'ETH/USD', 'LTC/USD', 'DOGE/USD', 'XRP/USD', 'ADA/USD', 'DOGE/USD' ];
  const results = [];

  try {
    for (const symbol of cryptos) {
      const response = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=1day&apikey=${API_KEY}`
      );

      // Validate response
      if (!response.data || !response.data.values || response.data.status === 'error') {
        console.error(`Error fetching data for ${symbol}:`, response.data);
        continue;
      }

      results.push({ symbol, data: response.data.values[0] });
    }

    res.json(results);
  } catch (error) {
    console.error('Error fetching crypto data:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
