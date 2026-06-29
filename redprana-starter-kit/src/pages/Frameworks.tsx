import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowRight, Check } from 'lucide-react'
import { frameworks, JURISDICTION_FLAGS } from '@/data/frameworks'
import type { Framework } from '@/types'
import FrameworkCompass from '@/components/FrameworkCompass'

const FRAMEWORK_OVERVIEWS: Record<string, string> = {
  nist: 'The NIST AI Risk Management Framework (AI RMF 1.0), published by the National Institute of Standards and Technology in January 2023, provides a structured, voluntary approach to managing AI risks across the full AI lifecycle — from design and development through deployment and decommissioning. Organised around four core functions — GOVERN, MAP, MEASURE, and MANAGE — it is designed to be adaptable to any organisation, sector, or AI system type. It is rapidly becoming the de facto US federal standard, referenced in government procurement requirements, sector-specific regulations, and the White House Executive Order on AI. For US enterprises and federal contractors, demonstrating NIST AI RMF alignment is an increasingly baseline supervisory expectation.',
  iso42001:
    'ISO/IEC 42001:2023 is the first internationally certifiable standard for artificial intelligence management systems, published by ISO in December 2023. It provides a comprehensive framework for establishing, implementing, maintaining, and continually improving an AI Management System (AIMS), covering governance, risk management, accountability, impact assessment, and performance evaluation. Its structure closely mirrors ISO 27001, making it accessible to organisations with mature information security management programmes. Unlike voluntary guidance, ISO 42001 supports independent third-party certification — providing a credible, auditable signal to regulators, customers, and partners that AI governance is formally managed and continuously improved.',
  euaiact:
    "The EU Artificial Intelligence Act is the world's first comprehensive binding AI regulation, adopted by the European Parliament in March 2024 and entering into force in August 2024. It applies a risk-based classification across four tiers — Unacceptable Risk (prohibited), High Risk (strict mandatory requirements), Limited Risk (transparency obligations), and Minimal Risk. The Act carries global reach: any organisation deploying AI systems that interact with EU-based users or operate in EU markets must comply, regardless of where it is headquartered. High-risk AI applications — including credit scoring, recruitment, biometric identification, and critical infrastructure management — face demanding requirements including conformity assessments, registration in the EU AI database, and ongoing post-market monitoring obligations.",
  mas: "The Monetary Authority of Singapore's FEAT Principles (Fairness, Ethics, Accountability, Transparency) and Model AI Governance Framework (AIRG) establish clear supervisory expectations for financial institutions deploying AI in Singapore. Published in 2018 and updated with detailed AIRG implementation guidance in 2020, these frameworks represent strong regulatory expectation from Singapore's central bank and financial regulator, carrying significant supervisory weight even without statutory mandate. The AIRG covers decision-making accountability, internal governance structures, human oversight mechanisms, and operational risk management. For financial institutions operating in Singapore, demonstrating MAS FEAT alignment is a core component of meeting Technology Risk Management (TRM) guidelines and maintaining regulatory confidence.",
}

