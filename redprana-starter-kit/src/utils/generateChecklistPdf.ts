import type { ChecklistAnswers, ChecklistAnswerValue, ChecklistDefinition, ChecklistResult } from '@/types'

const NAVY: [number, number, number] = [11, 18, 32]
const TEAL: [number, number, number] = [14, 116, 144]
const MUTED: [number, number, number] = [107, 114, 128]
const SUCCESS: [number, number, number] = [16, 185, 129]
const WARM: [number, number, number] = [194, 65, 12]
const GAP: [number, number, number] = [185, 45, 45]
const TRACK: [number, number, number] = [230, 232, 236]

const LOGO_URL = '/brand/redprana-logo-transparent-navy.png'
const LOGO_RASTER_WIDTH_PX = 600

const ANSWER_LABEL: Record<ChecklistAnswerValue, string> = {
  yes: 'YES',
  partial: 'PARTIAL',
  no: 'NO',
}

const ANSWER_COLOR: Record<ChecklistAnswerValue, [number, number, number]> = {
  yes: SUCCESS,
  partial: WARM,
  no: GAP,
}

const PAGE_WIDTH = 595.28
const PAGE_HEIGHT = 841.89
const MARGIN_X = 48
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2
const BOTTOM_LIMIT = PAGE_HEIGHT - 64

interface LogoAsset {
  dataUrl: string
  aspect: number // height / width
}

async function loadLogoAsset(url: string): Promise<LogoAsset> {
  const response = await fetch(url)
  const blob = await response.blob()
  const bitmap = await createImageBitmap(blob)
  const aspect = bitmap.height / bitmap.width
  const targetWidth = LOGO_RASTER_WIDTH_PX
  const targetHeight = Math.round(targetWidth * aspect)

  const canvas = document.createElement('canvas')
  canvas.width = targetWidth
  canvas.height = targetHeight
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas 2D context unavailable')
  ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight)
  bitmap.close()

  return { dataUrl: canvas.toDataURL('image/png'), aspect }
}

