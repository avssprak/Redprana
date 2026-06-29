export function TrustBar() {
  return (
    <div className="bg-primary py-4 overflow-x-auto">
      <div className="flex items-center gap-3 whitespace-nowrap px-4 sm:px-6 lg:px-8 justify-center min-w-max mx-auto">
        <span className="text-text-muted text-xs flex-shrink-0">Frameworks We Implement:</span>
        <span className="text-secondary/40 flex-shrink-0" aria-hidden="true">|</span>
        <span className="font-mono text-secondary text-sm flex-shrink-0">
          NIST AI RMF · ISO/IEC 42001:2023 · EU AI Act · MAS FEAT · MAS AIRG · UAE AI Strategy · Saudi NDMO · CSA AICM
        </span>
      </div>
    </div>
  )
}