const COMPARISON_ROWS = [
  {
    criterion: 'Type',
    nist: 'Voluntary Framework',
    iso: 'Certifiable Standard',
    eu: 'Mandatory Regulation',
    mas: 'Regulatory Expectation',
  },
  {
    criterion: 'Jurisdiction',
    nist: 'United States',
    iso: 'International',
    eu: 'EU (global impact)',
    mas: 'Singapore FIs',
  },
  {
    criterion: 'Certification',
    nist: 'No',
    iso: 'Yes (third-party)',
    eu: 'Conformity Assessment',
    mas: 'No',
  },
  {
    criterion: 'Risk-based',
    nist: 'Yes',
    iso: 'Yes',
    eu: 'Yes',
    mas: 'Yes',
  },
  {
    criterion: 'Primary Audience',
    nist: 'All sectors',
    iso: 'All sectors',
    eu: 'EU market participants',
    mas: 'Financial institutions',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

function parseRequirement(req: string): { label?: string; text: string } {
  const colonIdx = req.indexOf(': ')
  if (colonIdx > 0 && colonIdx < 20) {
    return { label: req.slice(0, colonIdx), text: req.slice(colonIdx + 2) }
  }
  return { text: req }
}

// ─── Compact hero ─────────────────────────────────────────────────────────────

function FrameworksHero() {
  return (
    <section className="relative bg-primary overflow-hidden -mt-16">
      <div className="absolute inset-0 bg-hero-grid pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-36 lg:pb-20">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-white/50 mb-6"
        >
          <Link
            to="/"
            className="hover:text-white/80 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Home
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-white/80" aria-current="page">
            Frameworks
          </span>
        </nav>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="rp-eyebrow">
            Framework Coverage
          </span>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mt-3 mb-4 leading-tight">
            AI Governance Frameworks —<br className="hidden sm:block" /> Mapped and Ready to
            Implement
          </h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Four leading AI governance standards. One integrated practice.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Compass section ──────────────────────────────────────────────────────────

function CompassSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark" aria-label="Framework Compass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="rp-eyebrow">
            Interactive Compass
          </span>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mt-3">
            Four Frameworks. One Practice.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FrameworkCompass />
        </motion.div>

        <motion.p
          className="text-center text-sm text-text-muted mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Click any framework to explore its requirements and our implementation approach.
        </motion.p>
      </div>
    </section>
  )
}

// ─── Individual framework section ─────────────────────────────────────────────

function FrameworkSection({ framework }: { framework: Framework }) {
  const flag = JURISDICTION_FLAGS[framework.jurisdiction] ?? '🌐'
  const overview = FRAMEWORK_OVERVIEWS[framework.id] ?? framework.description
  const mailSubject = encodeURIComponent(`${framework.shortName} Implementation — Red Prana`)

  return (
    <motion.section
      id={framework.id}
      className="scroll-mt-24 py-16 lg:py-20"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <div className="border-l-2 border-secondary/30 pl-5 mb-8">
        <span className="font-mono text-xs text-secondary uppercase tracking-widest">
          {framework.shortName}
        </span>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: name + jurisdiction + overview */}
        <div>
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-primary leading-snug mb-4">
            {framework.name}
          </h2>

          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary text-sm font-medium px-3 py-1.5 rounded-full mb-6">
            <span role="img" aria-label={`${framework.jurisdiction} flag`}>
              {flag}
            </span>
            <span>Jurisdiction: {framework.jurisdiction}</span>
          </div>

          <p className="text-text-muted leading-relaxed">{overview}</p>
        </div>

        {/* Right: key requirements + approach */}
        <div>
          <h3 className="font-display font-semibold text-lg text-primary mb-5">
            Key Requirements
          </h3>

          <motion.ul
            className="space-y-4 mb-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            aria-label={`Key requirements for ${framework.name}`}
          >
            {framework.keyRequirements.map((req) => {
              const { label, text } = parseRequirement(req)
              return (
                <motion.li
                  key={req}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-sm"
                >
                  <Check
                    size={15}
                    className="text-secondary mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-text leading-relaxed">
                    {label ? (
                      <>
                        <strong className="font-semibold text-primary">{label}:</strong>{' '}
                        {text}
                      </>
                    ) : (
                      text
                    )}
                  </span>
                </motion.li>
              )
            })}
          </motion.ul>

          {/* Red Prana approach callout */}
          <div className="bg-secondary/5 border border-secondary/15 rounded-2xl p-6">
            <p className="font-mono text-xs text-secondary uppercase tracking-widest mb-3">
              Red Prana Approach
            </p>
            <p className="text-sm text-text leading-relaxed mb-4">
              {framework.redPranaApproach}
            </p>
            <a
              href={`mailto:prakash@redprana.com?subject=${mailSubject}`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 rounded"
            >
              Discuss {framework.shortName} Implementation
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

// ─── Comparison table ─────────────────────────────────────────────────────────

function ComparisonTable() {
  const headers = [
    { id: 'nist', label: 'NIST AI RMF' },
    { id: 'iso42001', label: 'ISO 42001' },
    { id: 'euaiact', label: 'EU AI Act' },
    { id: 'mas', label: 'MAS FEAT' },
  ]

  return (
    <section className="py-20 lg:py-28 bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="rp-eyebrow">
            Framework Comparison
          </span>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mt-3 mb-4">
            At a Glance
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Understanding how these frameworks differ helps you prioritise the right starting
            point — and where overlaps let you maximise implementation effort.
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto rounded-2xl border border-white/10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <table
            className="w-full min-w-[600px] text-sm border-collapse"
            aria-label="AI governance framework comparison"
          >
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th
                  scope="col"
                  className="text-left py-4 px-6 font-mono text-xs text-secondary uppercase tracking-wider font-medium w-44"
                >
                  Criterion
                </th>
                {headers.map((fw) => (
                  <th
                    key={fw.id}
                    scope="col"
                    className="text-left py-4 px-6 font-display font-semibold text-white"
                  >
                    <a
                      href={`#${fw.id}`}
                      className="hover:text-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    >
                      {fw.label}
                    </a>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr
                  key={row.criterion}
                  className={`border-b border-white/5 ${
                    i % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.02]'
                  }`}
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-text-muted text-left"
                  >
                    {row.criterion}
                  </th>
                  <td className="py-4 px-6 text-text-inverse/80">{row.nist}</td>
                  <td className="py-4 px-6 text-text-inverse/80">{row.iso}</td>
                  <td className="py-4 px-6 text-text-inverse/80">{row.eu}</td>
                  <td className="py-4 px-6 text-text-inverse/80">{row.mas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Bottom CTA ───────────────────────────────────────────────────────────────

function FrameworkSelectionCTA() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-primary mb-4">
            Need help choosing the right framework for your organisation?
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            In a 90-minute Framework Selection Workshop, we map your regulatory obligations,
            existing controls, and strategic objectives to identify the best starting point —
            and where framework overlaps let you maximise your implementation investment.
          </p>
          <a
            href="mailto:prakash@redprana.com?subject=Framework%20Selection%20Workshop"
            className="rp-btn-neon"
          >
            Book a Framework Selection Workshop
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Frameworks() {
  return (
    <>
      <Helmet>
        <title>
          AI Governance Frameworks — ISO 42001, NIST AI RMF, MAS FEAT | Red Prana
        </title>
        <meta
          name="description"
          content="Interactive guide to the leading AI governance frameworks — ISO 42001, NIST AI RMF, EU AI Act, and MAS FEAT/AIRG — mapped, compared, and ready to implement."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <FrameworksHero />
        <CompassSection />

        <section className="bg-surface" aria-label="Framework details">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {frameworks.map((framework, index) => (
              <div key={framework.id}>
                <FrameworkSection framework={framework} />
                {index < frameworks.length - 1 && (
                  <hr className="border-text-muted/10" />
                )}
              </div>
            ))}
          </div>
        </section>

        <ComparisonTable />
        <FrameworkSelectionCTA />
      </motion.div>
    </>
  )
}
