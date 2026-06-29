import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  BarChart3,
  Layers,
  ShieldAlert,
  Scale,
  Cpu,
  Presentation,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react'
import { services } from '@/data/services'

const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  Layers,
  ShieldAlert,
  Scale,
  Cpu,
  Presentation,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-secondary uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="font-display font-bold text-4xl text-primary mt-3 mb-4">
            End-to-End AI Governance Services
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            From initial maturity assessment to full framework implementation — built for regulated industries.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? BarChart3
            const isComingSoon = service.stage === 'coming-soon'
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow p-6 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon size={28} className="text-secondary" aria-hidden="true" />
                  {isComingSoon && (
                    <span className="bg-accent-warm/10 text-accent-warm rounded-full px-3 py-1 text-xs font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="font-display font-semibold text-lg text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-text-muted line-clamp-2 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5 mb-5" aria-label={`Key features of ${service.title}`}>
                  {service.features.slice(0, 2).map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs text-text-muted">
                      <CheckCircle2
                        size={14}
                        className="text-success mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link
                    to={`/services#${service.id}`}
                    className="text-sm font-semibold text-accent hover:text-accent-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
