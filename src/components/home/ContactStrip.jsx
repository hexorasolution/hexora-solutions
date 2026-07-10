import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPhone, FiMail, FiMessageCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const ContactStrip = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          className="relative rounded-3xl overflow-hidden p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, #0a0f1e 0%, #1a2f7a 50%, #0d1b3e 100%)',
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Background decoration */}
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

          {/* Glow orbs */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{ background: '#1a3cff', filter: 'blur(80px)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
            style={{ background: '#4169E1', filter: 'blur(60px)' }}
          />

          <div className="relative">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#93c5fd',
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: 'glowPulse 2s infinite' }} />
              🚀 Ready to Start Your Project?
            </motion.div>

            {/* Title */}
            <h2
              className="font-heading font-black text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}
            >
              Let's Build Something{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Amazing Together
              </span>
            </h2>

            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              From a simple website to a complete digital ecosystem, we have the expertise
              to bring your vision to life. Get your free consultation today!
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Link to="/contact">
                <motion.button
                  className="flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-bold text-lg"
                  style={{
                    background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                    boxShadow: '0 0 30px rgba(26,60,255,0.5)',
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(26,60,255,0.7)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Free Consultation <FiArrowRight size={18} />
                </motion.button>
              </Link>

              <motion.a
                href="https://wa.me/94764765358?text=Hello Hexora Solutions!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-bold text-lg"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  boxShadow: '0 0 20px rgba(37,211,102,0.3)',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(37,211,102,0.5)' }}
                whileTap={{ scale: 0.97 }}
              >
                <FaWhatsapp size={20} /> Chat on WhatsApp
              </motion.a>
            </div>

            {/* Contact Info chips */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="tel:+94764765358"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FiPhone size={16} className="text-blue-400" />
                <span className="text-sm">+94 76 476 5358</span>
              </a>
              <a
                href="mailto:info@hexora.lk"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FiMail size={16} className="text-blue-400" />
                <span className="text-sm">info@hexora.lk</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <FiMessageCircle size={16} className="text-green-400" />
                <span className="text-sm">24/7 Live Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactStrip