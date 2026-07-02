import type { NavItem } from '@/types'

export const navItems: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Frameworks', href: '/frameworks' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const footerLinks = {
  services: [
    { label: 'Maturity Assessment', href: '/services#maturity-assessment' },
    { label: 'Framework Implementation', href: '/services#framework-implementation' },
    { label: 'AI Risk Register', href: '/services#risk-register' },
    { label: 'Regulatory Advisory', href: '/services#regulatory-advisory' },
    { label: 'AI-GOS™ Platform', href: '/services#ai-gos' },
    { label: 'Executive Briefings', href: '/services#executive-briefings' },
  ],
  frameworks: [
    { label: 'NIST AI RMF', href: '/frameworks#nist' },
    { label: 'ISO/IEC 42001', href: '/frameworks#iso42001' },
    { label: 'EU AI Act', href: '/frameworks#euaiact' },
    { label: 'MAS FEAT / AIRG', href: '/frameworks#mas' },
  ],
  company: [
    { label: 'Resources', href: '/resources' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
}
