import FrameworkCompass from '@/components/FrameworkCompass'

export default function CompassTest() {
  return (
    <div className="min-h-screen bg-surface py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Full interactive compass */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-primary mb-2">
            Full Compass (interactive + detail panel)
          </h2>
          <p className="text-sm text-text-muted mb-8">
            Click any node → detail panel opens. Press Escape to dismiss. Tab + Enter for keyboard nav.
          </p>
          <FrameworkCompass />
        </section>

        {/* Compact compass */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-primary mb-2">
            Compact Compass (no detail panel — clicks navigate)
          </h2>
          <p className="text-sm text-text-muted mb-8">
            Used in the Hero section. Clicking navigates to /frameworks#id.
          </p>
          <FrameworkCompass compact />
        </section>

      </div>
    </div>
  )
}
