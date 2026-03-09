# Complete Setup Guide

This comprehensive guide will walk you through setting up, customizing, and deploying your portfolio.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Customization](#customization)
4. [Testing](#testing)
5. [Deployment](#deployment)
6. [Post-Deployment](#post-deployment)

---

## Prerequisites

### Required Software

1. **Node.js** (v18 or higher)
   - Download: https://nodejs.org
   - Verify: `node --version`

2. **Git**
   - Download: https://git-scm.com
   - Verify: `git --version`

3. **Code Editor** (VS Code recommended)
   - Download: https://code.visualstudio.com

### Recommended VS Code Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets

---

## Installation

### Step 1: Install Dependencies

```bash
npm install
```

This installs:
- React 18
- Vite 5
- TailwindCSS 3
- Framer Motion 11
- Lucide React (icons)
- Development tools (ESLint, Prettier)

### Step 2: Verify Installation

```bash
npm run dev
```

Open http://localhost:3000 in your browser. You should see the portfolio.

---

## Customization

### 1. Personal Information

#### Update Name and Title

**File:** `src/components/Hero.jsx`

```jsx
// Line 12-14
<h1 className="text-5xl md:text-7xl font-bold mb-4">
  <span className="text-slate-100">Your Name Here</span>
</h1>
<h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gradient">
  Your Professional Title
</h2>
```

#### Update Tagline

```jsx
// Line 23-25
<p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto">
  Your compelling tagline here
</p>
```

### 2. About Section

**File:** `src/components/About.jsx`

Replace the three paragraphs (lines 35-50) with your own story:

```jsx
<p className="text-lg text-slate-300 leading-relaxed">
  Your first paragraph about your background...
</p>
<p className="text-lg text-slate-300 leading-relaxed">
  Your second paragraph about your expertise...
</p>
<p className="text-lg text-slate-300 leading-relaxed">
  Your third paragraph about your approach...
</p>
```

### 3. Skills

**File:** `src/components/Skills.jsx`

Update the `skillCategories` array (lines 8-29):

```jsx
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['Your', 'Frontend', 'Skills'],
  },
  {
    title: 'Backend',
    skills: ['Your', 'Backend', 'Skills'],
  },
  // ... add more categories
]
```

### 4. Projects

**File:** `src/components/Projects.jsx`

Update the `projects` array (lines 8-50):

```jsx
{
  title: 'Your Project Name',
  description: 'Detailed project description...',
  tech: ['React', 'Node.js', 'MongoDB'],
  github: 'https://github.com/yourusername/project',
  demo: 'https://yourproject.com',
  gradient: 'from-blue-500 to-cyan-500',
}
```

**Gradient Options:**
- `from-purple-500 to-pink-500`
- `from-blue-500 to-cyan-500`
- `from-green-500 to-emerald-500`
- `from-orange-500 to-red-500`
- `from-indigo-500 to-purple-500`

### 5. Services

**File:** `src/components/Services.jsx`

Modify services you offer (lines 8-40).

### 6. Contact Information

Update in multiple files:

**Hero.jsx** (lines 45-65):
```jsx
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourusername">
<a href="mailto:your.email@example.com">
```

**Contact.jsx** (lines 35-55):
```jsx
<a href="mailto:your.email@example.com">
  <span>your.email@example.com</span>
</a>
```

**Footer.jsx** (lines 15-30):
Update all social links.

### 7. Colors (Optional)

**File:** `tailwind.config.js`

```js
colors: {
  primary: {
    500: '#6366f1', // Change this
    600: '#4f46e5', // And this
  },
  accent: {
    400: '#22d3ee', // Change this
  }
}
```

### 8. SEO

**File:** `index.html`

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your description" />
<meta name="keywords" content="your, keywords, here" />
<meta name="author" content="Your Name" />
```

---

## Testing

### 1. Local Testing

```bash
# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

### 2. Test Checklist

- [ ] All sections display correctly
- [ ] Navigation links work
- [ ] Smooth scrolling works
- [ ] Animations trigger on scroll
- [ ] Contact form validates input
- [ ] All external links work
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] No console errors

### 3. Build Test

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### 4. Code Quality

```bash
# Run linter
npm run lint

# Format code
npm run format
```

---

## Deployment

### Option 1: Vercel (Recommended)

#### Using Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Wait 1-2 minutes

3. **Your site is live!**
   - URL: `https://your-project.vercel.app`

#### Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: Netlify

1. Push to GitHub (same as above)
2. Go to https://netlify.com
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy"

### Option 3: GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

---

## Post-Deployment

### 1. Custom Domain

#### Vercel
1. Go to project settings
2. Click "Domains"
3. Add your domain
4. Update DNS records:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

#### Netlify
1. Go to "Domain settings"
2. Add custom domain
3. Follow DNS instructions

### 2. Analytics

#### Google Analytics

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Vercel Analytics

Already included! Just enable in Vercel dashboard.

### 3. Contact Form Backend

See `server/README.md` for setting up the contact form backend.

### 4. Performance Check

Run Lighthouse audit:
1. Open site in Chrome
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Click "Generate report"
5. Aim for 90+ in all categories

### 5. SEO Check

- Submit sitemap to Google Search Console
- Verify Open Graph tags with Facebook Debugger
- Check mobile-friendliness with Google's tool

---

## Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf node_modules package-lock.json dist

# Reinstall
npm install

# Try build again
npm run build
```

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- --port 3001
```

### Animations Not Working

- Check browser console for errors
- Verify Framer Motion is installed
- Clear browser cache

### Deployment Fails

1. Verify build works locally: `npm run build`
2. Check all files are committed to Git
3. Review deployment logs for errors
4. Ensure environment variables are set

---

## Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Update specific package
npm install package-name@latest
```

### Content Updates

1. Update projects as you build them
2. Add new testimonials
3. Update skills as you learn
4. Keep contact information current

### Performance Monitoring

- Check Lighthouse scores monthly
- Monitor Core Web Vitals
- Review analytics data
- Test on different devices

---

## Next Steps

- [ ] Customize all content
- [ ] Add real projects
- [ ] Update all links
- [ ] Test thoroughly
- [ ] Deploy to Vercel
- [ ] Add custom domain
- [ ] Set up analytics
- [ ] Share on social media
- [ ] Add to resume
- [ ] Update regularly

---

## Resources

### Documentation
- [README.md](README.md) - Main documentation
- [QUICKSTART.md](QUICKSTART.md) - Quick start
- [CUSTOMIZATION.md](CUSTOMIZATION.md) - Customization details
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment details
- [FEATURES.md](FEATURES.md) - Feature list

### External Resources
- React: https://react.dev
- Vite: https://vitejs.dev
- TailwindCSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- Vercel: https://vercel.com/docs

### Support
- GitHub Issues for bugs
- Stack Overflow for questions
- React community on Discord

---

## Congratulations! 🎉

You now have a professional portfolio website ready to attract clients and job opportunities!

**Remember to:**
- Keep content updated
- Add new projects regularly
- Monitor performance
- Engage with visitors
- Share on social media

Good luck with your portfolio!
