# Customization Guide

This guide will help you customize the portfolio for your needs.

## Personal Information

### 1. Update Name and Title

**File:** `src/components/Hero.jsx`

```jsx
<h1>Your Name</h1>
<h2>Your Title</h2>
<p>Your tagline</p>
```

### 2. Update About Section

**File:** `src/components/About.jsx`

Edit the paragraphs to reflect your experience and skills.

### 3. Update Contact Information

**Files to update:**
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

Replace:
- Email addresses
- GitHub URLs
- LinkedIn URLs
- Other social links

## Projects

**File:** `src/components/Projects.jsx`

Update the `projects` array:

```jsx
{
  title: 'Your Project Name',
  description: 'Project description',
  tech: ['Tech1', 'Tech2', 'Tech3'],
  github: 'https://github.com/yourusername/project',
  demo: 'https://yourproject.com',
  gradient: 'from-blue-500 to-cyan-500',
}
```

## Skills

**File:** `src/components/Skills.jsx`

Update the `skillCategories` array with your skills.

## Services

**File:** `src/components/Services.jsx`

Modify the `services` array to match what you offer.

## Colors

**File:** `tailwind.config.js`

Change the color scheme:

```js
colors: {
  primary: {
    500: '#your-color',
    600: '#your-color',
  },
  accent: {
    400: '#your-color',
  }
}
```

## Fonts

**File:** `index.html`

Change Google Fonts import:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

**File:** `tailwind.config.js`

Update font family:

```js
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

## SEO

**File:** `index.html`

Update meta tags:

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your description" />
<meta name="keywords" content="your, keywords" />
```

## Favicon

Replace `/public/vite.svg` with your own favicon.

## Images

Add project screenshots to `/public/images/` and reference them in Projects component.

## Animations

**File:** `src/components/ParticlesBackground.jsx`

Adjust particle settings:

```js
const particleCount = 100 // Change number of particles
this.speedX = Math.random() * 0.5 - 0.25 // Change speed
```

## Contact Form

To connect the contact form to your backend:

**File:** `src/components/Contact.jsx`

Update the `handleSubmit` function:

```jsx
const response = await fetch('YOUR_API_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

## Adding New Sections

1. Create new component in `src/components/`
2. Import in `src/App.jsx`
3. Add to the component tree
4. Add navigation link in `src/components/Navbar.jsx`

## Testimonials

**File:** `src/components/Testimonials.jsx`

Replace placeholder testimonials with real ones:

```jsx
{
  name: 'Client Name',
  role: 'Client Role',
  content: 'Testimonial text',
  avatar: 'CN',
}
```

## Performance Tips

1. Optimize images (use WebP format)
2. Lazy load images
3. Minimize animations on mobile
4. Use code splitting for large components

## Mobile Responsiveness

Test on different screen sizes:
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

## Browser Testing

Test on:
- Chrome
- Firefox
- Safari
- Edge

## Accessibility

- Ensure proper heading hierarchy
- Add alt text to images
- Test keyboard navigation
- Check color contrast ratios
- Test with screen readers

## Analytics

Add Google Analytics:

**File:** `index.html`

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

## Additional Features

### Add Blog Section

1. Create `src/components/Blog.jsx`
2. Use markdown for blog posts
3. Add routing with React Router

### Add Resume Download

```jsx
<a href="/resume.pdf" download>
  Download Resume
</a>
```

### Add Dark/Light Mode Toggle

Use React context and localStorage to persist theme preference.

## Support

For questions or issues, refer to:
- React docs: https://react.dev
- TailwindCSS docs: https://tailwindcss.com
- Framer Motion docs: https://www.framer.com/motion
