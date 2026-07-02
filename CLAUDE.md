# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Identity

**Brand**: Red Prana  
**Legal Entity**: Red Prana Enterprises  
**Domain**: redprana.com  
**Founder**: Prakash Achanta (personal brand — he IS the product at this stage)  
**Product**: AI-GOS™ (AI Governance Operating System) — future SaaS, referenced on site  
**Contact Email**: prakash@redprana.com  
**Booking**: mailto:prakash@redprana.com with subject "Book a Consultation"

---

## Repository Layout

```
Website/
├── CLAUDE.md                     ← This file (single source of truth)
├── roadmap.md                    ← Stage 1/2/3 planning
├── redprana-starter-kit/         ← ALL code lives here
│   ├── src/
│   ├── docs/prompts/             ← Numbered build prompts (00–07)
│   └── package.json
```

All development happens inside `redprana-starter-kit/`. Run all commands from that directory.

---

## Development Commands

```bash
cd redprana-starter-kit

npm run dev         # Start dev server at http://localhost:5173
npm run build       # tsc (type-check) then vite build → dist/
npm run lint        # ESLint — zero warnings allowed (--max-warnings 0)
npm run preview     # Preview production build locally
```

There is no test suite. `npm run build` (which runs `tsc` first) is the primary correctness gate.

**Deploy**: `npm run build` → upload `dist/` contents to GoDaddy cPanel `public_html/`

### .htaccess

`redprana-starter-kit/public/.htaccess` is already checked into the repo and is copied into `dist/` on every build — no manual server-side step needed. It contains the SPA-fallback rewrite:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## What This Website Does

5-page enterprise consulting website for an AI Governance practice targeting CISOs, Chief Risk Officers, Compliance Officers, and AI Governance Leads in US (NIST AI RMF), Singapore (MAS FEAT/AIRG), and Middle East (UAE AI Strategy, Saudi Vision 2030).

| Route | Page | Primary CTA |
|-------|------|-------------|
| `/` | Home | Book a Consultation |
| `/services` | Services | Request a Proposal |
| `/frameworks` | Frameworks | Book a Framework Selection Workshop |
| `/about` | About Prakash | Book a Call |
| `/contact` | Contact | Send Message (mailto) |
| `/compass-test` | CompassTest | Dev-only test harness — not linked in nav |

**Current status**: All 5 pages are fully built. `About.tsx` has four sections (hero, founder bio with expertise badges, values, AI-GOS mention) — the founder headshot is still a placeholder `div` awaiting a real photo (400×400px, see TODO in `FounderSection`). `Contact.tsx` has three contact options (book, proposal, waitlist), a "What Happens Next" process list, and a copy-to-clipboard email display. `Services.tsx` has two additional hardcoded sections beyond the service rows: `RegionalCoverage` (three jurisdiction cards: US, Singapore, Middle East) and `DiscoveryCTA` (free discovery call CTA) — this data lives inline in the file, not in `services.ts`. `Frameworks.tsx` similarly has hardcoded `FRAMEWORK_OVERVIEWS` and `COMPARISON_ROWS` constants inline rather than in the data layer.

---

## Tech Stack — Non-Negotiable

```
Vite 5+
React 18
TypeScript (strict mode)
Tailwind CSS 3
Framer Motion 11
React Router DOM v6
react-helmet-async (SEO meta tags)
lucide-react (icons only — no other icon library)
```

---

## Architecture

### Entry Point & Providers

`main.tsx` wraps the app in `<HelmetProvider>` (react-helmet-async) and `<BrowserRouter>`. Add any new context providers there.

### Routing & Code Splitting

All pages are `React.lazy` + `Suspense` in `App.tsx`. `PageLayout` (Navbar + Footer + `ScrollToTop`) wraps all routes. The `<main>` in `PageLayout` has `pt-16` to clear the fixed 64px navbar — all pages must account for this.

### ScrollToTop

`src/components/layout/ScrollToTop.tsx` renders inside `PageLayout` (not in `App.tsx`). On each navigation it either scrolls to `window.scrollTo(0,0)` (no hash) or smooth-scrolls to the hash element, retrying up to 15 times at 80ms intervals to handle lazy-rendered sections that may not be in the DOM yet. This is what makes `/frameworks#${id}` deep-links from the compact Compass work correctly.

### Import Alias

`@` → `src/` (vite.config.ts + tsconfig.json). Use `@/components/...`, `@/pages/...`, etc.

### Vite Build Chunks

```ts
vendor: ['react', 'react-dom', 'react-router-dom']
motion: ['framer-motion']
```

### Data Layer

All site data lives in `src/data/`. Shared types are in `src/types/index.ts` — read this before adding new interfaces. Read data files before adding types or copy:

- `frameworks.ts` — exports `frameworks: Framework[]` and `getFrameworkById(id)`. Each entry has `angle: 0 | 90 | 180 | 270` (compass position) and `color: 'accent' | 'secondary'` (only these two values are used — the Compass component maps them to Tailwind classes via a lookup object).
- `services.ts` — service definitions with `stage: 'available' | 'coming-soon'`. The `icon` field is a **string** (Lucide icon name). `Services.tsx` maintains an `iconMap: Record<string, LucideIcon>` to resolve these — adding a new service with a new icon requires updating `iconMap` in that file.
- `navigation.ts` — nav items

