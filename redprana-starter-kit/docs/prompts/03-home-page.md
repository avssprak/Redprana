# Prompt 03 — Home Page

Read CLAUDE.md before starting. The Framework Compass (Prompt 02) must be built first.

---

Build the complete Home page (`src/pages/Home.tsx`) for Red Prana Enterprises.

## Page SEO (react-helmet-async)
- Title: "AI Governance Consultant — Red Prana Enterprises"
- Description: "Enterprise AI governance consulting across ISO 42001, NIST AI RMF, MAS FEAT, and EU AI Act. Book a consultation with Prakash."

## Sections (in order)

### 1. Hero Section (`src/components/sections/Hero.tsx`)

Layout: Two-column on desktop (text left, FrameworkCompass right), stacked on mobile.

Left column:
- Eyebrow badge: "AI Governance · ISO 42001 · NIST AI RMF · MAS FEAT" — small caps, `text-secondary`, `font-mono text-xs`
- H1: "AI Governance That Keeps Enterprise AI Accountable"
  - "Accountable" rendered in `text-gradient-teal`
  - Font: Poppins 700, `text-5xl lg:text-6xl`
- Subheadline: "Red Prana helps CISOs, Chief Risk Officers, and AI Governance Leads implement ISO 42001, NIST AI RMF, and MAS AI Governance frameworks — with practical assessments, control libraries, and the AI-GOS™ platform."
  - Font: Inter 400, `text-xl text-text-muted leading-relaxed`
- CTA group:
  - Primary: "Book a Consultation" — mailto:prakash@redprana.com?subject=Consultation%20Request
  - Secondary: "Explore Frameworks →" — React Router Link to /frameworks
- Micro-trust line below CTAs: "Trusted by enterprise teams across US · Singapore · Middle East"

Right column:
- `<FrameworkCompass compact />` component
- Subtle background: radial gradient glow in secondary (#0E7490) behind the compass

Background:
- `bg-surface-dark` (`#0F172A`)
- `bg-hero-pattern` (from tailwind.config.ts — the radial gradient overlay)
- Subtle grid pattern: 1px lines at 40px intervals, 3% opacity white

### 2. Trust Bar (`src/components/sections/TrustBar.tsx`)

Thin strip between Hero and next section:
- Background: `bg-primary` (`#0B1220`)
- Text: "Frameworks We Implement:" in `text-text-muted text-xs` + then each framework in `font-mono text-secondary text-sm`: "NIST AI RMF · ISO/IEC 42001:2023 · EU AI Act · MAS FEAT · MAS AIRG · UAE AI Strategy · Saudi NDMO · CSA AICM"
- Horizontal scroll on mobile (no line-wrap)

### 3. Services Preview (`src/components/sections/ServicesGrid.tsx`)

Show the 6 services from `src/data/services.ts` as a 3-column grid (desktop), 2-column (tablet), 1-column (mobile).

Each card:
- White background (`bg-white`), `rounded-2xl`, `shadow-card hover:shadow-card-hover`
- Icon: lucide-react icon (from service.icon field), `text-secondary`, 28px
- Title: Poppins 600, `text-lg text-primary`
- Description: Inter 400, `text-sm text-text-muted`, 2 lines max with ellipsis
- Features: 2 features shown (first two), small checkmark bullets in `text-success`
- CTA: text link "Learn more →" in `text-accent`
- "Coming Soon" badge on ai-gos card: `bg-accent-warm/10 text-accent-warm rounded-full px-3 py-1 text-xs`
- Framer Motion: `whileInView fadeUp` with `staggerChildren: 0.08`

Section header above grid:
- Eyebrow: "What We Do"
- H2: "End-to-End AI Governance Services"
- Subtitle: "From initial maturity assessment to full framework implementation — built for regulated industries."

### 4. Framework Compass Section (`src/components/sections/FrameworkPreview.tsx`)

Dark background section (`bg-surface-dark`):
- Left: section copy
  - Eyebrow: "Our Framework Coverage"
  - H2: "Every Major AI Governance Standard. One Practice."
  - Body: "We work across the four leading AI governance frameworks — mapped, cross-referenced, and implemented in your operating context."
  - "Explore All Frameworks →" link to /frameworks
- Right: `<FrameworkCompass compact />` (reuse — this is the preview on the homepage)

### 5. AI-GOS Teaser (`src/components/sections/AIGOSTeaser.tsx`)

Full-width section with gradient background (`from-primary to-secondary`):
- Centered layout
- Badge: "Coming Soon" in `accent-warm`
- H2: "Introducing AI-GOS™"
- Subheadline: "The AI Governance Operating System — purpose-built for enterprise teams managing AI risk, compliance, and audit readiness at scale."
- Feature pills: "AI Inventory" · "Risk Register" · "Control Library" · "Evidence Management" · "Compliance Dashboard"
- CTA: "Join the Waitlist" → mailto:prakash@redprana.com?subject=AI-GOS%20Waitlist
- Background: subtle circuit/grid SVG pattern at 5% opacity

### 6. Contact CTA (`src/components/sections/ContactCTA.tsx`)

Clean closing section:
- H2: "Ready to Govern Your AI?"
- Subheadline: "Book a 30-minute consultation to discuss your AI governance needs."
- Two CTAs:
  - "Book a Consultation" → mailto:prakash@redprana.com?subject=Consultation%20Request
  - "View Services →" → /services

---

## Framer Motion — Page Entry

Wrap the entire page in a motion.div with `initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}`.

Each section uses `whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 30 }} transition={{ duration: 0.6 }} viewport={{ once: true }}`.

## After Building

Run `npm run dev`, open the browser at localhost:5173, and check:
- [ ] Hero displays correctly on desktop and mobile
- [ ] Framework Compass renders and is interactive
- [ ] Services grid is 3-2-1 columns
- [ ] All mailto links work
- [ ] No console errors
- [ ] `npm run build` succeeds
