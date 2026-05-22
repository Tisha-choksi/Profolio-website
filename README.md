# Tisha Choksi — Portfolio

Personal portfolio website for **Tisha Choksi**, an AI/ML Engineer specializing in GenAI, RAG architectures, and applied NLP.

Built with [Next.js 16](https://nextjs.org) (App Router) and a glassmorphism design system with scroll-triggered animations, 3D tilt cards, and interactive mouse-trailing effects.

## Tech Stack

- **Framework** — Next.js 16.2.6 (App Router)
- **Fonts** — Syne, DM Sans, JetBrains Mono via `next/font` (self-hosted, zero CLS)
- **Styling** — CSS custom properties, CSS animations, inline styles with glassmorphism utilities
- **Animation** — Intersection Observer (`useInView`), CSS keyframes, spring easing
- **Build** — Turbopack (default in Next.js 16)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Design tokens, animations, glass utilities
│   ├── layout.js         # Font loading, metadata, root layout
│   └── page.js           # Main page (client component)
├── components/
│   ├── Nav.jsx           # Glass nav with active section indicator
│   ├── Hero.jsx          # Mouse-parallax hero with typewriter
│   ├── Experience.jsx    # Timeline layout with animated connectors
│   ├── Projects.jsx      # Tilt cards with featured layout
│   ├── ProjectModal.jsx  # Detail modal with ESC dismiss
│   ├── Skills.jsx        # Categorized animated skill cards
│   ├── Contact.jsx       # Two-column glass layout
│   ├── Footer.jsx        # Minimal footer
│   ├── SectionHeading.jsx
│   └── TiltCard.jsx      # 3D mouse-tracking tilt wrapper
├── data/
│   └── portfolio.js      # All content centralized
└── hooks/
    └── useInView.js      # Intersection Observer hook
```

## Design

- **Glassmorphism** — `backdrop-filter: blur(24px)` surfaces with `rgba(255,255,255,0.025)` backgrounds
- **Accent** — Lime green (`#c2ff3d`) used sparingly for CTAs, section indicators, and hover states
- **Animations** — Scroll-triggered fade-in-up reveals, mouse-following parallax, floating geometric shapes, pulsing glows
- **Typography** — Syne (headings), DM Sans (body), JetBrains Mono (code/metrics)

## Deployment

Deploy to [Vercel](https://vercel.com):

```bash
npx vercel
```
