# Oblivion Collective

A cinematic one-page agency site built with the Next.js App Router.

The project emphasizes mood, typography, motion, and editorial pacing. It is structured as a composition of focused UI sections, each responsible for one narrative block of the page.

## What This Project Is

- A brand-forward marketing website (not an admin app, not an API platform)
- A single-route experience with animated section transitions
- A TypeScript + Tailwind frontend with smooth scrolling and motion choreography

## Tech Stack

- Framework: Next.js 14 (App Router)
- Language: TypeScript
- UI: React 18
- Styling: Tailwind CSS 3 + custom design tokens
- Motion: Framer Motion
- Smooth Scrolling: Lenis
- Fonts: Playfair Display, Space Mono, Inter via `next/font/google`

## Architecture Overview

The app follows a clean, component-driven structure:

```text
app/
	layout.tsx          # global metadata, fonts, root shell
	page.tsx            # homepage composition + entry animation
	globals.css         # global styles, utilities, scrollbar/theme tweaks

components/
	FullscreenHero.tsx
	MarqueeBand.tsx
	ManifestoSection.tsx
	CaseStudies.tsx
	ProcessSection.tsx
	ContactSection.tsx
	Footer.tsx

lib/
	useSmoothScroll.ts  # Lenis lifecycle + requestAnimationFrame loop
```

### Render Flow

1. `app/layout.tsx` initializes fonts and metadata.
2. `app/page.tsx` mounts the full homepage experience.
3. The page is assembled from independent section components in a deliberate visual order.
4. `useSmoothScroll` runs client-side to drive smooth wheel behavior.

## Design System Notes

Custom theme tokens live in `tailwind.config.ts`:

- `obsidian`: `#080808`
- `off-white`: `#F0EDE8`
- `acid-green`: `#C8FF00`
- `tension-red`: `#FF2D2D`
- `panel`: `#1C1C1C`

Typography is tokenized through CSS variables set at the root layout and referenced by Tailwind font families:

- `editorial` for expressive display moments
- `mono` for technical accents
- `body` for readable long-form text

## Local Development

### Prerequisites

- Node.js 18.17+ (Node 20 recommended)
- npm 9+

### Install

```bash
npm install
```

### Run

```bash
npm run dev
```

Visit `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## SEO and Metadata

Global metadata is defined in `app/layout.tsx`, including:

- Page title + description
- Open Graph defaults
- Twitter card defaults

If a campaign or case study needs dedicated metadata, keep global values here and move page-specific overrides into route-level metadata when new routes are introduced.

## Maintenance Guidelines

- Keep sections modular: one visual responsibility per component.
- Favor design tokens over hard-coded color values when extending UI.
- Keep animation intent clear: motion should support hierarchy, not distract.
- Keep `useSmoothScroll` isolated in `lib/` to avoid side effects in presentational components.
- Update this README whenever architectural decisions change (new routes, data layer, CMS integration, or deployment strategy).

## Deployment

This project deploys cleanly on any platform that supports Next.js 14.

Typical workflow:

1. Push to your main branch.
2. Build with `npm run build` in CI.
3. Deploy the generated Next.js app through your hosting provider (Vercel recommended for zero-friction App Router support).

## Roadmap (Suggested)

- Add structured content source (headless CMS or local MDX) for case studies.
- Introduce route-level pages for deeper portfolio stories.
- Add visual regression checks for key sections.
- Add analytics events for CTA and section engagement.

## License

No license file is currently included in this repository. Add a license if the project will be shared or reused outside a private team context.
