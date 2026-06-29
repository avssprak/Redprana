import { motion } from 'framer-motion'

const FEATURES = [
  'AI Inventory',
  'Risk Register',
  'Control Library',
  'Evidence Management',
  'Compliance Dashboard',
]

export function AIGOSTeaser() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary to-secondary overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid opacity-5 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-accent-warm/20 text-accent-warm rounded-full px-4 py-1.5 text-xs font-semibold font-mono uppercase tracking-wider mb-6">
            Coming Soon
          </span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-4">
            Introducing AI-GOS™
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            The AI Governance Operating System — purpose-built for enterprise teams managing AI risk,
            compliance, and audit readiness at scale.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10" role="list" aria-label="Platform features">
            {FEATURES.map((feature) => (
              <span
                key={feature}
                role="listitem"
                className="bg-white/10 text-white/80 rounded-full px-4 py-2 text-sm font-medium border border-white/10"
              >
                {feature}
              </span>
            ))}
          </div>

          <a
            href="mailto:prakash@redprana.com?subject=AI-GOS%20Waitlist"
            className="inline-flex items-center justify-center rounded-full bg-accent-warm hover:bg-accent-warm/90 px-8 py-3.5 text-sm font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Join the Waitlist
          </a>
        </motion.div>
      </div>
    </section>
  )
}
