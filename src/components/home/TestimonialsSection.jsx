import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

const testimonials = [
  {
    id: 1,
    name:    'Rajesh Kumar',
    role:    'CEO, TechCorp Lanka',
    avatar:  'RK',
    color:   '#1a3cff',
    rating:  5,
    text:    'Hexora Solutions transformed our entire business operations. Their ERP system reduced our processing time by 70% and the team was incredibly professional throughout the project.',
    company: 'TechCorp Lanka',
    project: 'ERP System Development',
  },
  {
    id: 2,
    name:    'Sarah Fernando',
    role:    'Director, MediCare Hospital',
    avatar:  'SF',
    color:   '#10b981',
    rating:  5,
    text:    'The hospital management system Hexora built for us is exceptional. Patient data management, billing, and pharmacy modules work seamlessly. Highly recommend their services!',
    company: 'MediCare Hospital',
    project: 'Hospital Management System',
  },
  {
    id: 3,
    name:    'Asanka Perera',
    role:    'MD, RetailMax',
    avatar:  'AP',
    color:   '#8b5cf6',
    rating:  5,
    text:    'Our e-commerce platform handles 10,000+ orders daily without any issues. Hexora\'s development team is top-notch and the ongoing support is outstanding.',
    company: 'RetailMax',
    project: 'E-Commerce Platform',
  },
  {
    id: 4,
    name:    'Priya Nair',
    role:    'Founder, EduLearn Academy',
    avatar:  'PN',
    color:   '#f59e0b',
    rating:  5,
    text:    'The mobile app Hexora developed for our academy has over 50,000 active students. The AI-powered learning features are truly impressive and our students love it!',
    company: 'EduLearn Academy',
    project: 'Education Mobile App',
  },
  {
    id: 5,
    name:    'Chaminda Silva',
    role:    'COO, FastShip Logistics',
    avatar:  'CS',
    color:   '#f97316',
    rating:  5,
    text:    'Real-time fleet tracking across 500+ vehicles was a challenge we thought would take years. Hexora delivered it in 3 months and it works perfectly. Game changer for our business!',
    company: 'FastShip Logistics',
    project: 'Fleet Management System',
  },
  {
    id: 6,
    name:    'Dilani Jayawardena',
    role:    'GM, Grand Paradise Hotel',
    avatar:  'DJ',
    color:   '#ec4899',
    rating:  5,
    text:    'From booking system to housekeeping management, Hexora covered everything. Our staff loves the intuitive interface and our revenue increased by 40% after implementation.',
    company: 'Grand Paradise Hotel',
    project: 'Hotel Management System',
  },
]

const StarRating = ({ rating }) => (
  <div className="flex gap-1">
    {[1,2,3,4,5].map((star) => (
      <FiStar
        key={star}
        size={16}
        fill={star <= rating ? '#f59e0b' : 'none'}
        color={star <= rating ? '#f59e0b' : '#6b7280'}
      />
    ))}
  </div>
)

const TestimonialsSection = () => {
  const [current, setCurrent]     = useState(0)
  const [direction, setDirection] = useState(1)
  const [auto, setAuto]           = useState(true)
  const intervalRef               = useRef(null)

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ]

  const next = () => {
    setDirection(1)
    setCurrent((p) => (p + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (auto) {
      intervalRef.current = setInterval(next, 5000)
    }
    return () => clearInterval(intervalRef.current)
  }, [auto, current])

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 60%, #0a0f1e 100%)',
      }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,60,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,60,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Quote icon decoration */}
      <div
        className="absolute top-12 left-12 text-9xl font-serif opacity-5 text-blue-400"
        style={{ lineHeight: 1 }}
      >
        "
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionTitle
          badge="Client Testimonials"
          title={
            <>
              What Our{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Clients Say
              </span>
            </>
          }
          subtitle="Don't just take our word for it. Here's what our satisfied clients have to say about working with Hexora Solutions."
          align="center"
          light
        />

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {visible.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              className="relative p-6 rounded-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
              }}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{
                y: -6,
                background: 'rgba(255,255,255,0.07)',
                borderColor: testimonial.color + '40',
                boxShadow: `0 20px 40px ${testimonial.color}15`,
              }}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <FiMessageSquare
                  size={24}
                  style={{ color: testimonial.color, opacity: 0.6 }}
                />
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Project tag */}
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-5"
                style={{
                  background: `${testimonial.color}15`,
                  color: testimonial.color,
                  border: `1px solid ${testimonial.color}30`,
                }}
              >
                {testimonial.project}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}cc)`,
                    boxShadow: `0 0 15px ${testimonial.color}40`,
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <motion.button
            onClick={() => { prev(); setAuto(false) }}
            className="w-11 h-11 rounded-full flex items-center justify-center text-gray-400"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            whileHover={{ scale: 1.1, background: '#1a3cff', color: 'white' }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronLeft />
          </motion.button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => { setCurrent(i); setAuto(false) }}
                className="h-2 rounded-full"
                animate={{
                  width: i === current ? 24 : 8,
                  background: i === current ? '#4169E1' : 'rgba(255,255,255,0.2)',
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>

          <motion.button
            onClick={() => { next(); setAuto(false) }}
            className="w-11 h-11 rounded-full flex items-center justify-center text-gray-400"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            whileHover={{ scale: 1.1, background: '#1a3cff', color: 'white' }}
            whileTap={{ scale: 0.9 }}
          >
            <FiChevronRight />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection