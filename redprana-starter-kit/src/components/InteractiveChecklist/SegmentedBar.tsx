interface SegmentedBarProps {
  percentage: number
  segments?: number
}

export function SegmentedBar({ percentage, segments = 10 }: SegmentedBarProps) {
  const filled = Math.round((percentage / 100) * segments)

  return (
    <div className="flex gap-1" role="presentation">
      {Array.from({ length: segments }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full ${i < filled ? 'bg-accent' : 'bg-text-muted/10'}`}
        />
      ))}
    </div>
  )
}
