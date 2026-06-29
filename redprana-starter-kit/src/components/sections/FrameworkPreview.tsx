import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FrameworkCompass from '@/components/FrameworkCompass'

export function FrameworkPreview() {
  return (
    <section className="py-20 lg:py-28 bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs text-secondary uppercase tracking-widest">
              Our Framework Coverage
            </span>
            <h2 className="font-display font-bold text-4xl text-white mt-3 mb-4">
              Every Major AI Governance Standard. One Practice.
            </h2>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              We work across the four leading AI governance frameworks — mapped, cross-referenced, and
              implemented in your operating context.
            </p>
            <Link
              to="/frameworks"
              className="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:rounded"
            >
              Explore All Frameworks →
            </Link>
          </motion.div>

          {/* Right: Compass */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <FrameworkCompass compact />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
