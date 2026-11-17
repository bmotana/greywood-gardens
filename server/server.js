const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
const port = 5000;

// 1. Create/Connect to local database file
const db = new sqlite3.Database(path.join(__dirname, 'gardening.db'));

// 2. Initialize the table and seed it with your articles
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    excerpt TEXT,
    category TEXT,
    image TEXT,
    readTime TEXT
  )`);

  // Clear existing to avoid duplicates on restart
  db.run("DELETE FROM articles");

  const stmt = db.prepare("INSERT INTO articles (title, excerpt, category, image, readTime) VALUES (?, ?, ?, ?, ?)");

  // These are the articles from your original request
  const articles = [
    ["Spring Planting Guide for UK Gardens", "Everything you need...", "Seasonal", "🌷", "8 min read"],
    ["10 Easy Vegetables for Beginners", "Start your vegetable garden...", "Growing Guide", "🥕", "6 min read"],
    ["Creating a Wildlife-Friendly Garden", "Attract bees, butterflies...", "Wildlife", "🦋", "7 min read"],
    ["Composting 101: Turn Waste into Gold", "A complete beginner's guide...", "Sustainability", "♻️", "5 min read"]
  ];

  articles.forEach(article => stmt.run(article));
  stmt.finalize();
});

// 3. The API endpoint React is looking for
app.get('/api/articles', (req, res) => {
  db.all("SELECT * FROM articles", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`✅ Local API running at http://localhost:${port}/api/articles`);
});
