# Prompt 05 — Frameworks Page

Read CLAUDE.md before starting. The Framework Compass (Prompt 02) must be built first.

---

Build the complete Frameworks page (`src/pages/Frameworks.tsx`).

This is the highest-SEO-value page on the site. It must be comprehensive, accurate, and
contain structured content that search engines can index for keywords like:
"ISO 42001 implementation", "NIST AI RMF consultant", "MAS FEAT compliance", "EU AI Act assessment".

## Page SEO
- Title: "AI Governance Frameworks — ISO 42001, NIST AI RMF, MAS FEAT | Red Prana"
- Description: "Interactive guide to the leading AI governance frameworks — ISO 42001, NIST AI RMF, EU AI Act, and MAS FEAT/AIRG — mapped, compared, and ready to implement."

## Page Structure

### Hero (compact)
- H1: "AI Governance Frameworks — Mapped and Ready to Implement"
- Subheadline: "Four leading AI governance standards. One integrated practice."
- Eyebrow: "Framework Coverage"

### Framework Compass — Full Version

Display `<FrameworkCompass />` (not compact) centered on the page.
Below the compass: "Click any framework to explore its requirements and our implementation approach."

### Framework Detail Sections

Below the compass, for each framework in `src/data/frameworks.ts`, build a full anchor section
with `id={framework.id}` (e.g., `id="nist"`, `id="iso42001"`, `id="euaiact"`, `id="mas"`).

Each section:
- Sticky section label in `font-mono text-xs text-secondary` (the framework short name)
- H2: Framework full name
- Jurisdiction badge: country/region flag + "Jurisdiction: {jurisdiction}"
- Overview paragraph: 3-4 sentences of real, accurate content
- Key requirements: all items from `framework.keyRequirements` as a detailed list
  - Each requirement: bold label + explanation sentence
- Red Prana approach: `bg-secondary/5 rounded-2xl p-6` callout box with our approach text
- CTA: "Discuss {shortName} Implementation →" → mailto with subject

### Framework Comparison Table

After all four sections, include a comparison table:

| Criterion | NIST AI RMF | ISO 42001 | EU AI Act | MAS FEAT |
|-----------|------------|-----------|-----------|----------|
| Type | Voluntary Framework | Certifiable Standard | Mandatory Regulation | Regulatory Expectation |
| Jurisdiction | US | International | EU (global impact) | Singapore FIs |
| Certification | No | Yes (third-party) | Conformity Assessment | No |
| Risk-based | Yes | Yes | Yes | Yes |
| Primary Audience | All sectors | All sectors | EU market participants | Financial institutions |

Style: `overflow-x-auto` wrapper, clean table with `border-collapse`, `text-sm`.

### Bottom CTA

"Need help choosing the right framework for your organisation?"
"Book a Framework Selection Workshop" → mailto:prakash@redprana.com?subject=Framework%20Selection%20Workshop
