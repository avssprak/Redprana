# Prompt 01 — Navbar & Footer

Read CLAUDE.md before starting.

---

Build the Navbar and Footer components for the Red Prana Enterprises website.

## Navbar (`src/components/layout/Navbar.tsx`)

Requirements:
- Fixed position, full width, `z-50`
- Background: transparent on hero sections, transitions to `bg-primary/95 backdrop-blur-md` on scroll (use `useScrollAnimation` hook)
- Logo: "Red Prana" in Poppins 600 with a small SVG mark — a stylised flame/lotus hybrid in `accent-warm` (#C2410C) — to the left
- Nav links: Services, Frameworks, About — in Inter 500, `text-text-inverse/80 hover:text-white`
- Primary CTA button: "Book a Consultation" — `rounded-full bg-accent hover:bg-accent-light px-5 py-2 text-sm font-medium text-white transition-colors`
- Mobile: hamburger menu (lucide `Menu` icon), slide-down drawer with all nav links + CTA
- Active route: underline indicator using React Router `useLocation`
- Fully keyboard accessible: focus rings, ARIA labels on mobile toggle

## Footer (`src/components/layout/Footer.tsx`)

Requirements:
- Background: `bg-surface-dark` (`#0F172A`)
- Three-column layout on desktop, stacked on mobile
- Column 1: Logo + tagline ("Enterprise AI Governance. Built for the Regulated World.") + copyright line
- Column 2: Services links (from `src/data/navigation.ts` footerLinks.services)
- Column 3: Frameworks links + Company links
- Bottom bar: "© 2025 Red Prana Enterprises. All rights reserved." | "prakash@redprana.com"
- Trust bar above bottom border: "Frameworks: NIST AI RMF · ISO 42001 · EU AI Act · MAS FEAT · MAS AIRG" in small mono font, `text-text-muted`
- No social icons in Stage 1

After building, run `npm run dev` and visually verify on desktop and mobile viewport.
