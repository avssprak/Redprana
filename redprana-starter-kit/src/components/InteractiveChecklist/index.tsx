import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Clock, ClipboardCheck, ShieldCheck, type LucideIcon } from 'lucide-react'
import type { ChecklistAnswers, ChecklistAnswerValue, ChecklistDefinition } from '@/types'
import { countAnswered, isChecklistComplete, scoreChecklist } from '@/utils/checklistScoring'
import { ChecklistForm } from './ChecklistForm'
import { ResultsPanel } from './ResultsPanel'

const iconMap: Record<string, LucideIcon> = {
  ClipboardCheck,
  ShieldCheck,
}

type Stage = 'intro' | 'form' | 'results'

interface InteractiveChecklistProps {
  checklist: ChecklistDefinition
}

export function InteractiveChecklist({ checklist }: InteractiveChecklistProps) {
  const [stage, setStage] = useState<Stage>('intro')
  const [answers, setAnswers] = useState<ChecklistAnswers>({})

  const Icon = iconMap[checklist.icon] ?? ClipboardCheck
  const result = stage === 'results' ? scoreChecklist(checklist, answers) : null
  const isOpen = stage !== 'intro'
  const hasProgress = countAnswered(checklist, answers) > 0

  function handleAnswer(questionId: string, value: ChecklistAnswerValue) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  function handleRestart() {
    setAnswers({})
    setStage('form')
  }

  function handleToggleOpen() {
    if (isOpen) {
      setStage('intro')
    } else {
      setStage(isChecklistComplete(checklist, answers) ? 'results' : 'form')
    }
  }

  const toggleLabel = isOpen
    ? 'Minimize'
    : isChecklistComplete(checklist, answers)
      ? 'View Results'
      : hasProgress
        ? 'Continue Checklist'
        : 'Start Checklist'

  return (
    <div
      id={checklist.id}
      className="scroll-mt-24 rounded-2xl border border-text-muted/10 bg-white shadow-card overflow-hidden"
    >
      <div className="p-6 lg:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
          <Icon size={28} className="text-secondary" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="font-display font-semibold text-xl text-primary mb-1">{checklist.title}</h3>
          <p className="text-text-muted text-sm leading-relaxed">{checklist.description}</p>
          <div className="flex items-center gap-1.5 text-xs text-text-muted mt-3">
            <Clock size={14} aria-hidden="true" />
            <span>About {checklist.estimatedMinutes} minutes</span>
          </div>
        </div>
        <button
          type="button"
          onClick={handleToggleOpen}
          aria-expanded={isOpen}
          className={`inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 flex-shrink-0 ${
            isOpen
              ? 'border border-text-muted/20 text-text-muted hover:border-accent/40 hover:text-accent'
              : 'bg-accent hover:bg-accent-light text-white'
          }`}
        >
          {toggleLabel}
          {isOpen ? <ChevronUp size={16} aria-hidden="true" /> : <ChevronDown size={16} aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {stage === 'form' && (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-text-muted/10"
          >
            <ChecklistForm
              checklist={checklist}
              answers={answers}
              onAnswer={handleAnswer}
              onSubmit={() => setStage('results')}
            />
          </motion.div>
        )}

        {stage === 'results' && result && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-text-muted/10"
          >
            <ResultsPanel checklist={checklist} result={result} answers={answers} onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
