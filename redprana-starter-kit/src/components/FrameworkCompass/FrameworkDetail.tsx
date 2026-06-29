import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, ArrowRight } from 'lucide-react'
import type { Framework } from '@/types'
import { JURISDICTION_FLAGS } from '@/data/frameworks'

interface FrameworkDetailProps {
  framework: Framework
  onClose: () => void
}

const BORDER_COLORS: Record<string, string> = {
  accent: 'border-accent',
  secondary: 'border-secondary',
}

const variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, x: 24, transition: { duration: 0.2 } },
}

export function FrameworkDetail({ framework, onClose }: FrameworkDetailProps) {
  const flag = JURISDICTION_FLAGS[framework.jurisdiction] ?? '🌐'
  const borderColor = BORDER_COLORS[framework.color] ?? 'border-accent'

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${framework.name} details`}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative bg-white rounded-2xl shadow-card-hover border border-secondary/10 p-6 w-full max-w-sm"
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close framework details"
        className="absolute top-4 right-4 p-1.5 rounded-lg text-text-muted hover:text-text hover:bg-surface transition-colors"
      >
        <X size={17} />
      </button>

      {/* Header */}
      <div className="mb-4 pr-8">
        <p className="font-mono text-xs text-text-muted mb-1 tracking-wide">
          {flag} {framework.jurisdiction}
        </p>
        <h3 className="font-display font-semibold text-base text-primary leading-snug">
          {framework.name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-text leading-relaxed mb-4">
        {framework.description}
      </p>

      {/* Key requirements */}
      <div className="mb-4">
        <p className="text-[10px] font-semibold text-secondary uppercase tracking-widest mb-2">
          Key Requirements
        </p>
        <ul className="space-y-1.5">
          {framework.keyRequirements.map((req, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-text leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
              {req}
            </li>
          ))}
        </ul>
      </div>

      {/* Red Prana approach */}
      <div className={`mb-5 p-3 bg-surface rounded-lg border-l-2 ${borderColor}`}>
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1.5">
          Red Prana's Approach
        </p>
        <p className="text-xs text-text leading-relaxed">
          {framework.redPranaApproach}
        </p>
      </div>

      {/* CTA */}
      <Link
        to={`/frameworks#${framework.id}`}
        onClick={onClose}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-light transition-colors"
      >
        Learn more on Frameworks page
        <ArrowRight size={13} />
      </Link>
    </motion.div>
  )
}
