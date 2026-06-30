import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { navItems } from '@/data/navigation'

const desktopNavLinks = navItems.filter(item => item.label !== 'Contact')

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrolled } = useScrollAnimation(50)
  const location = useLocation()

  const isActive = (href: string) => location.pathname === href

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-primary/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Red Prana — home"
          >
            <span className="font-logo text-2xl lg:text-3xl tracking-tight">
              <span className="text-white">red</span>
              <span className="text-brand-red">prana</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {desktopNavLinks.map(item => (
              <Link
                key={item.href}
                to={item.href}
                className={`relative text-sm font-medium transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-white/75 hover:text-white'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="mailto:prakash@redprana.com?subject=Book%20a%20Consultation"
            className="hidden md:inline-flex rounded-full bg-accent hover:bg-accent-light px-5 py-2 text-sm font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            Book a Consultation
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => setMobileOpen(open => !open)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t border-white/10 bg-primary/98 backdrop-blur-md"
          >
            <div className="flex flex-col px-4 pt-2 pb-6 gap-1">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-3 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    isActive(item.href)
                      ? 'bg-white/10 text-white'
                      : 'text-white/75 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="mailto:prakash@redprana.com?subject=Book%20a%20Consultation"
                onClick={() => setMobileOpen(false)}
                className="mt-3 text-center rounded-full bg-accent hover:bg-accent-light px-5 py-2.5 text-sm font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Book a Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
