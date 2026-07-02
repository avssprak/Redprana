import { useState } from 'react'
import { CheckCircle2, RotateCcw } from 'lucide-react'
import type { ChecklistAnswers, ChecklistDefinition, ChecklistResult } from '@/types'
import { generateChecklistPdf } from '@/utils/generateChecklistPdf'
import { EmailCaptureForm } from './EmailCaptureForm'
import { SegmentedBar } from './SegmentedBar'

interface ResultsPanelProps {
  checklist: ChecklistDefinition
  result: ChecklistResult
  answers: ChecklistAnswers
  onRestart: () => void
}

export function ResultsPanel({ checklist, result, answers, onRestart }: ResultsPanelProps) {
  const [reportReady, setReportReady] = useState(false)

  async function handleEmailSuccess() {
    await generateChecklistPdf(checklist, result, answers)
    setReportReady(true)
  }

  return (
    <div className="p-6 lg:p-8">
      <p className="font-mono text-xs text-secondary uppercase tracking-widest mb-2">Your Score</p>
      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-display font-bold text-5xl text-primary">{result.percentage}%</span>
        <span className="font-display font-semibold text-lg text-secondary">{result.band.label}</span>
      </div>

      <p className="text-text-muted leading-relaxed mb-8 max-w-2xl">{result.band.summary}</p>

      <div className="space-y-4 mb-10">
        {result.categoryScores.map((category) => (
          <div key={category.categoryId}>
            <div className="flex items-center justify-between text-sm mb-1.5">
              <span className="text-text font-medium">{category.categoryTitle}</span>
              <span className="text-text-muted">{category.percentage}%</span>
            </div>
            <SegmentedBar percentage={category.percentage} />
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-6">
        {reportReady ? (
          <div className="flex items-center gap-3 text-secondary">
            <CheckCircle2 size={20} aria-hidden="true" />
            <p className="text-sm font-medium">
              Your PDF report has downloaded. Check your downloads folder.
            </p>
          </div>
        ) : (
          <>
            <h4 className="font-display font-semibold text-primary mb-2">Get your full PDF report</h4>
            <p className="text-sm text-text-muted mb-4">
              Enter your email to download a detailed PDF of this assessment — including your
              category breakdown and recommended next steps.
            </p>
            <EmailCaptureForm
              tag={`resource:${checklist.id}`}
              fields={{ checklist_score: result.percentage }}
              onSuccess={handleEmailSuccess}
            />
          </>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8">
        <button
          type="button"
          onClick={onRestart}
          className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          <RotateCcw size={14} aria-hidden="true" />
          Retake checklist
        </button>
        <a
          href="mailto:prakash@redprana.com?subject=Discovery%20Call%20Request"
          className="inline-flex items-center justify-center rounded-full border border-secondary/40 text-secondary hover:bg-secondary/5 px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
        >
          Book a Consultation
        </a>
      </div>
    </div>
  )
}
