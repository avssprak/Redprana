import { motion, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import type { Framework } from '@/types'

const COLOR_MAP: Record<string, string> = {
  accent: '#2563EB',
  secondary: '#0E7490',
}

const FLAG_MAP: Record<string, string> = {
  'United States': '🇺🇸',
  International: '🌐',
  'European Union': '🇪🇺',
  Singapore: '🇸🇬',
}

const RING_RADIUS = 175

interface CompassNodeProps {
  framework: Framework
  springRotation: MotionValue<number>
  isActive: boolean
  onSelect: (framework: Framework) => void
  entryDelay: number
}

export function CompassNode({
  framework,
  springRotation,
  isActive,
  onSelect,
  entryDelay,
}: CompassNodeProps) {
  const color = COLOR_MAP[framework.color] ?? '#2563EB'
  const flag = FLAG_MAP[framework.jurisdiction] ?? '🌐'

  const nodeX = useTransform(
    springRotation,
    (r) => 250 + RING_RADIUS * Math.sin(((framework.angle + r) * Math.PI) / 180)
  )
  const nodeY = useTransform(
    springRotation,
    (r) => 250 - RING_RADIUS * Math.cos(((framework.angle + r) * Math.PI) / 180)
  )

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onSelect(framework)
    }
  }

  return (
    // Outer: position driven by spring-animated rotation
    <motion.g style={{ x: nodeX, y: nodeY }}>
      {/* Middle: staggered entrance */}
      <motion.g
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: entryDelay, duration: 0.5, ease: 'easeOut' }}
      >
        {/* Inner: hover interaction */}
        <motion.g
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ cursor: 'pointer', transformOrigin: 'center', transformBox: 'fill-box', outline: 'none' }}
          role="button"
          tabIndex={0}
          aria-label={`View ${framework.name} framework details`}
          aria-pressed={isActive}
          onClick={() => onSelect(framework)}
          onKeyDown={handleKeyDown}
        >
          {/* Active glow ring */}
          {isActive && (
            <motion.circle
              cx={0}
              cy={0}
              r={52}
              fill="none"
              stroke={color}
              strokeWidth={1.5}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.55 }}
              style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
            />
          )}
          {/* Node circle */}
          <circle
            cx={0}
            cy={0}
            r={44}
            fill={color}
            fillOpacity={isActive ? 1 : 0.88}
          />
          {isActive && (
            <circle
              cx={0}
              cy={0}
              r={44}
              fill="none"
              stroke="white"
              strokeWidth={2}
              strokeOpacity={0.85}
            />
          )}
          {/* Flag emoji */}
          <text
            x={0}
            y={-7}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={18}
            aria-hidden="true"
            style={{ userSelect: 'none' }}
          >
            {flag}
          </text>
          {/* Short name — split into two lines if needed */}
          <text
            x={0}
            y={16}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={7.5}
            fontWeight="700"
            fill="white"
            fontFamily="Inter, sans-serif"
            letterSpacing="0.5"
            aria-hidden="true"
            style={{ userSelect: 'none' }}
          >
            {framework.shortName}
          </text>
        </motion.g>
      </motion.g>
    </motion.g>
  )
}
