import { Link } from 'react-router-dom'
import { footerLinks } from '@/data/navigation'

function FooterLogoMark() {
  return (
    <svg width="18" height="22" viewBox="0 0 20 24" fill="none" aria-hidden="true">
      <path
        d="M10 1C10 1 3 8 3 13.5C3 17.642 6.134 21 10 21C13.866 21 17 17.642 17 13.5C17 8 10 1 10 1Z"
        fill="#C2410C"
      />
      <path
        d="M10 21C6 21.5 2 22.5 1 24H19C18 22.5 14 21.5 10 21Z"
        fill="#C2410C"
        fillOpacity="0.55"
      />
      <path
        d="M10 6.5C10 6.5 7.5 10 7.5 13C7.5 14.657 8.619 16 10 16C11.381 16 12.5 14.657 12.5 13C12.5 10 10 6.5 10 6.5Z"
        fill="white"
        fillOpacity="0.3"
      />
    </svg>
  )
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-wider text-secondary mb-4">
      {children}
    </h3>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={href}
        className="text-sm text-text-muted hover:text-white transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {children}
      </Link>
    </li>
  )
}

export function Footer() {
  return (
    <footer className="bg-surface-dark text-text-inverse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Col 1: Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 mb-4 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Red Prana — home"
            >
              <FooterLogoMark />
              <span className="font-display font-semibold text-lg text-white">Red Prana</span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed mb-4">
              Enterprise AI Governance.<br />
              Built for the Regulated World.
            </p>
            <p className="text-xs text-text-muted">Red Prana Enterprises</p>
          </div>

          {/* Col 2: Services */}
          <div>
            <FooterHeading>Services</FooterHeading>
            <ul className="space-y-2.5">
              {footerLinks.services.map(link => (
                <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Col 3: Frameworks + Company */}
          <div>
            <FooterHeading>Frameworks</FooterHeading>
            <ul className="space-y-2.5 mb-8">
              {footerLinks.frameworks.map(link => (
                <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-2.5">
              {footerLinks.company.map(link => (
                <FooterLink key={link.href} href={link.href}>{link.label}</FooterLink>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust bar */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <p className="font-mono text-xs text-text-muted text-center">
            Frameworks: NIST AI RMF · ISO 42001 · EU AI Act · MAS FEAT · MAS AIRG
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-4 border-t border-white/5 text-xs text-text-muted">
          <span>© 2025 Red Prana Enterprises. All rights reserved.</span>
          <a
            href="mailto:prakash@redprana.com"
            className="hover:text-white transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            prakash@redprana.com
          </a>
        </div>
      </div>
    </footer>
  )
}
