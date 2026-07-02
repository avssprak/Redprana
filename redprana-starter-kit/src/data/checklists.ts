import type { ChecklistDefinition } from '@/types'

export const checklists: ChecklistDefinition[] = [
  {
    id: 'iso42001-gap',
    title: 'ISO 42001 Gap Checklist',
    description:
      'A rapid self-assessment against the core clauses of ISO/IEC 42001 — see where your AI management system has gaps before a formal audit.',
    icon: 'ClipboardCheck',
    estimatedMinutes: 8,
    categories: [
      {
        id: 'leadership-context',
        title: 'Leadership & Context',
        questions: [
          { id: 'iso-lc-1', text: 'Has your organisation defined and documented an AI policy approved by top management?' },
          { id: 'iso-lc-2', text: 'Are roles and responsibilities for AI governance formally assigned (e.g. an AI governance owner or committee)?' },
          { id: 'iso-lc-3', text: 'Have you identified the internal and external issues relevant to your AI management system (e.g. regulatory, stakeholder, technology context)?' },
        ],
      },
      {
        id: 'planning-risk',
        title: 'Planning & Risk',
        questions: [
          { id: 'iso-pr-1', text: 'Do you have a documented process for assessing AI risks and AI impacts before deployment?' },
          { id: 'iso-pr-2', text: 'Are AI objectives (e.g. fairness, safety, transparency) defined and measurable?' },
          { id: 'iso-pr-3', text: 'Is there a documented process for planning changes to the AI management system?' },
        ],
      },
      {
        id: 'support-resources',
        title: 'Support & Resources',
        questions: [
          { id: 'iso-sr-1', text: 'Are staff who develop, deploy, or oversee AI systems assessed for competence in AI governance and risk?' },
          { id: 'iso-sr-2', text: 'Is there a documented awareness programme so employees understand their AI governance responsibilities?' },
          { id: 'iso-sr-3', text: 'Do you maintain documented information (records) demonstrating how the AI management system operates?' },
        ],
      },
      {
        id: 'operation',
        title: 'Operation',
        questions: [
          { id: 'iso-op-1', text: 'Do you maintain an inventory of AI systems in use, including their purpose and risk classification?' },
          { id: 'iso-op-2', text: 'Are data quality, provenance, and governance controls applied throughout the AI lifecycle?' },
          { id: 'iso-op-3', text: 'Are third-party and vendor-supplied AI systems assessed for governance and risk before adoption?' },
        ],
      },
      {
        id: 'evaluation-improvement',
        title: 'Evaluation & Improvement',
        questions: [
          { id: 'iso-ei-1', text: 'Do you monitor and measure the performance of deployed AI systems against defined objectives?' },
          { id: 'iso-ei-2', text: 'Have you conducted an internal audit of the AI management system in the past 12 months?' },
          { id: 'iso-ei-3', text: 'Is there a documented process for corrective action when nonconformities or AI incidents occur?' },
        ],
      },
    ],
    bands: [
      {
        minPercentage: 0,
        label: 'Initial',
        summary:
          'Your AI governance activities are largely ad hoc or undocumented. This is the most common starting point — the priority is establishing a documented AI policy and an initial AI system inventory.',
      },
      {
        minPercentage: 25,
        label: 'Developing',
        summary:
          'Foundational elements exist but are inconsistent across the organisation. Formalising risk assessment and closing documentation gaps will materially reduce audit and regulatory exposure.',
      },
      {
        minPercentage: 50,
        label: 'Defined',
        summary:
          'Core ISO 42001 practices are in place. The focus now is consistency, evidence collection, and preparing for a formal certification readiness review.',
      },
      {
        minPercentage: 75,
        label: 'Managed',
        summary:
          'Your AI management system reflects strong ISO 42001 alignment. Remaining work is typically fine-tuning monitoring, internal audit cadence, and continual improvement evidence ahead of certification.',
      },
    ],
  },
  {
    id: 'ai-governance-readiness',
    title: 'AI Governance Readiness Checklist',
    description:
      'A framework-agnostic readiness check spanning governance, risk, data, third parties, and incident response — useful ahead of NIST AI RMF or MAS AI Governance work.',
    icon: 'ShieldCheck',
    estimatedMinutes: 7,
    categories: [
      {
        id: 'governance-accountability',
        title: 'Governance & Accountability',
        questions: [
          { id: 'gr-ga-1', text: 'Is there a named executive or committee accountable for AI governance outcomes?' },
          { id: 'gr-ga-2', text: 'Does your Board or senior leadership receive regular reporting on AI risk?' },
          { id: 'gr-ga-3', text: 'Is AI governance integrated into your existing enterprise risk management (ERM) framework?' },
        ],
      },
      {
        id: 'inventory-classification',
        title: 'AI Inventory & Risk Classification',
        questions: [
          { id: 'gr-ic-1', text: 'Do you maintain a complete inventory of AI/ML systems, including shadow or embedded AI (e.g. AI features inside SaaS tools)?' },
          { id: 'gr-ic-2', text: 'Is each AI system classified by risk level (e.g. low / limited / high risk)?' },
          { id: 'gr-ic-3', text: 'Are high-risk AI use cases subject to additional review before go-live?' },
        ],
      },
      {
        id: 'data-model-risk',
        title: 'Data & Model Risk Management',
        questions: [
          { id: 'gr-dm-1', text: 'Are training and inference data sources documented, with known provenance?' },
          { id: 'gr-dm-2', text: 'Is model performance (accuracy, bias, drift) monitored after deployment, not just before?' },
          { id: 'gr-dm-3', text: 'Are explainability and human-oversight requirements defined for high-risk AI decisions?' },
        ],
      },
      {
        id: 'third-party-vendor',
        title: 'Third-Party & Vendor AI',
        questions: [
          { id: 'gr-tp-1', text: 'Do you assess AI-specific risk as part of vendor due diligence, separate from general IT security review?' },
          { id: 'gr-tp-2', text: 'Do vendor contracts address AI-specific terms (e.g. data use, model updates, liability)?' },
          { id: 'gr-tp-3', text: "Do you track which vendors' products have embedded AI features that weren't originally procured as 'AI'?" },
        ],
      },
      {
        id: 'monitoring-incident',
        title: 'Monitoring & Incident Response',
        questions: [
          { id: 'gr-mi-1', text: 'Is there a defined process for reporting and investigating AI-related incidents (e.g. harmful outputs, bias findings)?' },
          { id: 'gr-mi-2', text: 'Are lessons from AI incidents fed back into risk assessments and controls?' },
          { id: 'gr-mi-3', text: 'Do you have a communication plan for AI incidents involving regulators or affected individuals?' },
        ],
      },
    ],
    bands: [
      {
        minPercentage: 0,
        label: 'Early Stage',
        summary:
          'AI governance is not yet formalised. Priority: name an accountable owner and build a first-pass AI inventory.',
      },
      {
        minPercentage: 25,
        label: 'Building',
        summary:
          'Some controls exist but coverage is patchy. Priority: extend risk classification and vendor due diligence consistently across all AI use cases.',
      },
      {
        minPercentage: 50,
        label: 'Established',
        summary:
          'Governance foundations are solid. Priority: strengthen post-deployment monitoring and incident response readiness.',
      },
      {
        minPercentage: 75,
        label: 'Mature',
        summary:
          'Your AI governance programme is ahead of most peers. Priority: formal benchmarking against ISO 42001 or NIST AI RMF to evidence maturity to regulators and customers.',
      },
    ],
  },
]

export function getChecklistById(id: string): ChecklistDefinition | undefined {
  return checklists.find((checklist) => checklist.id === id)
}
