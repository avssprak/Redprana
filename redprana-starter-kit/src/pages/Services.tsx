import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Check,
  ChevronRight,
  Clock,
  BarChart3,
  Layers,
  ShieldAlert,
  Scale,
  Cpu,
  Presentation,
  type LucideIcon,
} from 'lucide-react'
import { services } from '@/data/services'
import type { Service } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  Layers,
  ShieldAlert,
  Scale,
  Cpu,
  Presentation,
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// ─── Compact hero ────────────────────────────────────────────────────────────

function ServicesHero() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/50 mb-6">
          <Link
            to="/"
            className="hover:text-white/80 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Home
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-white/80" aria-current="page">Services</span>
        </nav>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Enterprise AI Governance Services
          </h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Practical, framework-aligned AI governance services for regulated industries —
            from initial assessment to full implementation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Single service row (alternating layout) ─────────────────────────────────

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] ?? BarChart3
  const isReversed = index % 2 !== 0
  const isComingSoon = service.stage === 'coming-soon'

  const ctaHref = isComingSoon
    ? 'mailto:prakash@redprana.com?subject=AI-GOS%20Waitlist'
    : `mailto:prakash@redprana.com?subject=${encodeURIComponent(service.title)}`

  return (
    <motion.div
      id={service.id}
      className="scroll-mt-24"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <div
        className={`flex flex-col gap-10 items-center md:flex-row md:gap-16 ${
          isReversed ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* Icon panel */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-2xl bg-secondary/20 blur-2xl scale-125"
              aria-hidden="true"
            />
            <div className="relative w-40 h-40 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
              <Icon size={64} className="text-secondary" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h2 className="font-display font-semibold text-2xl lg:text-3xl text-primary leading-snug">
              {service.title}
            </h2>
            {isComingSoon && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-warm/10 text-accent-warm px-3 py-1 text-xs font-medium">
                <Clock size={12} aria-hidden="true" />
                Coming Soon
              </span>
            )}
          </div>

          <p className="text-text-muted text-lg leading-relaxed mb-6">
            {service.description}
          </p>

          <ul
            className="space-y-3 mb-8"
            aria-label={`Features of ${service.title}`}
          >
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-text">
                <Check
                  size={16}
                  className="text-success mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>

          {isComingSoon ? (
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center rounded-full bg-accent-warm hover:bg-accent-warm/90 px-6 py-3 text-sm font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-warm focus-visible:ring-offset-2"
              >
                Join the Waitlist
              </a>
              <span className="text-sm text-text-muted">
                Early access registration open
              </span>
            </div>
          ) : (
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-light px-6 py-3 text-sm font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {service.cta}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Regional coverage ────────────────────────────────────────────────────────

const REGIONS = [
  {
    flag: '🇺🇸',
    name: 'United States',
    items: [
      'NIST AI Risk Management Framework (AI RMF)',
      'Executive Order on AI (EO 14110)',
      'NIST AI 100-1 Trustworthy AI',
      'Sector-specific AI requirements (FS, Healthcare, Defense)',
    ],
  },
  {
    flag: '🇸🇬',
    name: 'Singapore',
    items: [
      'MAS FEAT Principles',
      'MAS Model AI Governance Framework (AIRG)',
      'PDPC AI Governance Framework',
      'MAS Technology Risk Management (TRM) Guidelines',
    ],
  },
  {
    flag: '🇦🇪',
    name: 'Middle East',
    items: [
      'UAE National AI Strategy 2031',
      'Saudi NDMO AI Governance Framework',
      'DIFC and ADGM data and AI regulations',
      'Qatar National Cyber Security Agency (NCSA)',
    ],
  },
]

function RegionalCoverage() {
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
          <span className="font-mono text-xs text-secondary uppercase tracking-widest">
            Where We Operate
          </span>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mt-3 mb-4">
            Regional Regulatory Coverage
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Deep expertise across the regulatory frameworks that matter most in your jurisdiction.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {REGIONS.map((region) => (
            <motion.div
              key={region.name}
              variants={fadeUp}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-secondary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl" role="img" aria-label={`${region.name} flag`}>
                  {region.flag}
                </span>
                <h3 className="font-display font-semibold text-lg text-white">
                  {region.name}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {region.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className="text-secondary mt-0.5 flex-shrink-0 font-bold" aria-hidden="true">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Bottom discovery CTA ─────────────────────────────────────────────────────

function DiscoveryCTA() {
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
            Not sure where to start?
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            Book a free 30-minute discovery call. We'll identify the right entry point for
            your organisation's AI governance journey.
          </p>
          <a
            href="mailto:prakash@redprana.com?subject=Discovery%20Call%20Request"
            className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-light px-8 py-3.5 text-sm font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Book Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <>
      <Helmet>
        <title>AI Governance Services — Red Prana Enterprises</title>
        <meta
          name="description"
          content="Maturity assessments, framework implementation, AI risk registers, and regulatory compliance for US, Singapore, and Middle East enterprises."
        />
      </Helmet>

      <ServicesHero />

      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={service.id}>
              <ServiceRow service={service} index={index} />
              {index < services.length - 1 && (
                <hr className="border-text-muted/10 my-16" />
              )}
            </div>
          ))}
        </div>
      </section>

      <RegionalCoverage />
      <DiscoveryCTA />
    </>
  )
}
