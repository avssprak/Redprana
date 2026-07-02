import type { ChecklistAnswers, ChecklistDefinition, ChecklistResult, MaturityBand } from '@/types'

const ANSWER_POINTS: Record<'yes' | 'partial' | 'no', number> = {
  yes: 2,
  partial: 1,
  no: 0,
}

function resolveBand(percentage: number, bands: MaturityBand[]): MaturityBand {
  const sorted = [...bands].sort((a, b) => a.minPercentage - b.minPercentage)
  let matched = sorted[0]
  for (const band of sorted) {
    if (percentage >= band.minPercentage) {
      matched = band
    }
  }
  return matched
}

export function scoreChecklist(
  checklist: ChecklistDefinition,
  answers: ChecklistAnswers
): ChecklistResult {
  const categoryScores = checklist.categories.map((category) => {
    const maxScore = category.questions.length * 2
    const score = category.questions.reduce((sum, question) => {
      const answer = answers[question.id]
      return sum + (answer ? ANSWER_POINTS[answer] : 0)
    }, 0)
    return {
      categoryId: category.id,
      categoryTitle: category.title,
      score,
      maxScore,
      percentage: Math.round((score / maxScore) * 100),
    }
  })

  const totalScore = categoryScores.reduce((sum, c) => sum + c.score, 0)
  const maxScore = categoryScores.reduce((sum, c) => sum + c.maxScore, 0)
  const percentage = Math.round((totalScore / maxScore) * 100)

  return {
    totalScore,
    maxScore,
    percentage,
    band: resolveBand(percentage, checklist.bands),
    categoryScores,
  }
}

export function isChecklistComplete(checklist: ChecklistDefinition, answers: ChecklistAnswers): boolean {
  return checklist.categories.every((category) =>
    category.questions.every((question) => Boolean(answers[question.id]))
  )
}

export function countAnswered(checklist: ChecklistDefinition, answers: ChecklistAnswers): number {
  return checklist.categories.reduce(
    (sum, category) => sum + category.questions.filter((q) => Boolean(answers[q.id])).length,
    0
  )
}

export function countQuestions(checklist: ChecklistDefinition): number {
  return checklist.categories.reduce((sum, category) => sum + category.questions.length, 0)
}
