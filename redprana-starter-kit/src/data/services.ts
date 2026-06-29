import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'maturity-assessment',
    icon: 'BarChart3',
    title: 'AI Governance Maturity Assessment',
    description:
      'A structured baseline assessment of your current AI governance posture against ISO 42001, NIST AI RMF, and applicable regional frameworks. Delivered in 4–6 weeks.',
    features: [
      'AI system inventory across your organisation',
      'Control gap analysis against chosen frameworks',
      'Risk-rated findings with remediation roadmap',
      'Executive-ready maturity scorecard',
    ],
    cta: 'Request an Assessment',
    stage: 'available',
  },
  {
    id: 'framework-implementation',
    icon: 'Layers',
    title: 'Framework Implementation',
    description:
      'End-to-end deployment of AI governance controls, policies, and procedures aligned to ISO 42001 and NIST AI RMF. From design to evidence collection.',
    features: [
      'AI governance policy and procedure library',
      'Control framework customised to your industry',
      'Evidence collection and audit readiness',
      'Staff training and awareness programmes',
    ],
    cta: 'Discuss Your Project',
    stage: 'available',
  },
  {
    id: 'risk-register',
    icon: 'ShieldAlert',
    title: 'AI Risk Register Design',
    description:
      'A structured, enterprise-grade AI risk register built to your operating context — covering system risk, model risk, data risk, and third-party AI risk.',
    features: [
      'AI system classification and risk tiering',
      'Threat and impact scenario modelling',
      'Risk treatment and owner assignment',
      'Integration with existing ERM frameworks',
    ],
    cta: 'Start Risk Mapping',
    stage: 'available',
  },
  {
    id: 'regulatory-advisory',
    icon: 'Scale',
    title: 'Regulatory Compliance Advisory',
    description:
      'Expert guidance on meeting AI regulatory obligations across US, Singapore, and Middle East jurisdictions — including EU AI Act obligations for global organisations.',
    features: [
      'EU AI Act risk classification and conformity assessment readiness',
      'MAS FEAT/AIRG compliance review for Singapore FIs',
      'UAE AI Strategy and NDMO alignment for Middle East operations',
      'Cross-jurisdictional compliance mapping for multinational firms',
    ],
    cta: 'Get Regulatory Advice',
    stage: 'available',
  },
  {
    id: 'ai-gos',
    icon: 'Cpu',
    title: 'AI-GOS™ Platform',
    description:
      'The AI Governance Operating System — an enterprise SaaS platform for managing AI inventory, risk registers, controls, policies, evidence, and compliance monitoring in one place.',
    features: [
      'Multi-tenant, enterprise-grade architecture',
      'Built-in control library across ISO 42001, NIST AI RMF, EU AI Act, MAS',
      'Workflow-driven evidence collection and audit trails',
      'Executive dashboards and compliance reporting',
    ],
    cta: 'Join the Waitlist',
    stage: 'coming-soon',
  },
  {
    id: 'executive-briefings',
    icon: 'Presentation',
    title: 'Board & Executive Briefings',
    description:
      'AI governance literacy and accountability frameworks for senior leadership — from Board-level AI policy to CRO-level risk briefings and AI ethics governance design.',
    features: [
      'Board AI governance charter design',
      'AI risk appetite and tolerance frameworks',
      'Executive AI literacy workshops',
      'AI oversight committee structure and terms of reference',
    ],
    cta: 'Book a Briefing',
    stage: 'available',
  },
]