### Signature Element — Framework Compass

`src/components/FrameworkCompass/` is the centrepiece interactive element.

- `index.tsx` — public API. Accepts `compact?: boolean` prop. **Key behavior difference**: when `compact={true}`, clicking a node navigates to `/frameworks#${framework.id}` instead of expanding the detail panel. Used compact on Home, full (default) on Frameworks page.
- `CompassRing.tsx` — SVG ring + tick marks + `CenterFlame` (the only `repeat: Infinity` animation allowed)
- `CompassNode.tsx` — derives position from `springRotation` motion value; Tab + Enter accessible
- `FrameworkDetail.tsx` — side panel with 3 requirements + Red Prana mapping. Contains its own `JURISDICTION_FLAGS` and `BORDER_COLORS` lookup objects
- Scroll rotation: `scrollY * 0.005` radians added to the spring rotation via `useMotionValueEvent`
- Mobile fallback: below `md` breakpoint the compass is replaced with a simple card list. **Exception**: in `Hero.tsx` the compass wrapper is `hidden md:flex aria-hidden="true"` — the mobile card list is intentionally suppressed in the hero to avoid clutter, so the compass is invisible to mobile visitors on the home page entirely
- **`JURISDICTION_FLAGS`**: now a single export from `frameworks.ts` (`'United States' | 'International' | 'European Union' | 'Singapore'`) — imported by `index.tsx`, `FrameworkDetail.tsx`, and `Frameworks.tsx`. Adding a new jurisdiction only requires updating `frameworks.ts`.

`useFrameworkCompass` hook in `src/hooks/` manages active selection state. `useScrollAnimation(threshold?)` tracks whether `scrollY` has passed a pixel threshold — used by Navbar to switch between transparent and opaque backgrounds.

---

## TypeScript Strictness

Beyond `strict: true`, these compiler flags are enabled and will fail the build:

- `noUnusedLocals` / `noUnusedParameters` — prefix unused identifiers with `_` to suppress
- `noFallthroughCasesInSwitch`

`tsc` runs before `vite build`, so type errors block the production build.

---

## Coding Rules

### Always
- Functional components with TypeScript interfaces
- Named exports for components, default export for pages
- Tailwind classes only — no inline styles, no CSS modules
- Mobile-first responsive (sm → md → lg → xl)
- Every image: `alt`, `loading="lazy"`, `width`/`height`
- Every interactive element: keyboard accessible, ARIA labels
- React Router `<Link>` for internal navigation (never `<a href>` for internal routes)
- `react-helmet-async` for every page's `<title>` and meta description

### Never
- No inline CSS (`style={{}}`)
- No Bootstrap, MUI, Chakra, Ant Design, or jQuery
- No class components
- No `any` type without an explanatory comment
- No hardcoded colours outside tailwind.config.ts
- No Lorem Ipsum — write real, enterprise-grade copy

---

## Design System

### Colour Palette (tailwind.config.ts)

```
primary           #0B1220  near-black navy — headings, nav background
primary-light     #1a2540  lighter navy — hover states on dark backgrounds
secondary         #0E7490  deep teal — section accents, borders
secondary-light   #0891b2  lighter teal — hover states
accent            #2563EB  blue — primary buttons, links, highlights
accent-light      #3b82f6  lighter blue — hover states
accent-warm       #C2410C  burnt orange — Red Prana brand warmth, use sparingly
brand-red         #C52032  "NASA Red" — logo wordmark only (`text-brand-red`), never for UI elements
success           #10B981  green — positive indicators
surface           #F8FAFC  off-white — page background
surface-dark      #0F172A  dark sections — footer, hero
text              #111827  body text
text-muted        #6B7280  secondary text, captions
text-inverse      #F9FAFB  text on dark backgrounds
```

Brand rationale: Navy + Teal = enterprise authority. `accent-warm` is the "Prana" warmth — one accent element per page maximum.

### Typography (Google Fonts loaded in index.html)

```
font-display  →  Poppins 600/700     (headings)
font-body     →  Inter 400/500       (body)
font-mono     →  JetBrains Mono 400  (framework codes, version numbers)
font-logo     →  Audiowide           (wordmark only — see Navbar.tsx / Footer.tsx)
```

The logo wordmark itself (`font-logo`, e.g. "Red" + `text-brand-red` "prana") is hand-built in `Navbar.tsx` and `Footer.tsx`, not an image — static logo files for other contexts (favicon, social, print) live in `public/brand/`.

Custom font-size utilities: `text-display-xl` (4.5rem), `text-display-lg` (3.75rem), `text-display-md` (3rem).

### Layout Conventions

- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Cards: `rounded-2xl shadow-card hover:shadow-card-hover transition-shadow`
- Primary buttons: `rounded-full`; Secondary: `rounded-lg`; Badges: `rounded-full`

