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




/*
TODOD: Followw these steps



• 1. Create GitHub Repo

  1. Go to https://github.com
  2. Sign in or create an account.
  3. Click New repository.
  4. Name it something like:

  greywood-gardens

  5. Choose Public or Private.
  6. Do not add README, .gitignore, or license.
  7. Click Create repository.

  2. Push This Project To GitHub

  Open a terminal inside:

  C:\Users\Bafana\Documents\dev\web_dev\greywood-gardens

  Run these commands:

  git init
  git add .
  git commit -m "Initial Cloudflare-ready site"
  git branch -M main
  git remote add origin https://github.com/YOUR-USERNAME/greywood-gardens.git
  git push -u origin main

  Replace YOUR-USERNAME with your GitHub username.

  3. Connect GitHub To Cloudflare Pages

  1. Go to https://dash.cloudflare.com
  2. Open Workers & Pages.
  3. Click Create application.
  4. Choose Pages.
  5. Click Connect to Git.
  6. Select GitHub.
  7. Authorize Cloudflare if it asks.
  8. Select your greywood-gardens repository.

  4. Use These Build Settings

  In Cloudflare Pages, set:

  Framework preset: Vite
  Build command: npm run build
  Build output directory: dist
  Root directory: /

  Then click Save and Deploy.

  5. Add Your Domain

  After deployment:

  1. Open your Pages project.
  2. Go to Custom domains.
  3. Click Set up a custom domain.
  4. Enter your domain, for example:

  greywoodgardens.uk

  5. Follow Cloudflare’s DNS instructions.

  For Future Updates

  After changing files locally:

  git add .
  git commit -m "Update site"
  git push

  Cloudflare will rebuild and publish automatically.
Token usage: total=175,047 input=166,616 (+ 1,012,096 cached) output=8,431 (reasoning 843)
To continue this session, run codex resume 019e33f6-5b3c-7f60-a80d-7a6283357474

C:\Users\Bafana\Documents\dev\web_dev\greywood-gardens>


*/

//k
//0hl TODOD: bwo bwout bwo bwo claude and read/follow the instruction (Portfolio)$
//j
