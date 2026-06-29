# Prompt 06 — About & Contact Pages

Read CLAUDE.md before starting.

---

Build two pages in this prompt: About and Contact.

---

## About Page (`src/pages/About.tsx`)

### Page SEO
- Title: "About Prakash — AI Governance Consultant | Red Prana Enterprises"
- Description: "Meet the founder of Red Prana Enterprises — AI governance practitioner and builder of AI-GOS™."

### Page Structure

#### Hero
- H1: "Built by a Practitioner. Delivered as a Partner."
- Subheadline: "Red Prana Enterprises was founded to bring enterprise-grade AI governance to organisations who need it most — not just a framework document, but an operating system for responsible AI."
- Background: `bg-surface-dark` with the compass ring motif as a background SVG (faint, decorative)

#### Founder Section (two-column)
Left: Professional headshot placeholder — a styled avatar div with initials "P" in a large `rounded-full bg-secondary/20` circle. Include a comment: `{/* TODO: Replace with actual headshot — recommended 400×400px, professional, square crop */}`

Right:
- H2: "Prakash"
- Role badge: "Founder, Red Prana Enterprises"
- Bio: Use the full About Prakash copy from CLAUDE.md
- Expertise badges (pill style, `bg-primary/5 text-primary rounded-full text-xs px-3 py-1`):
  "ISO/IEC 42001" · "NIST AI RMF" · "EU AI Act" · "MAS FEAT/AIRG" · "AI Risk Management" · "Enterprise SaaS" · "AI-GOS™"
- Contact link: "Work with Prakash →" → mailto:prakash@redprana.com

#### What Drives Us Section
Three values, each with a lucide icon, title, and 2-sentence description:

1. Icon: `Lightbulb` — "Practitioner-Led"
   "Every engagement is led by someone who has done the work — not a methodology handed to a junior team."

2. Icon: `Globe` — "Global by Design"
   "We navigate US, Singapore, and Middle East regulatory environments with equal depth — because your AI doesn't stop at borders."

3. Icon: `Building2` — "Enterprise First"
   "Our frameworks, tools, and assessments are designed for regulated industries where governance failures have real consequences."

#### AI-GOS Mention
Short section: "Beyond consulting, Prakash is building AI-GOS™ — an enterprise AI Governance Operating System that turns governance frameworks into operational software."
CTA: "Learn about AI-GOS™ →" → /services#ai-gos

---

## Contact Page (`src/pages/Contact.tsx`)

### Page SEO
- Title: "Contact Red Prana — Book an AI Governance Consultation"
- Description: "Get in touch with Red Prana Enterprises to discuss your AI governance assessment or implementation project."

### Page Structure

#### Hero (compact)
- H1: "Let's Talk AI Governance"
- Subheadline: "Book a 30-minute discovery call to discuss your organisation's AI governance needs."

#### Contact Layout (two-column on desktop)

Left column — Contact Options:

Option 1 — "Book a Consultation"
- Icon: `Calendar` (lucide)
- Title: "Book a Consultation"
- Description: "Send us an email to arrange a 30-minute discovery call. We'll respond within one business day."
- CTA button (primary): "Email to Book" → `href="mailto:prakash@redprana.com?subject=Consultation%20Request&body=Hi%20Prakash%2C%0A%0AI'd%20like%20to%20book%20a%20consultation%20to%20discuss%20AI%20governance%20for%20my%20organisation.%0A%0AOrganisation%3A%20%0ARole%3A%20%0ARegion%3A%20%0AKey%20concern%3A%20"`

Option 2 — "Request a Proposal"
- Icon: `FileText` (lucide)
- Description: "Have a specific project in mind? Email us with your brief."
- CTA: "Send a Brief" → `href="mailto:prakash@redprana.com?subject=Project%20Proposal%20Request"`

Option 3 — "Join the AI-GOS Waitlist"
- Icon: `Cpu` (lucide)
- Description: "Be first to access the AI-GOS™ platform when it launches."
- CTA: "Join Waitlist" → `href="mailto:prakash@redprana.com?subject=AI-GOS%20Waitlist"`

Right column — What to Expect:

- H3: "What Happens Next"
  Numbered steps (real numbered list — content IS sequential):
  1. Email us at prakash@redprana.com
  2. We'll respond within 1 business day with availability
  3. 30-minute discovery call — no obligation
  4. Tailored proposal within 5 business days

- H3: "We Work With"
  Bullet list: CISOs · Chief Risk Officers · Compliance Officers · AI Governance Leads · CTOs · Internal Audit

- H3: "Our Regions"
  "United States · Singapore · UAE · Saudi Arabia · Qatar · Bahrain"

#### Direct Email Display
Large, styled email display:
`prakash@redprana.com`
Poppins 600, `text-3xl text-secondary`, with a copy-to-clipboard button (icon: `Copy` lucide)
and a direct `mailto:` link as a fallback.

---

## After Building Both Pages

- [ ] Run `npm run dev` and navigate to /about and /contact
- [ ] Verify all mailto links open the email client with pre-filled subject and body
- [ ] Check copy-to-clipboard on the Contact page
- [ ] Run `npm run build` — confirm no errors
- [ ] Check responsive layout on mobile viewport (375px)
