const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;

// Sample route: /api/compare?query=iphone+14
app.get('/api/compare', (req, res) => {
  const query = req.query.query;

  const results = [
    {
      store: "Amazon",
      price: "₹49,999",
      url: "https://www.amazon.in/s?k=" + encodeURIComponent(query),
    },
    {
      store: "Flipkart",
      price: "₹47,999",
      url: "https://www.flipkart.com/search?q=" + encodeURIComponent(query),
    },
    {
      store: "Croma",
      price: "₹48,500",
      url: "https://www.croma.com/search/?text=" + encodeURIComponent(query),
    },
    {
      store: "Reliance Digital",
      price: "₹48,000",
      url: "https://www.reliancedigital.in/search?q=" + encodeURIComponent(query),
    },
  ];

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
