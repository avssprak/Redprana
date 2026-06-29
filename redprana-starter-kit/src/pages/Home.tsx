import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Hero } from '@/components/sections/Hero'
import { TrustBar } from '@/components/sections/TrustBar'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { FrameworkPreview } from '@/components/sections/FrameworkPreview'
import { AIGOSTeaser } from '@/components/sections/AIGOSTeaser'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AI Governance Consultant — Red Prana Enterprises</title>
        <meta
          name="description"
          content="Enterprise AI governance consulting across ISO 42001, NIST AI RMF, MAS FEAT, and EU AI Act. Book a consultation with Prakash."
        />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <FrameworkPreview />
        <AIGOSTeaser />
        <ContactCTA />
      </motion.div>
    </>
  )
}
