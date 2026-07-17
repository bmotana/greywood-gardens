const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = 5000;

app.use(cors()); // Allows your React app to talk to this server
app.use(express.json());

// The endpoint your React code is looking for: /api/articles
app.get('/api/articles', (req, res) => {
  db.all("SELECT * FROM articles", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
