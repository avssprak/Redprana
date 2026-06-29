# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Identity

**Brand**: Red Prana  
**Legal Entity**: Red Prana Enterprises  
**Domain**: redprana.com  
**Founder**: Prakash (personal brand — he IS the product at this stage)  
**Product**: AI-GOS™ (AI Governance Operating System) — future SaaS, referenced on site  
**Contact Email**: prakash@redprana.com  
**Booking**: mailto:prakash@redprana.com with subject "Book a Consultation"

---

## Repository Layout

```
Website/
├── CLAUDE.md                     ← This file (root project memory)
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

npm install         # Install dependencies
npm run dev         # Start dev server at http://localhost:5173
npm run build       # Type-check (tsc) then bundle to dist/
npm run preview     # Preview production build locally
npm run lint        # ESLint — zero warnings allowed (--max-warnings 0)
```

**Deploy**: `npm run build` → upload `dist/` contents to GoDaddy cPanel `public_html/`

### .htaccess required in public_html/ root (React Router SPA routing)

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## Build Order (follow docs/prompts/ sequence)

The `docs/prompts/` directory contains numbered prompt files that define each build step:

1. `00-project-setup.md` — scaffold already done
2. `01-navbar-footer.md` — Navbar, Footer, PageLayout
3. `02-framework-compass.md` — **Build this before any pages**
4. `03-home-page.md`
5. `04-services-page.md`
6. `05-frameworks-page.md`
7. `06-about-contact-pages.md`
8. `07-seo-performance-deploy.md`

---

## What This Website Does

5-page enterprise consulting website for an AI Governance practice targeting CISOs, Chief Risk Officers, Compliance Officers, and AI Governance Leads in US (NIST AI RMF), Singapore (MAS FEAT/AIRG), and Middle East (UAE AI Strategy, Saudi Vision 2030).

| Route | Page | Primary CTA |
|-------|------|-------------|
| `/` | Home | Book a Consultation |
| `/services` | Services | Request a Proposal |
| `/frameworks` | Frameworks | Download Framework Guide |
| `/about` | About Prakash | Book a Call |
| `/contact` | Contact | Send Message (mailto) |

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

### Import Alias

`@` maps to `src/` (configured in vite.config.ts). Use `@/components/...`, `@/pages/...`, etc.

### Vite Build Chunks

```ts
// vite.config.ts — manualChunks
vendor: ['react', 'react-dom', 'react-router-dom']
motion: ['framer-motion']
```

### Component Structure

```
src/
├── components/
│   ├── layout/         Navbar, Footer, PageLayout
│   ├── ui/             Button, Card, Badge, SectionHeader, AnimatedSection
│   ├── FrameworkCompass/  index.tsx, CompassNode.tsx, FrameworkDetail.tsx
│   └── sections/       Hero, ServicesGrid, TrustBar, FrameworkPreview, AIGOSTeaser, ContactCTA
├── pages/              Home, Services, Frameworks, About, Contact
├── hooks/              useScrollAnimation.ts, useFrameworkCompass.ts
├── data/               services.ts, frameworks.ts, navigation.ts  ← already scaffolded
├── types/              index.ts  ← already scaffolded
├── utils/              seo.ts
├── App.tsx
└── main.tsx
```

### Already-Scaffolded Files

These files exist with typed interfaces and data — read them before creating new types or data:

- `src/types/index.ts` — NavItem, Service, Framework, FrameworkId, CompassNode, ContactFormData, PageSEO
- `src/data/frameworks.ts` — Framework data (nist, iso42001, euaiact, mas)
- `src/data/services.ts` — Service definitions
- `src/data/navigation.ts` — Nav items

### Signature Element — Framework Compass

The one unique element that makes this site memorable. Interactive SVG/Canvas radial diagram:

```
       NIST AI RMF
           ↑
MAS ←——[ CORE ]——→ EU AI Act
           ↓
       ISO 42001
```

- Built as `<FrameworkCompass />` in `src/components/FrameworkCompass/`
- Appears in Hero (compact) and Frameworks page (full interactive)
- Nodes are clickable/keyboard-accessible (Tab + Enter); expand to show 3 key requirements + Red Prana mapping
- Compass rotates subtly on scroll via Framer Motion `useScroll`
- `Framework.angle` field (0/90/180/270 degrees) positions each node on the compass

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
primary:        #0B1220  near-black navy — headings, nav background
secondary:      #0E7490  deep teal — section accents, borders
accent:         #2563EB  blue — primary buttons, links, highlights
accent.warm:    #C2410C  burnt orange — Red Prana brand warmth, use sparingly
success:        #10B981  green — positive indicators
surface:        #F8FAFC  off-white — page background
surface.dark:   #0F172A  dark sections — footer, hero
text:           #111827  body text
text.muted:     #6B7280  secondary text, captions
```

Brand rationale: Navy + Teal = enterprise authority. `accent.warm` is the "Prana" warmth — one accent element per page maximum.

### Typography (Google Fonts loaded in index.html)

```
font-display  →  Poppins 600/700  (headings)
font-body     →  Inter 400/500    (body)
font-mono     →  JetBrains Mono 400  (framework codes, version numbers)
```

### Layout Conventions

- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Cards: `rounded-2xl shadow-card hover:shadow-card-hover transition-shadow`
- Primary buttons: `rounded-full`; Secondary: `rounded-lg`; Badges: `rounded-full`

### Animation (Framer Motion)

- Page transitions: `fadeIn` with `y: 20 → 0`, duration `0.5s`
- Stagger: `staggerChildren: 0.1`
- Scroll-triggered: `whileInView` with `once: true`
- Card hover: `whileHover={{ scale: 1.02 }}`
- No looping animations on load — feels unserious to enterprise buyers

---

## SEO (per page)

| Page | Title | Meta Description |
|------|-------|-----------------|
| Home | AI Governance Consultant — Red Prana Enterprises | Enterprise AI governance consulting across ISO 42001, NIST AI RMF, MAS FEAT, and EU AI Act. Book a consultation with Prakash. |
| Services | AI Governance Services — Red Prana | Maturity assessments, framework implementation, AI risk registers, and regulatory compliance for US, Singapore, and Middle East enterprises. |
| Frameworks | AI Governance Frameworks — ISO 42001, NIST AI RMF, MAS FEAT | Interactive guide to the leading AI governance frameworks — mapped, compared, and ready to implement. |
| About | About Prakash — AI Governance Consultant | Meet the founder of Red Prana Enterprises, AI governance practitioner and builder of AI-GOS™. |
| Contact | Contact Red Prana — Book an AI Governance Consultation | Get in touch with Red Prana Enterprises to discuss your AI governance assessment or implementation project. |

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
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
```

Branch: `main` only for Stage 1.
