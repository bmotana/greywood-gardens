import { useState, useEffect } from 'react';
import { Leaf, Sun, Droplets, Sprout, BookOpen, Mail, Menu, X } from 'lucide-react';
import './App.css';
import { featuredArticles } from './articles';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const categories = [
    { name: "Growing Guides", icon: <Sprout />, count: 24 },
    { name: "Seasonal Tips", icon: <Sun />, count: 16 },
    { name: "Garden Design", icon: <Leaf />, count: 12 },
    { name: "Plant Care", icon: <Droplets />, count: 28 }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <Leaf className="logo-icon" />
            <span className="logo-text">Greywood Gardens</span>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#articles">Articles</a>
            <a href="#categories">Categories</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-background">
          <div className="floating-leaf leaf-1">🍃</div>
          <div className="floating-leaf leaf-2">🌿</div>
          <div className="floating-leaf leaf-3">🍂</div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">Growing Knowledge, One Seed at a Time</div>
          <h1 className="hero-title">
            Practical Gardening
            <br />
            <span className="hero-accent">for Every Season</span>
          </h1>
          <p className="hero-subtitle">
            Expert advice, beginner-friendly guides, and seasonal tips for UK gardeners.
            <br />
            Grow your dream garden with Greywood Gardens.
          </p>
          <div className="hero-cta">
            <a href="#articles" className="btn btn-primary">
              <BookOpen size={20} />
              Explore Articles
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </header>

      {/* Featured Articles */}
      <section className="articles" id="articles">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Articles</h2>
            <p className="section-subtitle">Latest guides and tips for your garden</p>
          </div>

          <div className="articles-grid">
            {featuredArticles.map((article, index) => (
              <article
                key={article.title}
                className="article-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="article-image">{article.image}</div>
                <div className="article-content">
                  <div className="article-meta">
                    <span className="article-category">{article.category}</span>
                    <span className="article-read-time">{article.readTime}</span>
                  </div>
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <a href="#contact" className="article-link">
                    Ask about this topic
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories" id="categories">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Browse by Category</h2>
            <p className="section-subtitle">Find exactly what you need for your garden</p>
          </div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <div
                key={index}
                className="category-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-name">{category.name}</h3>
                <p className="category-count">{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Greywood Gardens</h2>
              <p>
                Welcome to Greywood Gardens, your trusted companion for practical gardening advice.
                Whether you're tending to a sprawling backyard or nurturing plants on a windowsill,
                we're here to help you grow with confidence.
              </p>
              <p>
                Our mission is simple: make gardening accessible, enjoyable, and rewarding for everyone.
                From seasonal planting guides to troubleshooting common problems, we share knowledge
                that works in real UK gardens.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Articles</div>
                </div>
                <div className="stat">
                  <div className="stat-number">4</div>
                  <div className="stat-label">Categories</div>
                </div>
                <div className="stat">
                  <div className="stat-number">Weekly</div>
                  <div className="stat-label">Updates</div>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="plant-illustration">🌱</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="section-title">Get in Touch</h2>
              <p>
                Have a gardening question? Want to share your success story?
                We'd love to hear from you!
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <Mail size={24} />
                  <div>
                    <div className="contact-method-label">Email us</div>
                    <a href="mailto:hello@greywoodgardens.uk">hello@greywoodgardens.uk</a>
                  </div>
                </div>
              </div>
            </div>
            <form
              className="contact-form"
              action="mailto:hello@greywoodgardens.uk"
              method="post"
              encType="text/plain"
            >
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="legal" id="privacy">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Privacy Policy</h2>
            <p className="section-subtitle">How Greywood Gardens handles visitor information.</p>
          </div>
          <div className="legal-content">
            <p>
              Greywood Gardens is an informational gardening website. We only collect personal
              information when you choose to contact us, such as your name, email address, and message.
            </p>
            <p>
              We use submitted information to reply to enquiries and do not sell personal information.
              If analytics, advertising, newsletter, or embedded services are added later, this policy
              should be updated before those services go live.
            </p>
          </div>
        </div>
      </section>

      <section className="legal legal-alt" id="terms">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Terms of Service</h2>
            <p className="section-subtitle">Basic terms for using this website.</p>
          </div>
          <div className="legal-content">
            <p>
              Content on Greywood Gardens is provided for general information and education. You may
              browse and share links to the site, but you may not copy or republish full articles
              without permission.
            </p>
            <p>
              We aim to keep information accurate and useful, but gardening results vary by location,
              weather, soil, and plant variety. Use your own judgement before acting on any advice.
            </p>
          </div>
        </div>
      </section>

      <section className="legal" id="disclaimer">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Disclaimer</h2>
            <p className="section-subtitle">Important context for gardening guidance.</p>
          </div>
          <div className="legal-content">
            <p>
              Greywood Gardens shares practical gardening guidance for UK gardeners. The information is
              not professional agricultural, pest-control, legal, or financial advice.
            </p>
            <p>
              Always check product labels, local regulations, and safety guidance before using tools,
              treatments, fertilisers, or pesticides in your garden.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <Leaf />
                <span>Greywood Gardens</span>
              </div>
              <p className="footer-tagline">
                Growing together, one season at a time.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Explore</h4>
                <a href="#articles">Articles</a>
                <a href="#categories">Categories</a>
                <a href="#about">About Us</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#disclaimer">Disclaimer</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Greywood Gardens. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
