# Prompt 04 — Services Page

Read CLAUDE.md before starting.

---

Build the complete Services page (`src/pages/Services.tsx`).

## Page SEO
- Title: "AI Governance Services — Red Prana Enterprises"
- Description: "Maturity assessments, framework implementation, AI risk registers, and regulatory compliance for US, Singapore, and Middle East enterprises."

## Page Structure

### Hero (compact — not full-screen)
- Background: `bg-primary` with subtle dot pattern
- H1: "Enterprise AI Governance Services"
- Subheadline: "Practical, framework-aligned AI governance services for regulated industries — from initial assessment to full implementation."
- Breadcrumb: Home → Services

### Services Detail Section

For each service in `src/data/services.ts`, build a full detail card:

Layout: Alternating (left-image/right-text, right-image/left-text) on desktop. Stacked on mobile.

Each service block:
- Large icon in a `rounded-2xl bg-secondary/10` container (64×64px icon, `text-secondary`)
- H2: Service title (Poppins 600)
- Description paragraph (2-3 sentences)
- Features list: all features with `Check` lucide icon in `text-success`
- CTA button → mailto:prakash@redprana.com?subject={service title}
- For AI-GOS: "Coming Soon — Join the Waitlist" treatment with waitlist mailto
- `id` attribute matching service.id for anchor deep-linking from footer and navbar

Add an `<hr>` divider between each service (subtle, `border-text-muted/10`).

### Regional Coverage Section

Three-column card grid:
- Card 1: "United States" — NIST AI RMF, Executive Order on AI, sector-specific requirements
- Card 2: "Singapore" — MAS FEAT, MAS AIRG, PDPC, MAS TRM
- Card 3: "Middle East" — UAE AI Strategy, Saudi NDMO, DIFC, ADGM, Qatar NCSA

Each card: flag emoji + region name as H3, bullet list of frameworks/regulations, `text-secondary` accent.

### Bottom CTA

"Not sure where to start? Book a free 30-minute discovery call."
Button: "Book Discovery Call" → mailto:prakash@redprana.com?subject=Discovery%20Call%20Request
