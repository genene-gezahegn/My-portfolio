# Genene Gezahegn - Portfolio Website

A premium, modern portfolio website for Genene Gezahegn, Full-Stack Software Engineer.

## Features

- Modern, minimalist design inspired by top tech companies (Apple, Stripe, Vercel)
- Smooth animations with Framer Motion
- Interactive particle background
- Fully responsive design
- Dark mode optimized
- Glassmorphism UI elements
- SEO optimized
- Performance optimized (Lighthouse 90+)

## Tech Stack

### Frontend
- React 18
- Vite
- TailwindCSS
- Framer Motion
- Lucide React (icons)

### Tools
- ESLint
- Prettier
- Git

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd genene-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Project Structure

```
genene-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── WorkProcess.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── ParticlesBackground.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and configure build settings
6. Click "Deploy"

Your site will be live in minutes!

### Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Customization

### Update Personal Information

Edit the following files:
- `src/components/Hero.jsx` - Name and tagline
- `src/components/About.jsx` - About section content
- `src/components/Projects.jsx` - Project details and links
- `src/components/Contact.jsx` - Contact information

### Update Colors

Edit `tailwind.config.js` to change the color scheme.

### Update Social Links

Update links in:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

## Performance Optimization

- Images are lazy loaded
- Code splitting with Vite
- Optimized animations
- Minimal bundle size
- Fast initial load

## SEO

- Semantic HTML
- Meta tags configured
- Open Graph tags
- Descriptive alt texts
- Sitemap ready

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Genene Gezahegn. All rights reserved.

## Contact

- Email: genene@example.com
- GitHub: github.com/genene
- LinkedIn: linkedin.com/in/genene
