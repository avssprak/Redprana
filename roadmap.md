# Red Prana Website Roadmap

## Stage 1 — Credibility Foundation (Current)

**Goal**: Look serious to an enterprise buyer who Googles you before a meeting.

**Pages**: Home, Services, Frameworks, About, Contact  
**Signature element**: Framework Compass (interactive radial diagram)  
**Lead capture**: mailto: links only  
**Deploy**: GoDaddy cPanel, static Vite build

**Prompts to run (in order)**:
- [x] 00-project-setup.md
- [x] 01-navbar-footer.md
- [x] 02-framework-compass.md ← Build this before any pages
- [x] 03-home-page.md
- [x] 04-services-page.md
- [x] 05-frameworks-page.md
- [x] 06-about-contact-pages.md
- [x] 07-seo-performance-deploy.md

---

## Stage 2 — Lead Engine

**Goal**: Generate inbound leads through content and interactive tools.

**New pages/features**:
- AI Governance Maturity Calculator (interactive, JavaScript-only, no backend)
  - 20 questions across 5 domains (ISO 42001 aligned)
  - Scores by domain, overall maturity level (1–5)
  - Email-gated results (mailto: or Formspree)
- Downloadable toolkit page (PDF hosted on GoDaddy, gated by email)
- Insights/blog section (markdown files → static pages via Vite plugin)
  - 3 cornerstone articles on launch:
    - "ISO 42001 vs NIST AI RMF: Which Framework Is Right for You?"
    - "What the EU AI Act Means for Singapore Financial Institutions"
    - "Building Your First AI Governance Maturity Assessment"
- Newsletter signup (Mailchimp embedded form or Buttondown)
- Case study stubs (anonymised, no client names in Stage 2)

**Timeline**: 4–6 weeks after Stage 1 goes live

---

## Stage 3 — AI-GOS Platform Bridge

**Goal**: Support the AI-GOS™ product launch with a dedicated presence.

**New pages/features**:
- AI-GOS™ product page (full feature breakdown, screenshots/mockups)
- Pricing page (when ready)
- Waitlist → demo booking flow (Calendly integration)
- Client portal teaser / login stub
- Partner programme page

**Infrastructure changes**:
- Move from GoDaddy to Vercel or Netlify (better CI/CD, edge caching)
- Add a headless CMS (Sanity.io or Contentlayer) for blog
- Set up Google Analytics 4 + conversion tracking

**Timeline**: When AI-GOS™ is demo-ready
