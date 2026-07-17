const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db = new sqlite3.Database(path.join(__dirname, 'gardening.db'));

db.serialize(() => {
  // Create the articles table
  db.run(`CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    excerpt TEXT,
    category TEXT,
    image TEXT,
    readTime TEXT
  )`);

  // Clear old data so we don't have duplicates every time we restart
  db.run("DELETE FROM articles");

  // Your SQL INSERT statements
  const stmt = db.prepare("INSERT INTO articles (title, excerpt, category, image, readTime) VALUES (?, ?, ?, ?, ?)");

  const articles = [
    ['Spring Planting Guide for UK Gardens', 'Everything you need to know about preparing your garden...', 'Seasonal', '🌷', '8 min read'],
    ['10 Easy Vegetables for Beginners', 'Start your vegetable garden with these foolproof crops...', 'Growing Guide', '🥕', '6 min read'],
    ['Creating a Wildlife-Friendly Garden', 'Attract bees, butterflies, and birds with these simple native ideas.', 'Wildlife', '🦋', '7 min read'],
    ['Composting 101: Turn Waste into Gold', 'A complete beginner\'s guide to creating nutrient-rich compost.', 'Sustainability', '♻️', '5 min read'],
    ['Composting 101: Turn Waste into Gold', 'A complete beginner\'s guide to creating nutrient-rich compost.', 'Sustainability', '🔴', '5 min read']
  ];

  articles.forEach(article => stmt.run(article));
  stmt.finalize();
});

console.log("Database initialized with Greywood Gardens articles.");
module.exports = db;

