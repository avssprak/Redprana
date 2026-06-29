import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lightbulb, Globe, Building2, ArrowRight, type LucideIcon } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function AboutHero() {
  return (
    <section className="relative bg-surface-dark overflow-hidden -mt-16">
      {/* Faint compass ring motif */}
      <svg
        className="absolute right-0 top-0 h-full w-auto opacity-[0.04] pointer-events-none"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="300" cy="300" r="280" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="1" />
        <circle cx="300" cy="300" r="120" stroke="white" strokeWidth="1" />
        <line x1="300" y1="20" x2="300" y2="580" stroke="white" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="20" y1="300" x2="580" y2="300" stroke="white" strokeWidth="0.5" strokeDasharray="4 8" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 lg:pt-44 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-xs text-secondary uppercase tracking-widest mb-6 block">
            About Red Prana
          </span>
          <h1 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-6">
            Built by a Practitioner. Delivered as a Partner.
          </h1>
          <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
            Red Prana Enterprises was founded to bring enterprise-grade AI governance to
            organisations who need it most — not just a framework document, but an operating
            system for responsible AI.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Founder ──────────────────────────────────────────────────────────────────

const EXPERTISE_BADGES = [
  'ISO/IEC 42001',
  'NIST AI RMF',
  'EU AI Act',
  'MAS FEAT/AIRG',
  'AI Risk Management',
  'Enterprise SaaS',
  'AI-GOS™',
]

function FounderSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Avatar */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full bg-secondary/20 blur-3xl scale-110"
                aria-hidden="true"
              />
              {/* TODO: Replace with actual headshot — recommended 400×400px, professional, square crop */}
              <div
                className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full bg-secondary/20 border-2 border-secondary/30 flex items-center justify-center"
                role="img"
                aria-label="Prakash Achanta — founder photo"
              >
                <span
                  className="font-display font-bold text-8xl text-secondary select-none"
                  aria-hidden="true"
                >
                  P
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div variants={fadeUp}>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-primary">Prakash Achanta</h2>
              <span className="inline-flex items-center rounded-full bg-secondary/10 text-secondary px-4 py-1.5 text-sm font-medium border border-secondary/20">
                Founder, Red Prana Enterprises
              </span>
            </div>

            <div className="space-y-4 text-text-muted leading-relaxed mb-8">
              <p>
                Prakash Achanta is an AI Governance consultant and platform builder with deep expertise
                across regulated industries in the US, Singapore, and the Middle East. He founded
                Red Prana Enterprises to help organisations build AI systems that are not just
                capable — but accountable, auditable, and compliant.
              </p>
              <p>
                He developed the QDT-AIGMM™ AI Governance Maturity Model, has delivered
                assessments for enterprise clients across financial services and scientific
                information sectors, and is building AI-GOS™ — an enterprise AI Governance
                Operating System designed for multi-tenant deployment.
              </p>
              <p>
                Prakash Achanta works at the intersection of AI regulation, enterprise risk, and platform
                engineering.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8" aria-label="Areas of expertise">
              {EXPERTISE_BADGES.map((badge) => (
                <span
                  key={badge}
                  className="bg-primary/5 text-primary rounded-full text-xs px-3 py-1 border border-primary/10"
                >
                  {badge}
                </span>
              ))}
            </div>

            <a
              href="mailto:prakash@redprana.com"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-semibold transition-colors focus:outline-none focus-visible:underline"
            >
              Work with Prakash Achanta
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Values ───────────────────────────────────────────────────────────────────

interface Value {
  icon: LucideIcon
  title: string
  description: string
}

const VALUES: Value[] = [
  {
    icon: Lightbulb,
    title: 'Practitioner-Led',
    description:
      'Every engagement is led by someone who has done the work — not a methodology handed to a junior team.',
  },
  {
    icon: Globe,
    title: 'Global by Design',
    description:
      "We navigate US, Singapore, and Middle East regulatory environments with equal depth — because your AI doesn't stop at borders.",
  },
  {
    icon: Building2,
    title: 'Enterprise First',
    description:
      'Our frameworks, tools, and assessments are designed for regulated industries where governance failures have real consequences.',
  },
]

function WhatDrivesUs() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs text-secondary uppercase tracking-widest">
            Our Philosophy
          </span>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mt-3">
            What Drives Us
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {VALUES.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] hover:border-secondary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-5">
                <Icon size={24} className="text-secondary" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-3">{title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── AI-GOS mention ───────────────────────────────────────────────────────────

function AIGOSMention() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs text-secondary uppercase tracking-widest mb-4 block">
            The Platform
          </span>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-primary mb-6">
            AI-GOS™
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            Beyond consulting, Prakash Achanta is building AI-GOS™ — an enterprise AI Governance
            Operating System that turns governance frameworks into operational software.
          </p>
          <Link
            to="/services#ai-gos"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-semibold transition-colors focus:outline-none focus-visible:underline"
          >
            Learn about AI-GOS™
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Prakash Achanta — AI Governance Consultant | Red Prana Enterprises</title>
        <meta
          name="description"
          content="Meet the founder of Red Prana Enterprises — AI governance practitioner and builder of AI-GOS™."
        />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <AboutHero />
        <FounderSection />
        <WhatDrivesUs />
        <AIGOSMention />
      </motion.div>
    </>
  )
}
