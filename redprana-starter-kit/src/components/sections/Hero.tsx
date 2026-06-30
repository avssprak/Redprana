import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FrameworkCompass from '@/components/FrameworkCompass'

export function Hero() {
  return (
    <section className="relative bg-surface-dark bg-hero-pattern flex items-center overflow-hidden -mt-16">
      <div className="absolute inset-0 bg-hero-grid pointer-events-none" aria-hidden="true" />
      <div className="rp-aurora" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="rp-eyebrow mb-6">
              AI Governance · ISO 42001 · NIST AI RMF · MAS FEAT
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              AI Governance That Keeps Enterprise AI{' '}
              <span className="rp-text-gradient">Accountable</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-8 max-w-lg">
              Red Prana helps CISOs, Chief Risk Officers, and AI Governance Leads implement ISO 42001,
              NIST AI RMF, and MAS AI Governance frameworks — with practical assessments, control
              libraries, and the AI-GOS™ platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="mailto:prakash@redprana.com?subject=Consultation%20Request"
                className="rp-btn-neon"
              >
                Book a Consultation
              </a>
              <Link
                to="/frameworks"
                className="rp-btn-ghost"
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
            <div
              className="absolute w-[360px] h-[360px] rounded-full border border-secondary/10"
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
