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