### Custom Utilities (tailwind.config.ts)

```
bg-hero-pattern         dual radial gradient (teal + blue) for dark hero sections
shadow-card             subtle resting card shadow
shadow-card-hover       elevated card shadow on hover
shadow-glow-teal        30px teal glow — use on hover for interactive elements
shadow-glow-blue        30px blue glow — use on hover for interactive elements
animate-fade-up         fadeUp keyframe (0.6s ease-out)
animate-compass-spin    slow 20s linear spin
```

Additional utilities defined in `src/index.css` via `@layer utilities`:

```
bg-hero-grid            subtle white grid lines (40px) — used on dark hero sections
text-gradient-teal      teal→blue gradient text (via background-clip)
text-gradient-warm      burnt-orange→blue gradient text
```

### Animation (Framer Motion)

- Page transitions: `fadeIn` with `y: 20 → 0`, duration `0.5s`
- Stagger: `staggerChildren: 0.1`
- Scroll-triggered: `whileInView` with `once: true`
- Card hover: `whileHover={{ scale: 1.02 }}`
- No looping animations on load — feels unserious to enterprise buyers
- Exception: `CenterFlame` in `CompassRing.tsx` has a subtle pulsing glow (`repeat: Infinity`) — intentional brand element

---

## Content — Real Copy

### Hero

**Headline options** (pick one per build):
- "AI Governance That Keeps Enterprise AI Accountable"
- "From AI Risk to Responsible AI — A Framework for Enterprise Leaders"
- "Your AI Systems Are Advancing. Your Governance Must Keep Pace."

**Sub-headline**:
"Red Prana helps CISOs, Chief Risk Officers, and AI Governance Leads implement ISO 42001, NIST AI RMF, and MAS AI Governance frameworks — with practical assessments, control libraries, and the AI-GOS™ platform."

### Trust Bar

"Frameworks We Implement: NIST AI RMF · ISO/IEC 42001 · EU AI Act · MAS FEAT · MAS AIRG · UAE AI Strategy · Saudi NDMO · CSA AICM"

### Services (exact titles)

1. **AI Governance Maturity Assessment** — Baseline your current state against ISO 42001 and NIST AI RMF
2. **Framework Implementation** — End-to-end deployment of AI governance controls and policies
3. **AI Risk Register Design** — Structured risk identification, classification, and treatment plans
4. **Regulatory Compliance Advisory** — MAS FEAT/AIRG, EU AI Act, UAE AI Strategy alignment
5. **AI-GOS™ Platform** — Enterprise AI Governance Operating System (coming soon — join waitlist)
6. **Board & Executive Briefings** — AI governance literacy and accountability frameworks for leadership

### About Prakash Achanta

"Prakash Achanta is an AI Governance consultant and platform builder with deep expertise across regulated industries in the US, Singapore, and the Middle East. He founded Red Prana Enterprises to help organisations build AI systems that are not just capable — but accountable, auditable, and compliant.

He developed the QDT-AIGMM™ AI Governance Maturity Model, has delivered assessments for enterprise clients across financial services and scientific information sectors, and is building AI-GOS™ — an enterprise AI Governance Operating System designed for multi-tenant deployment.

Prakash Achanta works at the intersection of AI regulation, enterprise risk, and platform engineering."

---

## SEO (per page)

| Page | Title | Meta Description |
|------|-------|-----------------|
| Home | AI Governance Consultant — Red Prana Enterprises | Enterprise AI governance consulting across ISO 42001, NIST AI RMF, MAS FEAT, and EU AI Act. Book a consultation with Prakash. |
| Services | AI Governance Services — Red Prana | Maturity assessments, framework implementation, AI risk registers, and regulatory compliance for US, Singapore, and Middle East enterprises. |
| Frameworks | AI Governance Frameworks — ISO 42001, NIST AI RMF, MAS FEAT | Interactive guide to the leading AI governance frameworks — mapped, compared, and ready to implement. |
| About | About Prakash Achanta — AI Governance Consultant \| Red Prana Enterprises | Meet the founder of Red Prana Enterprises, AI governance practitioner and builder of AI-GOS™. |
| Contact | Contact Red Prana — Book an AI Governance Consultation | Get in touch with Red Prana Enterprises to discuss your AI governance assessment or implementation project. |

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| First Contentful Paint | < 1.5s |
| Total Bundle Size | < 300KB gzipped |

---

## Stage 1 Scope — Do Not Build Yet

- No blog/CMS (Stage 2)
- No assessment calculator (Stage 2)
- No downloadable lead magnets (Stage 2)
- No client portal, AI-GOS login, or payment flow (Stage 3)
- No database or server-side code

---

## Git Commit Convention

```
feat: add FrameworkCompass interactive component
fix: mobile nav menu z-index overlap
refactor: extract Button variants to ui/Button.tsx
style: align card grid spacing on Services page
docs: update CLAUDE.md with SEO copy
```

Branch: `main` only for Stage 1.
