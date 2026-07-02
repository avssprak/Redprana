import type { ChecklistAnswerValue, ChecklistAnswers, ChecklistDefinition } from '@/types'
import { countAnswered, countQuestions, isChecklistComplete } from '@/utils/checklistScoring'
import { SegmentedBar } from './SegmentedBar'

interface ChecklistFormProps {
  checklist: ChecklistDefinition
  answers: ChecklistAnswers
  onAnswer: (questionId: string, value: ChecklistAnswerValue) => void
  onSubmit: () => void
}

const ANSWER_OPTIONS: { value: ChecklistAnswerValue; label: string }[] = [
  { value: 'yes', label: 'Yes' },
  { value: 'partial', label: 'Partially' },
  { value: 'no', label: 'No' },
]

export function ChecklistForm({ checklist, answers, onAnswer, onSubmit }: ChecklistFormProps) {
  const answered = countAnswered(checklist, answers)
  const total = countQuestions(checklist)
  const complete = isChecklistComplete(checklist, answers)
  const progressPercentage = Math.round((answered / total) * 100)

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-text-muted mb-2">
          <span>{answered} of {total} answered</span>
          <span>{progressPercentage}%</span>
        </div>
        <SegmentedBar percentage={progressPercentage} segments={total} />
      </div>

      <div className="space-y-10">
        {checklist.categories.map((category) => (
          <fieldset key={category.id}>
            <legend className="font-display font-semibold text-base text-primary mb-4">
              {category.title}
            </legend>
            <div className="space-y-6">
              {category.questions.map((question) => (
                <div key={question.id}>
                  <p className="text-sm text-text mb-3 leading-relaxed">{question.text}</p>
                  <div role="radiogroup" aria-label={question.text} className="flex flex-wrap gap-2">
                    {ANSWER_OPTIONS.map((option) => {
                      const checked = answers[question.id] === option.value
                      return (
                        <label
                          key={option.value}
                          className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                            checked
                              ? 'border-accent bg-accent/10 text-accent'
                              : 'border-text-muted/20 text-text-muted hover:border-accent/40'
                          }`}
                        >
                          <input
                            type="radio"
                            name={question.id}
                            value={option.value}
                            checked={checked}
                            onChange={() => onAnswer(question.id, option.value)}
                            className="sr-only"
                          />
                          {option.label}
                        </label>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <button
          type="button"
          disabled={!complete}
          onClick={onSubmit}
          className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-light disabled:bg-text-muted/20 disabled:cursor-not-allowed disabled:text-text-muted px-6 py-3 text-sm font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          See My Results
        </button>
      </div>
    </div>
  )
}
