# Greywood Gardens

A beautiful, organic garden website built with React and Vite. The production build is static and ready for Cloudflare Pages.

## Features

- 🌿 Responsive design with natural, earthy aesthetics
- 📱 Mobile-friendly navigation
- ✨ Smooth animations and transitions
- 🎨 Distinctive typography using Crimson Pro and DM Sans
- 🌱 Featured articles section powered by local frontend data
- 📚 Browse by category
- 📧 Contact form
- ♿ Accessible design

## Local Development

### Prerequisites
- Node.js 18+ installed

### Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

The built files will be in the `dist` folder.

## Deploying to Cloudflare Pages

### Method 1: Via GitHub (Recommended)

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com/signup

2. **Create a new repository**
   - Click "New repository"
   - Name it: `greywood-gardens`
   - Choose "Public" or "Private"
   - Click "Create repository"

3. **Push your code to GitHub**
   ```bash
   cd greywood-gardens
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/greywood-gardens.git
   git push -u origin main
   ```

4. **Connect to Cloudflare Pages**
   - Go to https://dash.cloudflare.com
   - Click "Workers & Pages" in sidebar
   - Click "Create application"
   - Click "Pages" tab
   - Click "Connect to Git"
   - Select your GitHub repository: `greywood-gardens`
   - Configure build settings:
     - **Framework preset**: Vite
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
   - Click "Save and Deploy"

5. **Connect your custom domain**
   - Once deployed, go to "Custom domains"
   - Click "Set up a custom domain"
   - Enter: `greywoodgardens.uk`
   - Follow the DNS instructions (usually automatic if domain is on Cloudflare)

### Method 2: Direct Upload (Quick Test)

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Go to Cloudflare Dashboard**:
   - https://dash.cloudflare.com
   - Click "Workers & Pages"
   - Click "Create application"
   - Click "Pages" tab
   - Click "Upload assets"

3. **Upload the `dist` folder**

4. **Connect your domain** (same as Method 1, step 5)

## Customization

### Change Colors
Edit the CSS variables in `src/App.css`:
```css
:root {
  --forest-dark: #1a3a2e;
  --forest-green: #2d5a45;
  /* ... etc */
}
```

### Add More Articles
Edit the `featuredArticles` array in `src/articles.js`

### Update Contact Email
Change the email in the Contact section of `src/App.jsx`

## Project Structure

```
greywood-gardens/
├── index.html          # HTML entry point
├── package.json        # Dependencies
├── vite.config.js      # Vite configuration
└── src/
    ├── main.jsx        # React entry point
    ├── articles.js     # Featured article data
    ├── App.jsx         # Main component
    └── App.css         # Styles
```

## Cloudflare Pages Settings

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: project root

The `server/` folder is local/experimental backend work and is not required for the static Cloudflare Pages deployment.

## Next Steps for Google AdSense

Before applying for AdSense:

1. **Add 20-30 quality articles** (1000+ words each)
2. **Create required pages**:
   - Privacy Policy
   - Terms of Service
   - Disclaimer
3. **Get organic traffic** (100+ visitors/day recommended)
4. **Wait 3-6 months** of consistent publishing

## License

Copyright © 2026 Greywood Gardens. All rights reserved.
