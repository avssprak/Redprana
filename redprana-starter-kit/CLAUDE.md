# CLAUDE.md — RedPrana AI Governance Website
# Claude Code Project Memory — Read this first on every session.

## Project Identity

**Brand**: Red Prana  
**Legal Entity**: Red Prana Enterprises  
**Domain**: redprana.com  
**Founder**: Prakash (personal brand — he IS the product at this stage)  
**Product**: AI-GOS™ (AI Governance Operating System) — future SaaS, referenced on site  
**Contact Email**: prakash@redprana.com  
**Booking**: mailto:prakash@redprana.com with subject "Book a Consultation"

---

## What This Website Does

This is a **5-page enterprise consulting website** for an AI Governance practice targeting CISOs,
Chief Risk Officers, Compliance Officers, and AI Governance Leads in:

- **US** (NIST AI RMF, Executive Order on AI)
- **Singapore** (MAS FEAT, MAS AIRG, PDPC)
- **Middle East** (UAE AI Strategy, Saudi Vision 2030, DIFC, ADGM)

It must:
1. Build credibility instantly for enterprise buyers who Google Prakash before a meeting
2. Convert visitors into consultation bookings via email
3. Position AI-GOS™ as the future platform product

---

## Pages (Stage 1 — Build All Five)

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

**Deployment**: Build locally → upload `dist/` contents to GoDaddy cPanel `public_html/`

---

## Coding Rules

### Always
- Functional components with TypeScript interfaces
- Named exports for components, default export for pages
- Tailwind classes only — no inline styles, no CSS modules
- Mobile-first responsive (sm → md → lg → xl)
- Every image: `alt` text, `loading="lazy"`, `width`/`height` attributes
- Every interactive element: keyboard accessible, ARIA labels
- React Router `<Link>` for internal navigation (never `<a>` for internal routes)
- `react-helmet-async` for every page's `<title>` and meta description

### Never
- No inline CSS (`style={{}}`)
- No Bootstrap, no MUI, no Chakra, no Ant Design
- No jQuery
- No class components
- No `any` TypeScript type without a comment explaining why
- No hardcoded colours outside Tailwind config
- No placeholder Lorem Ipsum — write real, enterprise-grade copy

---

## Design System

### Colour Palette (defined in tailwind.config.ts)

```
primary:     #0B1220  (near-black navy — headings, nav background)
secondary:   #0E7490  (deep teal — section accents, borders)
accent:      #2563EB  (blue — primary buttons, links, highlights)
accent-warm: #C2410C  (burnt orange — Red Prana brand warmth, sparingly)
success:     #10B981  (green — positive indicators)
surface:     #F8FAFC  (off-white — page background)
surface-dark:#0F172A  (dark sections — footer, hero)
text:        #111827  (body text)
text-muted:  #6B7280  (secondary text, captions)
```

**Brand rationale**: Navy + Teal = enterprise authority. Burnt orange (`accent-warm`) is the
"Prana" warmth — used sparingly on the logo mark, hover states, and one accent element per page.
This prevents the site looking like every other govtech site.

### Typography (loaded via Google Fonts in index.html)

```
Display / Headings:  'Poppins', weight 600, 700
Body:                'Inter', weight 400, 500
Mono / Data:         'JetBrains Mono', weight 400 (for framework codes, version numbers)
```

### Spacing Scale
Follow Tailwind defaults. Section padding: `py-20 lg:py-28`. Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.

### Border Radius
- Cards: `rounded-2xl`
- Buttons: `rounded-full` (primary), `rounded-lg` (secondary)
- Badges/tags: `rounded-full`

### Shadows
- Cards: `shadow-sm hover:shadow-lg transition-shadow`
- Hero elements: `shadow-2xl`

### Animation Principles (Framer Motion)
- Page transitions: `fadeIn` with `y: 20 → 0`, duration `0.5s`
- Stagger children: `staggerChildren: 0.1`
- Scroll-triggered: use `whileInView` with `once: true`
- Hover: `whileHover={{ scale: 1.02 }}` on cards
- **No** looping animations on load — feels unserious to enterprise buyers

---

## Signature Element — Framework Compass

**This is the one unique element that makes this site memorable.**

Location: Hero section of the Home page AND a full section on the Frameworks page.

Description: An interactive SVG/Canvas visual showing a compass or radial diagram with
4 framework nodes:

```
       NIST AI RMF
           ↑
MAS ←——[ CORE ]——→ EU AI Act
           ↓
       ISO 42001
```

Each node is clickable and expands to show:
- Framework name + jurisdiction
- Key requirements summary (3 bullet points)
- How Red Prana maps services to this framework
- "Learn more" link to Frameworks page

The compass rotates subtly on scroll (Framer Motion `useScroll`).
On the Frameworks page, it expands to a full interactive reference tool.

**Implementation note**: Build this as `<FrameworkCompass />` component in `src/components/FrameworkCompass/`.
It must be fully keyboard accessible (Tab through nodes, Enter to expand).

---

## Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageLayout.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── SectionHeader.tsx
│   │   └── AnimatedSection.tsx
│   ├── FrameworkCompass/
│   │   ├── index.tsx
│   │   ├── CompassNode.tsx
│   │   └── FrameworkDetail.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── ServicesGrid.tsx
│       ├── TrustBar.tsx
│       ├── FrameworkPreview.tsx
│       ├── AIGOSTeaser.tsx
│       └── ContactCTA.tsx
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Frameworks.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── hooks/
│   ├── useScrollAnimation.ts
│   └── useFrameworkCompass.ts
├── data/
│   ├── services.ts
│   ├── frameworks.ts
│   └── navigation.ts
├── types/
│   └── index.ts
├── utils/
│   └── seo.ts
├── App.tsx
└── main.tsx
```

---

## Content — Real Copy to Use

### Hero Headline Options (pick one per build, A/B test later)
- "AI Governance That Keeps Enterprise AI Accountable"
- "From AI Risk to Responsible AI — A Framework for Enterprise Leaders"
- "Your AI Systems Are Advancing. Your Governance Must Keep Pace."

### Hero Sub-headline
"Red Prana helps CISOs, Chief Risk Officers, and AI Governance Leads implement ISO 42001,
NIST AI RMF, and MAS AI Governance frameworks — with practical assessments, control libraries,
and the AI-GOS™ platform."

### Services (use these exact titles)
1. **AI Governance Maturity Assessment** — Baseline your current state against ISO 42001 and NIST AI RMF
2. **Framework Implementation** — End-to-end deployment of AI governance controls and policies
3. **AI Risk Register Design** — Structured risk identification, classification, and treatment plans
4. **Regulatory Compliance Advisory** — MAS FEAT/AIRG, EU AI Act, UAE AI Strategy alignment
5. **AI-GOS™ Platform** — Enterprise AI Governance Operating System (coming soon — join waitlist)
6. **Board & Executive Briefings** — AI governance literacy and accountability frameworks for leadership

### Trust Bar Items (logos/text row under hero)
"Frameworks We Implement: NIST AI RMF · ISO/IEC 42001 · EU AI Act · MAS FEAT · MAS AIRG ·
UAE AI Strategy · Saudi NDMO · CSA AICM"

### About Prakash (use this copy)
"Prakash is an AI Governance consultant and platform builder with deep expertise across
regulated industries in the US, Singapore, and the Middle East. He founded Red Prana Enterprises
to help organisations build AI systems that are not just capable — but accountable, auditable,
and compliant.

He developed the QDT-AIGMM™ AI Governance Maturity Model, has delivered assessments for
enterprise clients across financial services and scientific information sectors, and is building
AI-GOS™ — an enterprise AI Governance Operating System designed for multi-tenant deployment.

Prakash works at the intersection of AI regulation, enterprise risk, and platform engineering."

---

## SEO Configuration (per page)

| Page | Title Tag | Meta Description |
|------|-----------|-----------------|
| Home | AI Governance Consultant — Red Prana Enterprises | Enterprise AI governance consulting across ISO 42001, NIST AI RMF, MAS FEAT, and EU AI Act. Book a consultation with Prakash. |
| Services | AI Governance Services — Red Prana | Maturity assessments, framework implementation, AI risk registers, and regulatory compliance for US, Singapore, and Middle East enterprises. |
| Frameworks | AI Governance Frameworks — ISO 42001, NIST AI RMF, MAS FEAT | Interactive guide to the leading AI governance frameworks — mapped, compared, and ready to implement. |
| About | About Prakash — AI Governance Consultant | Meet the founder of Red Prana Enterprises, AI governance practitioner and builder of AI-GOS™. |
| Contact | Contact Red Prana — Book an AI Governance Consultation | Get in touch with Red Prana Enterprises to discuss your AI governance assessment or implementation project. |

---

## Deployment Checklist (GoDaddy cPanel)

```bash
# Local build
npm install
npm run build

# Upload dist/* contents to public_html/ via cPanel File Manager or FTP
# Required files in public_html/:
# ├── index.html
# ├── assets/
# └── .htaccess  ← MUST exist for React Router to work
```

### .htaccess (must be in public_html root)
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## What NOT to Build in Stage 1

- No blog/CMS (Stage 2)
- No lead magnet downloads (Stage 2)
- No assessment calculator (Stage 2)
- No client portal (Stage 3)
- No AI-GOS login (Stage 3)
- No payment flow (Stage 3)
- No database or server-side code

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse SEO | 100 |
| Lighthouse Best Practices | 100 |
| First Contentful Paint | < 1.5s |
| Total Bundle Size | < 300KB gzipped |

---

## Git Commit Convention

```
feat: add FrameworkCompass interactive component
fix: mobile nav menu z-index overlap
refactor: extract Button variants to ui/Button.tsx
docs: update CLAUDE.md with SEO copy
style: align card grid spacing on Services page
```

Branch: `main` only for Stage 1 (single developer, move fast).
