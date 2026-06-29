import type { Framework } from '@/types'

export const frameworks: Framework[] = [
  {
    id: 'nist',
    name: 'NIST AI Risk Management Framework',
    shortName: 'NIST AI RMF',
    jurisdiction: 'United States',
    description:
      'The NIST AI RMF provides a structured, voluntary framework for managing AI risks across the full AI lifecycle — from design through deployment and monitoring. It is rapidly becoming the de facto US federal standard.',
    keyRequirements: [
      'GOVERN: Establish AI risk governance policies and accountability structures',
      'MAP: Identify and classify AI risks in context',
      'MEASURE: Analyse and assess AI risk using quantitative and qualitative methods',
      'MANAGE: Prioritise, respond to, and monitor AI risks',
    ],
    redPranaApproach:
      'We use NIST AI RMF as the primary risk vocabulary for US-based clients, mapping your existing controls to the four core functions and identifying gaps for remediation.',
    color: 'accent',
    angle: 0,
  },
  {
    id: 'iso42001',
    name: 'ISO/IEC 42001:2023',
    shortName: 'ISO 42001',
    jurisdiction: 'International',
    description:
      'ISO/IEC 42001 is the first internationally certified AI management system standard. It provides a certifiable framework for establishing, implementing, maintaining, and improving an AI Management System (AIMS).',
    keyRequirements: [
      'Leadership commitment and AI policy establishment',
      'AI system impact assessment and risk treatment',
      'AI-specific objectives and performance evaluation',
      'Continual improvement of the AI management system',
    ],
    redPranaApproach:
      'We deliver ISO 42001 gap assessments, implementation roadmaps, and pre-certification readiness reviews — including the U-AIGF™ control library mapping.',
    color: 'secondary',
    angle: 90,
  },
  {
    id: 'euaiact',
    name: 'EU Artificial Intelligence Act',
    shortName: 'EU AI Act',
    jurisdiction: 'European Union',
    description:
      'The world\'s first comprehensive AI regulation, the EU AI Act classifies AI systems by risk level (Unacceptable, High, Limited, Minimal) and imposes mandatory requirements for high-risk systems, including conformity assessments and registration.',
    keyRequirements: [
      'Risk classification of all AI systems across four tiers',
      'Mandatory conformity assessment for high-risk AI',
      'Transparency and disclosure obligations for all AI interactions',
      'Fundamental rights impact assessments for public sector AI',
    ],
    redPranaApproach:
      'We perform EU AI Act risk classification assessments, identify high-risk AI systems requiring conformity assessment, and build compliance roadmaps aligned to enforcement timelines.',
    color: 'accent',
    angle: 180,
  },
  {
    id: 'mas',
    name: 'MAS FEAT & AI Governance',
    shortName: 'MAS FEAT / AIRG',
    jurisdiction: 'Singapore',
    description:
      'The Monetary Authority of Singapore\'s FEAT principles (Fairness, Ethics, Accountability, Transparency) and AI Governance Framework establish expectations for financial institutions deploying AI — with AIRG providing detailed implementation guidance.',
    keyRequirements: [
      'Fairness: AI decisions must not discriminate unlawfully',
      'Ethics: AI deployment must align with ethical principles',
      'Accountability: Clear ownership of AI system outcomes',
      'Transparency: Explainability of AI decisions to affected parties',
    ],
    redPranaApproach:
      'We deliver MAS FEAT compliance assessments for Singapore-regulated financial institutions, with particular expertise in AIRG implementation and MAS Technology Risk Management alignment.',
    color: 'secondary',
    angle: 270,
  },
]

export const getFrameworkById = (id: string): Framework | undefined =>
  frameworks.find((f) => f.id === id)
