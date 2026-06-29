import { motion } from 'framer-motion'
import type { MotionValue } from 'framer-motion'
import type { Framework, FrameworkId } from '@/types'
import { CompassNode } from './CompassNode'

const CX = 250
const CY = 250
const RING_R = 175
const NODE_DELAYS = [0, 0.1, 0.2, 0.3]

interface CompassRingProps {
  frameworks: Framework[]
  activeId: FrameworkId | null
  springRotation: MotionValue<number>
  onSelect: (framework: Framework) => void
  size: number
}

export function CompassRing({
  frameworks,
  activeId,
  springRotation,
  onSelect,
  size,
}: CompassRingProps) {
  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      role="img"
      aria-label="AI Governance Framework Compass — interactive radial diagram"
      className="overflow-visible"
    >
      <defs>
        <filter id="rp-ring-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="rp-flame-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="rp-compass-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0E7490" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#0E7490" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background fill */}
      <circle cx={CX} cy={CY} r={RING_R} fill="url(#rp-compass-bg)" />

      {/* Static ring */}
      <circle
        cx={CX}
        cy={CY}
        r={RING_R}
        fill="none"
        stroke="#0E7490"
        strokeWidth={1.5}
        strokeOpacity={0.55}
        filter="url(#rp-ring-glow)"
      />

      {/* Cardinal tick marks (static) */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180
        const isCardinal = angle % 90 === 0
        const inner = isCardinal ? RING_R - 10 : RING_R - 5
        const outer = isCardinal ? RING_R + 10 : RING_R + 5
        return (
          <line
            key={angle}
            x1={CX + inner * Math.sin(rad)}
            y1={CY - inner * Math.cos(rad)}
            x2={CX + outer * Math.sin(rad)}
            y2={CY - outer * Math.cos(rad)}
            stroke="#0E7490"
            strokeWidth={isCardinal ? 1.5 : 0.75}
            strokeOpacity={isCardinal ? 0.5 : 0.25}
          />
        )
      })}

      {/* Rotating connecting lines */}
      <motion.g
        style={{
          rotate: springRotation,
          transformOrigin: 'center',
          transformBox: 'fill-box',
        }}
      >
        {frameworks.map((fw) => {
          const rad = (fw.angle * Math.PI) / 180
          const ex = CX + RING_R * Math.sin(rad)
          const ey = CY - RING_R * Math.cos(rad)
          return (
            <line
              key={fw.id}
              x1={CX}
              y1={CY}
              x2={ex}
              y2={ey}
              stroke="#0E7490"
              strokeWidth={1}
              strokeOpacity={0.22}
              strokeDasharray="5 5"
            />
          )
        })}
      </motion.g>

      {/* Nodes — each derives its own position from springRotation */}
      {frameworks.map((fw, i) => (
        <CompassNode
          key={fw.id}
          framework={fw}
          springRotation={springRotation}
          isActive={activeId === fw.id}
          onSelect={onSelect}
          entryDelay={NODE_DELAYS[i]}
        />
      ))}

      {/* Center flame — static, always on top */}
      <CenterFlame />
    </svg>
  )
}

function CenterFlame() {
  return (
    <g aria-hidden="true">
      {/* Pulsing outer ring */}
      <motion.circle
        cx={CX}
        cy={CY}
        r={40}
        fill="none"
        stroke="#C2410C"
        strokeWidth={1}
        animate={{ scale: [1, 1.5, 1], opacity: [0.35, 0.08, 0.35] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
        style={{ transformOrigin: 'center', transformBox: 'fill-box' }}
      />
      {/* Ring border */}
      <circle
        cx={CX}
        cy={CY}
        r={29}
        fill="#0B1220"
        stroke="#C2410C"
        strokeWidth={1.5}
        strokeOpacity={0.65}
      />
      {/* Flame body */}
      <path
        d={[
          `M ${CX} ${CY - 14}`,
          `C ${CX + 5} ${CY - 8} ${CX + 11} ${CY - 1} ${CX + 8} ${CY + 7}`,
          `C ${CX + 6} ${CY + 13} ${CX + 2} ${CY + 17} ${CX} ${CY + 18}`,
          `C ${CX - 2} ${CY + 17} ${CX - 6} ${CY + 13} ${CX - 8} ${CY + 7}`,
          `C ${CX - 11} ${CY - 1} ${CX - 5} ${CY - 8} ${CX} ${CY - 14}`,
          'Z',
        ].join(' ')}
        fill="#C2410C"
        fillOpacity={0.92}
        filter="url(#rp-flame-glow)"
      />
      {/* Inner highlight */}
      <path
        d={[
          `M ${CX} ${CY - 5}`,
          `C ${CX + 3} ${CY} ${CX + 5} ${CY + 4} ${CX + 3} ${CY + 9}`,
          `C ${CX + 1} ${CY + 13} ${CX} ${CY + 15} ${CX} ${CY + 15}`,
          `C ${CX} ${CY + 15} ${CX - 1} ${CY + 13} ${CX - 3} ${CY + 9}`,
          `C ${CX - 5} ${CY + 4} ${CX - 3} ${CY} ${CX} ${CY - 5}`,
          'Z',
        ].join(' ')}
        fill="#EA580C"
        fillOpacity={0.55}
      />
    </g>
  )
}