export async function generateChecklistPdf(
  checklist: ChecklistDefinition,
  result: ChecklistResult,
  answers: ChecklistAnswers
): Promise<void> {
  const [{ jsPDF }, logo] = await Promise.all([import('jspdf'), loadLogoAsset(LOGO_URL)])
  const doc = new jsPDF({ unit: 'pt', format: 'a4' })

  function ensureSpace(y: number, needed: number): number {
    if (y + needed > BOTTOM_LIMIT) {
      doc.addPage()
      return 64
    }
    return y
  }

  let y = 48

  // ─── Header: logo + report title ───────────────────────────────────────────
  const logoWidth = 130
  const logoHeight = logoWidth * logo.aspect
  doc.addImage(logo.dataUrl, 'PNG', MARGIN_X, y, logoWidth, logoHeight)
  y += logoHeight + 20

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(14)
  doc.setTextColor(...TEAL)
  doc.text(checklist.title, MARGIN_X, y)

  y += 16
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.setTextColor(...MUTED)
  doc.text(`Generated ${new Date().toLocaleDateString()}`, MARGIN_X, y)

  // ─── Score ──────────────────────────────────────────────────────────────────
  y += 36
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(32)
  doc.setTextColor(...NAVY)
  doc.text(`${result.percentage}%`, MARGIN_X, y)

  doc.setFontSize(14)
  doc.setTextColor(...TEAL)
  doc.text(result.band.label, MARGIN_X + 90, y)

  y += 24
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.setTextColor(...NAVY)
  const summaryLines = doc.splitTextToSize(result.band.summary, CONTENT_WIDTH)
  doc.text(summaryLines, MARGIN_X, y)
  y += summaryLines.length * 14 + 28

  // ─── Maturity journey: all stages, current one highlighted ────────────────
  y = ensureSpace(y, 60)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(13)
  doc.setTextColor(...NAVY)
  doc.text('Your Maturity Journey', MARGIN_X, y)
  y += 8
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(...MUTED)
  doc.text('Every stage on the path — and where this assessment places you today.', MARGIN_X, y + 10)
  y += 26

  const sortedBands = [...checklist.bands].sort((a, b) => a.minPercentage - b.minPercentage)
  sortedBands.forEach((band, index) => {
    const isCurrent = band.label === result.band.label
    const bandSummaryLines = doc.splitTextToSize(band.summary, CONTENT_WIDTH - 18)
    const needed = 18 + bandSummaryLines.length * 12 + 10
    y = ensureSpace(y, needed)

    if (isCurrent) {
      doc.setFillColor(14, 116, 144)
      doc.setDrawColor(14, 116, 144)
      doc.circle(MARGIN_X + 4, y - 4, 4, 'F')
    } else {
      doc.setDrawColor(...MUTED)
      doc.circle(MARGIN_X + 4, y - 4, 4, 'S')
    }

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.setTextColor(isCurrent ? TEAL[0] : NAVY[0], isCurrent ? TEAL[1] : NAVY[1], isCurrent ? TEAL[2] : NAVY[2])
    const heading = `Stage ${index + 1}: ${band.label} (${band.minPercentage}%+)${isCurrent ? '  ·  YOU ARE HERE' : ''}`
    doc.text(heading, MARGIN_X + 16, y)
    y += 14

    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9.5)
    doc.setTextColor(...MUTED)
    doc.text(bandSummaryLines, MARGIN_X + 16, y)
    y += bandSummaryLines.length * 12 + 14
  })

  y += 10

  // ─── Category breakdown ────────────────────────────────────────────────────
  y = ensureSpace(y, 40)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(13)
  doc.setTextColor(...NAVY)
  doc.text('Breakdown by category', MARGIN_X, y)
  y += 20

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  for (const category of result.categoryScores) {
    y = ensureSpace(y, 26)
    const barWidth = 200
    const filled = (category.percentage / 100) * barWidth

    doc.setTextColor(...NAVY)
    doc.text(category.categoryTitle, MARGIN_X, y)

    doc.setDrawColor(...MUTED)
    doc.setFillColor(...TRACK)
    doc.rect(MARGIN_X + 220, y - 8, barWidth, 8, 'F')
    doc.setFillColor(...TEAL)
    doc.rect(MARGIN_X + 220, y - 8, filled, 8, 'F')

    doc.setTextColor(...MUTED)
    doc.text(`${category.percentage}%`, MARGIN_X + 220 + barWidth + 12, y)

    y += 26
  }

  y += 14

  // ─── Detailed responses ─────────────────────────────────────────────────────
  y = ensureSpace(y, 40)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(13)
  doc.setTextColor(...NAVY)
  doc.text('Detailed Responses', MARGIN_X, y)
  y += 22

  const tagWidth = 58
  const questionWidth = CONTENT_WIDTH - tagWidth

  for (const category of checklist.categories) {
    y = ensureSpace(y, 30)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.setTextColor(...TEAL)
    doc.text(category.title, MARGIN_X, y)
    y += 18

    for (const question of category.questions) {
      const answer = answers[question.id]
      const lines = doc.splitTextToSize(question.text, questionWidth)
      const needed = lines.length * 13 + 10
      y = ensureSpace(y, needed)

      const color = answer ? ANSWER_COLOR[answer] : MUTED
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8.5)
      doc.setTextColor(...color)
      doc.text(answer ? ANSWER_LABEL[answer] : '—', MARGIN_X, y)

      doc.setFont('helvetica', 'normal')
      doc.setFontSize(10)
      doc.setTextColor(...NAVY)
      doc.text(lines, MARGIN_X + tagWidth, y)

      y += lines.length * 13 + 10
    }

    y += 8
  }

  // ─── Closing CTA ────────────────────────────────────────────────────────────
  y = ensureSpace(y, 90)
  doc.setDrawColor(...MUTED)
  doc.line(MARGIN_X, y, PAGE_WIDTH - MARGIN_X, y)
  y += 24

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.setTextColor(...NAVY)
  doc.text('Ready to close these gaps?', MARGIN_X, y)
  y += 18

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  doc.setTextColor(...MUTED)
  doc.text('Book a free discovery call with Prakash Achanta: prakash@redprana.com', MARGIN_X, y)

  const fileName = `${checklist.id}-report.pdf`
  doc.save(fileName)
}
