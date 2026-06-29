import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FrameworkCompass from '@/components/FrameworkCompass'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-surface-dark bg-hero-pattern flex items-center overflow-hidden -mt-16">
      <div className="absolute inset-0 bg-hero-grid pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 lg:pt-44 lg:pb-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-mono text-xs text-secondary uppercase tracking-widest mb-6">
              AI Governance · ISO 42001 · NIST AI RMF · MAS FEAT
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              AI Governance That Keeps Enterprise AI{' '}
              <span className="text-gradient-teal">Accountable</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-8 max-w-lg">
              Red Prana helps CISOs, Chief Risk Officers, and AI Governance Leads implement ISO 42001,
              NIST AI RMF, and MAS AI Governance frameworks — with practical assessments, control
              libraries, and the AI-GOS™ platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="mailto:prakash@redprana.com?subject=Consultation%20Request"
                className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-light px-8 py-3.5 text-sm font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark"
              >
                Book a Consultation
              </a>
              <Link
                to="/frameworks"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 hover:border-secondary/60 px-8 py-3.5 text-sm font-semibold text-white/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Explore Frameworks →
              </Link>
            </div>
            <p className="font-mono text-xs text-text-muted/60">
              Trusted by enterprise teams across US · Singapore · Middle East
            </p>
          </motion.div>

          {/* Right: Compass — hidden on mobile to avoid card-list clutter in hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex items-center justify-center relative"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 bg-gradient-radial from-secondary/20 to-transparent"
              aria-hidden="true"
            />
            <div className="relative">
              <FrameworkCompass compact />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
