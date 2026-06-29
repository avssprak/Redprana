# Red Prana Enterprises — AI Governance Website

**Domain**: redprana.com  
**Stage**: 1 of 3 (Credibility Foundation)  
**Stack**: Vite · React · TypeScript · Tailwind · Framer Motion  
**Deployment**: GoDaddy cPanel (static build)

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Outputs to dist/
npm run preview    # Preview production build locally
npm run lint       # ESLint check
```

## Deploy to GoDaddy

```bash
npm run build
# Upload contents of dist/ to public_html/ via cPanel File Manager
# Ensure .htaccess is present in public_html/ (see CLAUDE.md)
```

## Pages (Stage 1)

| Route | File | Status |
|-------|------|--------|
| `/` | `src/pages/Home.tsx` | 🔲 To Build |
| `/services` | `src/pages/Services.tsx` | 🔲 To Build |
| `/frameworks` | `src/pages/Frameworks.tsx` | 🔲 To Build |
| `/about` | `src/pages/About.tsx` | 🔲 To Build |
| `/contact` | `src/pages/Contact.tsx` | 🔲 To Build |

## Key Component

`<FrameworkCompass />` — Interactive radial diagram showing how Red Prana maps services
across NIST AI RMF, ISO 42001, EU AI Act, and MAS FEAT/AIRG. This is the signature
differentiator element. See `src/components/FrameworkCompass/`.

## Project Memory

→ Read `CLAUDE.md` before every Claude Code session. It contains all design decisions,
copy, colour palette, component architecture, and coding rules.

## Roadmap

- **Stage 1** (Now): 5-page credibility site — Home, Services, Frameworks, About, Contact
- **Stage 2**: Lead engine — AI Maturity Calculator, downloadable toolkit, Insights blog
- **Stage 3**: AI-GOS™ product page, waitlist, platform bridge
