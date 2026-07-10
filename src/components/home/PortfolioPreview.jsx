import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

const projects = [
  {
    id: 1, title: 'MediCare Hospital System',
    category: 'ERP System', client: 'City Hospital',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    tags: ['React', 'Node.js', 'MySQL'], color: '#10b981',
    desc: 'Complete hospital management system with patient records, billing, and pharmacy.',
  },
  {
    id: 2, title: 'ShopMax E-Commerce Platform',
    category: 'Web Development', client: 'RetailMax',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tags: ['React', 'WooCommerce', 'Payment'], color: '#1a3cff',
    desc: 'Multi-vendor e-commerce platform with 10,000+ products and real-time inventory.',
  },
  {
    id: 3, title: 'EduLearn Mobile App',
    category: 'Mobile Apps', client: 'EduLearn Academy',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    tags: ['React Native', 'Firebase', 'AI'], color: '#8b5cf6',
    desc: 'Interactive learning app with AI-powered recommendations for 50,000+ students.',
  },
  {
    id: 4, title: 'LogiTrack Fleet Management',
    category: 'Software Development', client: 'FastShip Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    tags: ['GPS', 'Real-time', 'Analytics'], color: '#f97316',
    desc: 'Real-time fleet tracking system managing 500+ vehicles across Sri Lanka.',
  },
  {
    id: 5, title: 'FinFlow Banking Dashboard',
    category: 'Web Development', client: 'FinanceHub',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Vue.js', 'Node.js', 'Security'], color: '#06b6d4',
    desc: 'Secure online banking platform with AI fraud detection and real-time analytics.',
  },
  {
    id: 6, title: 'HotelPro Booking System',
    category: 'Web Development', client: 'Grand Paradise Hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    tags: ['React', 'Stripe', 'Calendar'], color: '#ec4899',
    desc: 'Complete hotel management with booking, POS, and housekeeping modules.',
  },
]

const PortfolioPreview = () => {
  const [current, setCurrent] = useState(0)
  const [isAuto, setIsAuto]   = useState(true)
  const intervalRef           = useRef(null)

  const next = () => setCurrent((p) => (p + 1) % projects.length)
  const prev = () => setCurrent((p) => (p - 1 + projects.length) % projects.length)

  useEffect(() => {
    if (isAuto) {
      intervalRef.current = setInterval(next, 4000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isAuto, current])

  const pauseAuto = () => {
    setIsAuto(false)
    setTimeout(() => setIsAuto(true), 8000)
  }

  const project = projects[current]

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="Our Portfolio"
          title={
            <>
              Recent{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Success Stories
              </span>
            </>
          }
          subtitle="Explore our latest projects and see how we've helped businesses transform their digital presence."
          align="center"
        />

        {/* Main Showcase */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5 }}
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${project.color}30, transparent)`,
                  }}
                />
                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-xs font-semibold"
                  style={{ background: project.color }}
                >
                  {project.category}
                </div>
              </div>

              {/* Info */}
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4"
                  style={{
                    background: `${project.color}10`,
                    color: project.color,
                    border: `1px solid ${project.color}30`,
                  }}
                >
                  {project.category}
                </div>

                <h3
                  className="font-heading font-bold text-gray-900 dark:text-white mb-3"
                  style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.2 }}
                >
                  {project.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Client */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ background: project.color }}
                  >
                    {project.client.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {project.client}
                    </div>
                    <div className="text-xs text-gray-400">Verified Client</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${project.color}10`,
                        color: project.color,
                        border: `1px solid ${project.color}20`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Link to={`/portfolio`}>
                    <motion.button
                      className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm"
                      style={{ background: project.color }}
                      whileHover={{ scale: 1.04, boxShadow: `0 0 25px ${project.color}60` }}
                      whileTap={{ scale: 0.97 }}
                    >
                      View Details <FiExternalLink size={15} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              onClick={() => { prev(); pauseAuto() }}
              className="w-11 h-11 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 border dark:border-gray-700"
              whileHover={{ scale: 1.1, background: '#1a3cff', color: 'white', borderColor: '#1a3cff' }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronLeft />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => { setCurrent(i); pauseAuto() }}
                  className="h-2 rounded-full transition-all duration-300"
                  animate={{
                    width: i === current ? 24 : 8,
                    background: i === current ? '#1a3cff' : '#d1d5db',
                  }}
                />
              ))}
            </div>

            <motion.button
              onClick={() => { next(); pauseAuto() }}
              className="w-11 h-11 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 border dark:border-gray-700"
              whileHover={{ scale: 1.1, background: '#1a3cff', color: 'white', borderColor: '#1a3cff' }}
              whileTap={{ scale: 0.9 }}
            >
              <FiChevronRight />
            </motion.button>
          </div>
        </div>

        {/* View all */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/portfolio">
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #1a3cff, #4169E1)' }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(26,60,255,0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              View All Projects <FiArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioPreview