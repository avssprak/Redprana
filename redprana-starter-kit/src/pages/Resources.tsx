import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { InteractiveChecklist } from '@/components/InteractiveChecklist'
import { freeResources } from '@/data/resources'
import { getChecklistById } from '@/data/checklists'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function ResourcesHero() {
  return (
    <section className="relative bg-primary overflow-hidden -mt-16">
      <div className="absolute inset-0 bg-hero-grid pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-36 lg:pb-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/50 mb-6">
          <Link
            to="/"
            className="hover:text-white/80 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Home
          </Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span className="text-white/80" aria-current="page">Resources</span>
        </nav>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Free AI Governance Resources
          </h1>
          <p className="text-lg text-text-muted max-w-2xl leading-relaxed">
            Interactive self-assessment tools to gauge where your organisation stands against
            ISO 42001 and leading AI governance practices — with an instant score and a
            downloadable PDF report.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Inline interactive tools ─────────────────────────────────────────────────

function ChecklistTools() {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
            Free Interactive Tools
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            No sign-up required to see your score. Enter your email only if you'd like the
            detailed PDF report.
          </p>
        </motion.div>

        <motion.div
          className="space-y-10"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {freeResources.map((resource) => {
            const checklist = getChecklistById(resource.checklistId)
            if (!checklist) return null
            return (
              <motion.div key={checklist.id} variants={fadeUp}>
                <InteractiveChecklist checklist={checklist} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

// ─── Bottom CTA ────────────────────────────────────────────────────────────────

function ResourcesCTA() {
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
            Ready to move from checklist to roadmap?
          </h2>
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            A checklist tells you where the gaps are. A discovery call tells you how to close
            them — with a plan tailored to your organisation.
          </p>
          <a
            href="mailto:prakash@redprana.com?subject=Discovery%20Call%20Request"
            className="rp-btn-neon"
          >
            Book Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Resources() {
  return (
    <>
      <Helmet>
        <title>Free AI Governance Resources — Red Prana Enterprises</title>
        <meta
          name="description"
          content="Free interactive ISO 42001 and AI governance readiness checklists — get an instant maturity score and downloadable PDF report."
        />
      </Helmet>

      <ResourcesHero />
      <ChecklistTools />
      <ResourcesCTA />
    </>
  )
}
