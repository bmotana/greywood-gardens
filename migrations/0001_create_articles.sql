CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  category TEXT NOT NULL,
  image TEXT NOT NULL,
  read_time TEXT NOT NULL,
  published_at TEXT NOT NULL,
  featured INTEGER NOT NULL DEFAULT 0 CHECK (featured IN (0, 1))
);

CREATE INDEX IF NOT EXISTS idx_articles_featured_published
  ON articles (featured, published_at DESC);

INSERT OR IGNORE INTO articles
  (slug, title, excerpt, category, image, read_time, published_at, featured)
VALUES
  ('spring-planting-guide-uk-gardens',
   'Spring Planting Guide for UK Gardens',
   'Everything you need to know about preparing your garden for a productive spring season.',
   'Seasonal', 'Tulip', '8 min read', '2026-03-01', 1),
  ('easy-vegetables-for-beginners',
   '10 Easy Vegetables for Beginners',
   'Start your vegetable garden with reliable crops that are forgiving, useful, and rewarding.',
   'Growing Guide', 'Carrot', '6 min read', '2026-03-08', 1),
  ('wildlife-friendly-garden',
   'Creating a Wildlife-Friendly Garden',
   'Attract bees, butterflies, and birds with simple planting choices and habitat ideas.',
   'Wildlife', 'Butterfly', '7 min read', '2026-03-15', 1),
  ('composting-101',
   'Composting 101: Turn Waste into Gold',
   'A practical beginner guide to creating nutrient-rich compost from everyday garden waste.',
   'Sustainability', 'Compost', '5 min read', '2026-03-22', 1);
