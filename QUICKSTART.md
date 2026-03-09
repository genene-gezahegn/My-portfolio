# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Prerequisites

- Node.js 18+ installed ([Download](https://nodejs.org))
- Git installed ([Download](https://git-scm.com))
- Code editor (VS Code recommended)

## Installation

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React
- Vite
- TailwindCSS
- Framer Motion
- And more...

### Step 2: Start Development Server

```bash
npm run dev
```

Your portfolio will open at `http://localhost:3000`

### Step 3: Customize Content

Edit these files with your information:

1. **Personal Info** → `src/components/Hero.jsx`
2. **About** → `src/components/About.jsx`
3. **Projects** → `src/components/Projects.jsx`
4. **Contact** → `src/components/Contact.jsx`

### Step 4: Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Step 5: Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use the Vercel dashboard:
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Click Deploy

## That's It!

Your portfolio is now live! 🎉

## Next Steps

- [ ] Add your real projects
- [ ] Update social media links
- [ ] Add custom domain
- [ ] Set up analytics
- [ ] Add contact form backend

## Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Check for errors
npm run format       # Format code with Prettier
```

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- --port 3001
```

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues

1. Check build succeeds locally: `npm run build`
2. Verify all files are committed to Git
3. Check Vercel build logs for errors

## Need Help?

- Check [README.md](README.md) for detailed docs
- See [CUSTOMIZATION.md](CUSTOMIZATION.md) for customization
- See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help

## Resources

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [TailwindCSS Docs](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)
