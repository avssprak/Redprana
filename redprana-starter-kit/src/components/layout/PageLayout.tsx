import { ReactNode } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-text">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      {/* pt-16 offsets the fixed 64px navbar so page content isn't hidden under it */}
      <main id="main-content" className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}
