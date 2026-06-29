# Prompt 02 — Framework Compass (Signature Element)

Read CLAUDE.md before starting. This is the most important component in the project.

---

Build the `<FrameworkCompass />` component. This is the site's signature visual — an interactive
radial diagram showing the four AI governance frameworks Red Prana implements.

## Files to Create

```
src/components/FrameworkCompass/
├── index.tsx           ← Main export, orchestrates the compass
├── CompassRing.tsx     ← The SVG circular ring and rotating elements
├── CompassNode.tsx     ← Each framework node (clickable)
└── FrameworkDetail.tsx ← Expanded detail panel when a node is active
```

## Data Source

Use `src/data/frameworks.ts` — do not hardcode framework data.

## Visual Design

The compass is an SVG-based circular diagram:

```
                [NIST AI RMF]
                     ↑
                     |
  [MAS FEAT] ←——[ Red Prana ]——→ [ISO 42001]
                     |
                     ↓
                [EU AI Act]
```

- Center: Red Prana logo mark (stylised flame in `accent-warm`) with subtle pulse animation
- Four nodes at 0°, 90°, 180°, 270° — equally spaced on the ring
- Ring: thin stroke in `secondary` (#0E7490), 2px, with subtle glow
- Connecting lines from center to each node
- Node: circle with framework short name, jurisdiction flag emoji, colored by framework

## Interaction

- **Hover**: node scales to 1.1x (Framer Motion `whileHover`)
- **Click/Enter**: activates the node — ring rotates so the selected node is at top
- **Active node**: `<FrameworkDetail />` panel slides in from the right (desktop) or below (mobile)
- **FrameworkDetail panel** contains:
  - Framework full name + jurisdiction
  - 2-sentence description
  - Key requirements (bulleted list, max 4 items)
  - Red Prana's approach (1 paragraph)
  - "Learn more on Frameworks page" link

## Framer Motion

- Ring rotation: `useMotionValue` + `useSpring` for smooth rotation
- Scroll ambient: the ring rotates very slowly (0.5° per scroll unit) using `useScroll`
- Node entrance: staggered `fadeUp` on mount
- Detail panel: `AnimatePresence` with slide + fade

## Accessibility

- All four nodes must be reachable via Tab
- Enter/Space activates the node
- Close detail panel with Escape
- `aria-label` on each node: e.g., "View NIST AI RMF framework details"
- `role="dialog"` on the detail panel with `aria-modal="true"`

## Responsive

- Desktop: 500×500px SVG with detail panel to the right
- Tablet: 380×380px SVG with detail panel below
- Mobile: simplified linear list of 4 framework cards (no radial diagram)
  — use a `useMediaQuery` hook or Tailwind's `hidden`/`block` to toggle

## Usage

This component is used in two places:
1. `src/components/sections/FrameworkPreview.tsx` — compact version on Home page
2. `src/pages/Frameworks.tsx` — full version with expanded detail

Export a `compact` prop: `<FrameworkCompass compact />` renders at 80% size without the
detail panel (clicking navigates to `/frameworks#${frameworkId}`).

---

After building, add `<FrameworkCompass />` to a temporary test route and verify all four
nodes are interactive, the detail panel opens correctly, and keyboard navigation works.
