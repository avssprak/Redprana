import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display font-bold text-4xl text-primary mb-4">
            Ready to Govern Your AI?
          </h2>
          <p className="text-text-muted text-lg mb-8">
            Book a 30-minute consultation to discuss your AI governance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:prakash@redprana.com?subject=Consultation%20Request"
              className="inline-flex items-center justify-center rounded-full bg-accent hover:bg-accent-light px-8 py-3.5 text-sm font-semibold text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Book a Consultation
            </a>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-lg border border-text-muted/30 hover:border-accent/50 px-8 py-3.5 text-sm font-semibold text-text hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              View Services →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
