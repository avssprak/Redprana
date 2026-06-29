import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Calendar, FileText, Cpu, Copy, Check, type LucideIcon } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function ContactHero() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-secondary uppercase tracking-widest mb-6 block">
            Get in Touch
          </span>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Let's Talk AI Governance
          </h1>
          <p className="text-lg text-text-muted max-w-xl leading-relaxed">
            Book a 30-minute discovery call to discuss your organisation's AI governance needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Contact options ──────────────────────────────────────────────────────────

interface ContactOption {
  icon: LucideIcon
  title: string
  description: string
  ctaLabel: string
  href: string
  primary: boolean
}

const CONTACT_OPTIONS: ContactOption[] = [
  {
    icon: Calendar,
    title: 'Book a Consultation',
    description:
      "Send us an email to arrange a 30-minute discovery call. We'll respond within one business day.",
    ctaLabel: 'Email to Book',
    href: "mailto:prakash@redprana.com?subject=Consultation%20Request&body=Hi%20Prakash%2C%0A%0AI'd%20like%20to%20book%20a%20consultation%20to%20discuss%20AI%20governance%20for%20my%20organisation.%0A%0AOrganisation%3A%20%0ARole%3A%20%0ARegion%3A%20%0AKey%20concern%3A%20",
    primary: true,
  },
  {
    icon: FileText,
    title: 'Request a Proposal',
    description: 'Have a specific project in mind? Email us with your brief.',
    ctaLabel: 'Send a Brief',
    href: 'mailto:prakash@redprana.com?subject=Project%20Proposal%20Request',
    primary: false,
  },
  {
    icon: Cpu,
    title: 'Join the AI-GOS Waitlist',
    description: 'Be first to access the AI-GOS™ platform when it launches.',
    ctaLabel: 'Join Waitlist',
    href: 'mailto:prakash@redprana.com?subject=AI-GOS%20Waitlist',
    primary: false,
  },
]

const NEXT_STEPS = [
  'Email us at prakash@redprana.com',
  "We'll respond within 1 business day with availability",
  '30-minute discovery call — no obligation',
  'Tailored proposal within 5 business days',
]

const ROLES = [
  'CISOs',
  'Chief Risk Officers',
  'Compliance Officers',
  'AI Governance Leads',
  'CTOs',
  'Internal Audit',
]

// ─── Email display with copy-to-clipboard ────────────────────────────────────

const EMAIL = 'prakash@redprana.com'

function EmailDisplay() {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(EMAIL)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      .catch(() => {
        // Silently fail — the mailto link is the fallback
      })
  }

  return (
    <section className="py-16 bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs text-secondary uppercase tracking-widest mb-4">
            Direct Contact
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="font-display font-semibold text-3xl text-secondary hover:text-secondary-light transition-colors focus:outline-none focus-visible:underline"
            >
              {EMAIL}
            </a>
            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? 'Email address copied' : 'Copy email address'}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {copied ? (
                <>
                  <Check size={14} aria-hidden="true" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={14} aria-hidden="true" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Red Prana — Book an AI Governance Consultation</title>
        <meta
          name="description"
          content="Get in touch with Red Prana Enterprises to discuss your AI governance assessment or implementation project."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <ContactHero />

        <section className="py-20 lg:py-28 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

              {/* Left: Contact options */}
              <motion.div
                className="space-y-6"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                <motion.div variants={fadeUp}>
                  <h2 className="font-display font-bold text-2xl text-primary mb-2">
                    Get in Touch
                  </h2>
                  <p className="text-text-muted">Choose the option that fits your needs.</p>
                </motion.div>

                {CONTACT_OPTIONS.map(({ icon: Icon, title, description, ctaLabel, href, primary }) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="rounded-2xl border border-text-muted/10 bg-white shadow-card p-6 hover:shadow-card-hover transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={20} className="text-secondary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display font-semibold text-lg text-primary mb-1">
                          {title}
                        </h3>
                        <p className="text-text-muted text-sm leading-relaxed mb-4">
                          {description}
                        </p>
                        <a
                          href={href}
                          className={
                            primary
                              ? 'inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-light px-5 py-2.5 text-sm font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'
                              : 'inline-flex items-center justify-center rounded-lg border border-secondary/40 text-secondary hover:bg-secondary/5 px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary'
                          }
                        >
                          {ctaLabel}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right: What to expect */}
              <motion.div
                className="space-y-10"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                <motion.div variants={fadeUp}>
                  <h3 className="font-display font-semibold text-xl text-primary mb-5">
                    What Happens Next
                  </h3>
                  <ol className="space-y-4" aria-label="Steps after contacting us">
                    {NEXT_STEPS.map((step, i) => (
                      <li key={step} className="flex items-start gap-4">
                        <span
                          className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 text-accent text-xs font-bold font-mono flex items-center justify-center mt-0.5"
                          aria-hidden="true"
                        >
                          {i + 1}
                        </span>
                        <span className="text-text leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h3 className="font-display font-semibold text-xl text-primary mb-4">
                    We Work With
                  </h3>
                  <ul className="space-y-2.5" aria-label="Roles we work with">
                    {ROLES.map((role) => (
                      <li key={role} className="flex items-center gap-3 text-text-muted">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0"
                          aria-hidden="true"
                        />
                        {role}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h3 className="font-display font-semibold text-xl text-primary mb-3">
                    Our Regions
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    United States · Singapore · UAE · Saudi Arabia · Qatar · Bahrain
                  </p>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        <EmailDisplay />
      </motion.div>
    </>
  )
}
