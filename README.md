# Paper Poster Landing Page

A minimal "paper poster" SvelteKit landing page with ASCII art USA maps and handwritten accents.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add ASCII Art

Open `src/lib/assets/ascii.ts` and replace the placeholder ASCII art with your actual USA map shapes:

- Replace `USA_LEFT` with your left USA ASCII art
- Replace `USA_RIGHT` with your right USA ASCII art

The file should look like:

```typescript
export const USA_LEFT = `your left ASCII art here`;
export const USA_RIGHT = `your right ASCII art here`;
```

### 3. Add Yeezy Handwritten Font

Place your Yeezy-style handwritten font files in the `static/fonts/` directory:

- `static/fonts/yeezy-hand.woff2` (preferred, smaller file size)
- `static/fonts/yeezy-hand.woff` (fallback)

**Note:** If you don't have these font files, the page will fall back to the system `cursive` font. The handwritten font is used for:
- The "look FORWARD!" button
- The bottom scroll hint text

### 4. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your landing page.

## Building for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── lib/
│   ├── assets/
│   │   └── ascii.ts              # ASCII art USA maps (REPLACE THIS)
│   └── components/
│       └── LandingPoster.svelte  # Main poster component
├── routes/
│   ├── +page.svelte              # Landing page route
│   ├── +layout.svelte            # Layout wrapper
│   └── +layout.ts                # Prerender config
└── app.html                      # HTML template with font setup

static/
└── fonts/
    ├── yeezy-hand.woff2          # Handwritten font (ADD THIS)
    └── yeezy-hand.woff           # Handwritten font fallback (ADD THIS)
```

## Design Specifications

- **Background**: Off-white paper (#f5f1ea)
- **Typography**:
  - Headline: Impact/condensed fonts
  - Tagline: System sans-serif
  - Handwritten elements: YeezyHand custom font
- **Layout**: Centered poster with ASCII art in bottom corners
- **Components**:
  - Pasted label strip with tagline + headline
  - Dashed CTA button
  - Bottom handwritten note

## Font Recommendations

For the handwritten elements, use a casual script/handwriting font similar to:
- Permanent Marker
- Indie Flower
- Caveat
- Or any Yeezy-style handwritten font

Convert your font to WOFF2 and WOFF formats using tools like:
- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [Transfonter](https://transfonter.org/)
