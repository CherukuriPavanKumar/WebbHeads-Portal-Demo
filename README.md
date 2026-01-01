# Real Estate Dashboard - WebbHeads

A modern, responsive real estate CRM dashboard for managing leads, properties, deals, clients, and site visits.

## Features

- 📊 Dashboard with KPIs and analytics
- 👥 Lead Management with modal forms
- 🏠 Property Inventory management
- 🤝 Deals & Transactions tracking
- 📅 Site Visit scheduling
- 👔 Client Database
- 📈 Reports and Analytics
- ⚙️ Settings management

## Deployment to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Navigate to the project directory:
```bash
cd "Dashbaord"
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and your site will be deployed!

### Method 2: Using Git & Vercel Dashboard

1. **Initialize Git** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. **Push to GitHub**:
   - Create a new repository on GitHub
   - Follow GitHub's instructions to push your code

3. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Select your repository
   - Click "Deploy"
   - Vercel will automatically detect it as a static site

### Method 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Sign in
3. Drag and drop the entire project folder
4. Done!

## Project Structure

```
├── index.html          # Main dashboard
├── leads.html          # Leads management
├── properties.html     # Property listings
├── deals.html          # Deals tracking
├── clients.html        # Client database
├── site-visits.html    # Site visits
├── reports.html        # Analytics & reports
├── settings.html       # Settings page
├── styles.css          # Main stylesheet
├── pages-styles.css    # Additional styles
├── *.js               # Page-specific JavaScript
├── vercel.json        # Vercel configuration
└── webbheads logo.png # Company logo
```

## Technologies Used

- HTML5
- CSS3 (Custom Variables, Grid, Flexbox)
- Vanilla JavaScript
- Font Awesome Icons

## Local Development

Simply open `index.html` in your browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## License

Proprietary - WebbHeads
# WebbHeads-Portal-Demo
