# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free)

## Step-by-Step Deployment

### 1. Prepare Your Project

```bash
# Install dependencies
npm install

# Test the build locally
npm run build
npm run preview
```

### 2. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Premium portfolio website"
```

### 3. Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name it: `genene-portfolio`
4. Don't initialize with README (we already have one)
5. Click "Create Repository"

### 4. Push to GitHub

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/genene-portfolio.git
git push -u origin main
```

### 5. Deploy to Vercel

#### Option A: Using Vercel Dashboard

1. Go to [Vercel](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import `genene-portfolio` repository
5. Vercel auto-detects Vite configuration
6. Click "Deploy"
7. Wait 1-2 minutes for deployment

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### 6. Configure Custom Domain (Optional)

1. In Vercel dashboard, select your project
2. Go to "Settings" → "Domains"
3. Click "Add Domain"
4. Enter your domain name
5. Follow DNS configuration instructions:
   - Add A record: `76.76.21.21`
   - Add CNAME record: `cname.vercel-dns.com`
6. Wait for DNS propagation (5-30 minutes)

### 7. Environment Variables (If Needed)

If you add a backend or API keys:

1. In Vercel dashboard, go to "Settings" → "Environment Variables"
2. Add your variables:
   - `VITE_API_URL`
   - `VITE_CONTACT_EMAIL`
3. Redeploy for changes to take effect

## Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update project section"
git push

# Vercel automatically deploys the changes
```

## Performance Checklist

After deployment, verify:

- [ ] Lighthouse score > 90
- [ ] All images load correctly
- [ ] Animations work smoothly
- [ ] Contact form functions
- [ ] All links work
- [ ] Mobile responsive
- [ ] SEO meta tags present

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Issues

1. Check Vercel build logs
2. Verify all dependencies in package.json
3. Ensure no environment-specific code
4. Test build locally first

### Domain Not Working

1. Verify DNS records
2. Wait for DNS propagation (up to 48 hours)
3. Check domain configuration in Vercel
4. Clear browser cache

## Monitoring

### Analytics

Add analytics to track visitors:

1. Vercel Analytics (built-in)
2. Google Analytics
3. Plausible Analytics

### Performance Monitoring

Use Vercel's built-in monitoring:
- Real User Monitoring (RUM)
- Core Web Vitals
- Error tracking

## Backup

Always keep your code backed up:

```bash
# Create a backup branch
git checkout -b backup-$(date +%Y%m%d)
git push origin backup-$(date +%Y%m%d)
```

## Updates

To update your portfolio:

```bash
# Pull latest changes
git pull origin main

# Make updates
# ... edit files ...

# Commit and push
git add .
git commit -m "Update: description of changes"
git push origin main
```

## Support

- Vercel Documentation: https://vercel.com/docs
- Vite Documentation: https://vitejs.dev
- React Documentation: https://react.dev

## Production URL

After deployment, your site will be available at:
- Vercel URL: `https://genene-portfolio.vercel.app`
- Custom domain: `https://yourdomain.com` (if configured)

## Next Steps

1. Add Google Analytics
2. Set up contact form backend
3. Add blog section
4. Implement CMS for easy updates
5. Add more projects as you build them
