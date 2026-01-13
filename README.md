# Paradime Technologies

Premium landing page for Paradime Technologies - A 24/7 after-hours answering service for local businesses.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
paradime.tech/
├── src/
│   ├── lib/
│   │   ├── components/        # Reusable Svelte components
│   │   │   ├── Header.svelte
│   │   │   ├── Hero.svelte
│   │   │   ├── Stats.svelte
│   │   │   ├── Features.svelte
│   │   │   ├── HowItWorks.svelte
│   │   │   ├── Testimonials.svelte
│   │   │   ├── FAQ.svelte
│   │   │   ├── CTA.svelte
│   │   │   ├── Footer.svelte
│   │   │   └── SEO.svelte     # Structured data for SEO
│   │   └── styles/
│   │       └── global.css     # Global styles and design system
│   ├── routes/
│   │   ├── +layout.svelte     # Root layout with fonts
│   │   └── +page.svelte       # Main landing page
│   └── app.html               # HTML template
├── static/                    # Static assets
│   ├── favicon.svg
│   ├── CNAME                  # GitHub Pages domain
│   └── robots.txt
└── package.json
```

## 🎨 Features

### Design System
- **Typography**: Inter font family with optimized weights
- **Color Palette**: Purple gradient theme (#667eea to #764ba2)
- **Animations**: Smooth transitions using Svelte's built-in animation system
- **Responsive**: Mobile-first design with breakpoints at 768px

### Components

All components built with Svelte 5 syntax ($state, $props, $effect)

#### Header
- Fixed position with blur backdrop
- Smooth scroll behavior
- Navigation with hover effects
- Mobile-responsive

#### Hero
- Gradient background with animated orbs
- Trust indicators
- Dual CTA buttons
- Svelte transitions for entrance

#### Stats
- 4 key metrics with gradient text
- Responsive grid layout
- Staggered animations

#### Features
- 6 feature cards with icons
- Hover effects with translateY animation
- Gradient accent on hover

#### How It Works
- 4-step process with visual timeline
- Example lead notification display

#### Testimonials
- 3 customer testimonials
- 5-star ratings
- Glassmorphism effects

#### FAQ
- Collapsible accordion interface
- Smooth slide transitions

#### CTA
- Final conversion section
- Multiple contact methods
- Animated background

### SEO Optimization

- Complete Open Graph and Twitter Card meta tags
- JSON-LD structured data for LocalBusiness
- Canonical URLs
- Semantic HTML

## 🛠 Technical Stack

- **Framework**: SvelteKit 5
- **Language**: TypeScript
- **Styling**: Component-scoped CSS + Global CSS
- **Build Tool**: Vite
- **Animations**: Svelte transitions & easing

## 📧 Contact

- **Email**: hello@paradime.technologies
- **Phone**: (555) 888-1100
- **Website**: https://paradime.tech

---

Built with SvelteKit
