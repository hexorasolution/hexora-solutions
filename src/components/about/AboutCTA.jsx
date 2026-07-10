import { motion } from 'framer-motion'
import { Link }   from 'react-router-dom'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'

const AboutCTA = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          className="relative rounded-3xl overflow-hidden p-14 text-center"
          style={{
            background:
              'linear-gradient(135deg, #0a0f1e 0%, #1a2f7a 50%, #0d1b3e 100%)',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(26,60,255,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(26,60,255,0.5) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{ background: '#1a3cff', filter: 'blur(80px)' }}
          />

          <div className="relative">
            <motion.p
              className="text-blue-400 font-semibold mb-3 uppercase tracking-wider text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Ready To Work With Us?
            </motion.p>

            <h2
              className="font-heading font-black text-white mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.15 }}
            >
              Let's Build Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Digital Future
              </span>{' '}
              Together
            </h2>

            <p className="text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed">
              Join 100+ businesses that trust Hexora Solutions to power their
              digital success. Get your free consultation today.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  className="flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                    boxShadow: '0 0 30px rgba(26,60,255,0.5)',
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(26,60,255,0.7)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Free Consultation <FiArrowRight />
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  className="flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-semibold"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                  whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.15)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FiCalendar /> View Our Work
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutCTA