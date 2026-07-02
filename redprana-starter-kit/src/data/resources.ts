import type { FreeResource } from '@/types'

export const freeResources: FreeResource[] = [
  {
    id: 'iso42001-gap-checklist',
    checklistId: 'iso42001-gap',
    title: 'ISO 42001 Gap Checklist',
    description:
      'Answer 15 questions across the five core ISO/IEC 42001 clauses and get an instant maturity score with a downloadable PDF report.',
    icon: 'ClipboardCheck',
  },
  {
    id: 'ai-governance-readiness-checklist',
    checklistId: 'ai-governance-readiness',
    title: 'AI Governance Readiness Checklist',
    description:
      'A framework-agnostic readiness check across governance, risk, data, vendors, and incident response — useful ahead of NIST AI RMF or MAS work.',
    icon: 'ShieldCheck',
  },
]
