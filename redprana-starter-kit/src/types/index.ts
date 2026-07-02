// Navigation
export interface NavItem {
  label: string
  href: string
  external?: boolean
}

// Services
export interface Service {
  id: string
  icon: string  // lucide-react icon name
  title: string
  description: string
  features: string[]
  cta: string
  stage: 'available' | 'coming-soon'
}

// Frameworks
export type FrameworkId = 'nist' | 'iso42001' | 'euaiact' | 'mas'

export interface Framework {
  id: FrameworkId
  name: string
  shortName: string
  jurisdiction: string
  description: string
  keyRequirements: string[]
  redPranaApproach: string
  color: string  // Tailwind color class
  angle: number  // Degrees on the compass (0, 90, 180, 270)
}

// Compass
export interface CompassNode {
  framework: Framework
  isActive: boolean
  position: { x: number; y: number }
}

// Contact Form
export interface ContactFormData {
  name: string
  company: string
  role: string
  email: string
  region: 'us' | 'singapore' | 'middle-east' | 'other'
  message: string
}

// Page SEO
export interface PageSEO {
  title: string
  description: string
  canonical?: string
}

// Free Resources — Interactive Checklists
export type ChecklistAnswerValue = 'yes' | 'partial' | 'no'

export type ChecklistAnswers = Record<string, ChecklistAnswerValue>

export interface ChecklistQuestion {
  id: string
  text: string
}

export interface ChecklistCategory {
  id: string
  title: string
  questions: ChecklistQuestion[]
}

export interface MaturityBand {
  minPercentage: number
  label: string
  summary: string
}

export interface ChecklistDefinition {
  id: string
  title: string
  description: string
  icon: string // lucide-react icon name
  estimatedMinutes: number
  categories: ChecklistCategory[]
  bands: MaturityBand[]
}

export interface CategoryScore {
  categoryId: string
  categoryTitle: string
  score: number
  maxScore: number
  percentage: number
}

export interface ChecklistResult {
  totalScore: number
  maxScore: number
  percentage: number
  band: MaturityBand
  categoryScores: CategoryScore[]
}

// Free Resources — page catalog
export interface FreeResource {
  id: string
  checklistId: string
  title: string
  description: string
  icon: string // lucide-react icon name
}
