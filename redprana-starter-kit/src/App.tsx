import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import PageLayout from '@/components/layout/PageLayout'

const Home = lazy(() => import('@/pages/Home'))
const Services = lazy(() => import('@/pages/Services'))
const Frameworks = lazy(() => import('@/pages/Frameworks'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const CompassTest = lazy(() => import('@/pages/CompassTest'))

export default function App() {
  return (
    <PageLayout>
      <Suspense fallback={<div className="min-h-screen bg-surface" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/frameworks" element={<Frameworks />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compass-test" element={<CompassTest />} />
        </Routes>
      </Suspense>
    </PageLayout>
  )
}
