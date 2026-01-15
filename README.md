# Paradime Tech Landing Site

A complete SvelteKit landing site for Paradime Tech with an "old-internet minimalism" theme. Built for small businesses selling AI receptionists, websites, and chatbots.

## Features

- **Complete site structure**: Home, Solutions (3 sub-pages), Pricing, About, Contact
- **Conversion-focused**: Multiple CTAs, contact forms, proof cards
- **Professional design**: Clean typography, subtle animations, accessibility built-in
- **Mobile-first**: Fully responsive on all devices
- **Performance**: Static site generation, minimal dependencies

## Tech Stack

- **Framework**: SvelteKit with TypeScript
- **Styling**: Plain CSS with CSS variables
- **Fonts**: Gotham (self-hosted) + Pixelify Sans (Google Fonts)
- **Build**: Vite + adapter-static for GitHub Pages

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── app.css                          # Design system & global styles
├── lib/
│   ├── ascii.ts                     # ASCII art background (customize this!)
│   └── components/
│       ├── Nav.svelte               # Sticky navigation
│       ├── Footer.svelte            # Site footer
│       ├── Hero.svelte              # Homepage hero with ASCII background
│       ├── TerminalProofCard.svelte # SMS summary proof card
│       ├── Expectations.svelte      # What you can expect section
│       ├── HowItWorks.svelte        # 3-step process
│       ├── Solutions.svelte         # 3 solution cards
│       ├── FAQ.svelte               # Collapsible FAQ
│       ├── ContactForm.svelte       # Lead capture form with validation
│       └── PricingTiers.svelte      # Pricing cards & add-ons
├── routes/
│   ├── +layout.svelte               # Root layout (nav + footer)
│   ├── +page.svelte                 # Homepage
│   ├── solutions/
│   │   ├── +page.svelte             # Solutions overview
│   │   ├── ai-receptionist/+page.svelte
│   │   ├── websites/+page.svelte
│   │   └── chatbots/+page.svelte
│   ├── pricing/+page.svelte
│   ├── about/+page.svelte
│   └── contact/+page.svelte
└── static/
    └── fonts/                       # Place Gotham font files here
```

## Customization Guide

### 1. Replace ASCII Art

Edit `src/lib/ascii.ts` and replace the placeholder ASCII with your own:

```typescript
export const ASCII_BG = `
  your custom ASCII art here
`;
```

### 2. Add Gotham Fonts

Place your Gotham font files in `static/fonts/`:
- `Gotham-Book.woff2`
- `Gotham-Medium.woff2`
- `Gotham-Bold.woff2`

If you don't have Gotham, the site falls back to Montserrat/system fonts.

### 3. Update Phone Number

Search for `(555) 555-5555` and replace with your actual number:
- Hero section
- Contact page
- Navigation (optional)

### 4. Customize Colors

Edit CSS variables in `src/app.css`:

```css
:root {
  --color-accent: #4a90e2;      /* Primary blue */
  --color-tan: #d4c5b0;          /* Secondary tan */
  --color-paper: #f5f1ea;        /* Background */
  /* ... customize as needed */
}
```

### 5. Edit Copy

All copy is directly in the component/page files for easy editing:
- Headlines, taglines, and descriptions
- Solution details
- Pricing tiers
- FAQ questions and answers

### 6. Update Contact Form Handler

The contact form currently logs to console. To connect it to a backend:

Edit `src/lib/components/ContactForm.svelte`, line ~25:

```typescript
// Replace this:
console.log('Form submitted:', formData);

// With your backend call:
await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData)
});
```

## Design System

### Typography

- **Headings**: Gotham Bold (700)
- **Body**: Gotham Book (400)
- **Pixel accents**: Pixelify Sans (overlines, badges, labels only)

**Important**: Pixel font is only for small UI elements, never for body copy.

### Spacing Scale

```css
--space-xs: 0.5rem
--space-sm: 1rem
--space-md: 1.5rem
--space-lg: 2rem
--space-xl: 3rem
--space-2xl: 4rem
--space-3xl: 6rem
```

### Buttons

```html
<a href="/contact" class="btn btn-primary">Primary CTA</a>
<a href="/about" class="btn btn-secondary">Secondary</a>
<a href="/contact" class="btn btn-primary btn-large">Large variant</a>
```

### Components

All components are in `src/lib/components/`. They're self-contained and easy to move between pages.

## Pages

### Home (`/`)
Complete conversion funnel: Hero → Expectations → How It Works → Solutions → FAQ → Contact Form

### Solutions (`/solutions`)
Overview page + 3 detailed pages (AI Receptionist, Websites, Chatbots)

### Pricing (`/pricing`)
3-tier pricing cards + add-ons section + FAQ

### About (`/about`)
Company story and approach

### Contact (`/contact`)
Contact form + phone/email info

## Deployment

Site is configured for GitHub Pages with `adapter-static`:

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Site builds and deploys automatically

Build output goes to `/build` directory.

## Accessibility

- Semantic HTML throughout
- Proper heading hierarchy
- Form labels and ARIA attributes
- Focus states on interactive elements
- Color contrast meets WCAG AA standards

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile Safari iOS 12+
- Chrome Android

## License

MIT

---

Built with Claude Code 🤖
