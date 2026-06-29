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
      <ScrollToTop />
      <Navbar />
      {/* pt-16 offsets the fixed 64px navbar so page content isn't hidden under it */}
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}
