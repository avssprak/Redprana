import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useMotionValue, useSpring, useScroll, useMotionValueEvent } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { frameworks } from '@/data/frameworks'
import { useFrameworkCompass } from '@/hooks/useFrameworkCompass'
import type { Framework } from '@/types'
import { CompassRing } from './CompassRing'
import { FrameworkDetail } from './FrameworkDetail'

const MOBILE_COLOR_CLASSES: Record<string, string> = {
  accent: 'bg-accent',
  secondary: 'bg-secondary',
}

const JURISDICTION_FLAGS: Record<string, string> = {
  'United States': '🇺🇸',
  International: '🌐',
  'European Union': '🇪🇺',
  Singapore: '🇸🇬',
}

export interface FrameworkCompassProps {
  compact?: boolean
}

export default function FrameworkCompass({ compact = false }: FrameworkCompassProps) {
  const { activeId, activeFramework, selectFramework, clearSelection } = useFrameworkCompass()
  const navigate = useNavigate()
  const clickRotRef = useRef(0)

  const rotMV = useMotionValue(0)
  const springRot = useSpring(rotMV, { stiffness: 80, damping: 20 })
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    rotMV.set(clickRotRef.current + y * 0.005)
  })

  function handleSelect(framework: Framework) {
    if (compact) {
      navigate(`/frameworks#${framework.id}`)
      return
    }
    selectFramework(framework)
    clickRotRef.current = -framework.angle
    rotMV.set(clickRotRef.current + scrollY.get() * 0.005)
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') clearSelection()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [clearSelection])

  const svgSize = compact ? 400 : 500

  return (
    <div className="relative">
      {/* Mobile: simplified card list */}
      <div className="md:hidden space-y-3">
        {frameworks.map((fw) => {
          const bgClass = MOBILE_COLOR_CLASSES[fw.color] ?? 'bg-accent'
          const flag = JURISDICTION_FLAGS[fw.jurisdiction] ?? '🌐'
          return (
            <button
              key={fw.id}
              onClick={() => handleSelect(fw)}
              className="w-full text-left p-4 rounded-xl border border-secondary/20 bg-white hover:border-secondary/40 hover:shadow-card transition-all group"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-base flex-shrink-0 ${bgClass}`}
                >
                  <span aria-hidden="true">{flag}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-primary">{fw.shortName}</p>
                  <p className="text-xs text-text-muted truncate">{fw.jurisdiction}</p>
                </div>
                <ArrowRight
                  size={15}
                  className="text-text-muted group-hover:text-secondary transition-colors flex-shrink-0"
                />
              </div>
            </button>
          )
        })}
      </div>

      {/* Desktop / tablet: compass + detail panel */}
      <div className="hidden md:flex items-center gap-8 lg:gap-12">
        <div className="flex-shrink-0">
          <CompassRing
            frameworks={frameworks}
            activeId={activeId}
            springRotation={springRot}
            onSelect={handleSelect}
            size={svgSize}
          />
        </div>

        {!compact && (
          <div className="flex-1 self-stretch flex items-center">
            <AnimatePresence mode="wait">
              {activeFramework ? (
                <FrameworkDetail
                  key={activeFramework.id}
                  framework={activeFramework}
                  onClose={clearSelection}
                />
              ) : (
                <CompassPrompt key="prompt" />
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}

function CompassPrompt() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="text-center py-8 px-4"
    >
      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-3">
        <span className="text-secondary text-xl" aria-hidden="true">◎</span>
      </div>
      <p className="text-sm font-medium text-text-muted mb-1">
        Select a framework
      </p>
      <p className="text-xs text-text-muted/70 max-w-[180px] mx-auto leading-relaxed">
        Click any node to explore its key requirements and Red Prana's approach
      </p>
      <Link
        to="/frameworks"
        className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-accent hover:text-accent-light transition-colors"
      >
        View all frameworks
        <ArrowRight size={12} />
      </Link>
    </motion.div>
  )
}
