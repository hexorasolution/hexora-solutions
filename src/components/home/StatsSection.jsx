import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  FiCheckCircle, FiUsers, FiAward, FiTrendingUp,
  FiGlobe, FiClock, FiStar, FiZap,
} from 'react-icons/fi'

// ✅ Simple custom counter - no external dependency issues
const Counter = ({ end, duration = 2500, suffix = '' }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    const startValue = 0

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * (end - startValue) + startValue))
      if (progress < 1) requestAnimationFrame(animate)
      else setCount(end)
    }

    requestAnimationFrame(animate)
    return () => {}
  }, [end, duration])

  return <span>{count}{suffix}</span>
}

const stats = [
  {
    icon:   FiCheckCircle,
    end:    28,
    suffix: '+',
    label:  'Projects Completed',
    color:  '#1a3cff',
    bg:     'rgba(26,60,255,0.1)',
    desc:   'Delivered on time',
  },
  {
    icon:   FiUsers,
    end:    100,
    suffix: '+',
    label:  'Happy Clients',
    color:  '#10b981',
    bg:     'rgba(16,185,129,0.1)',
    desc:   'Worldwide',
  },
  {
    icon:   FiAward,
    end:    15,
    suffix: '+',
    label:  'Services Offered',
    color:  '#f59e0b',
    bg:     'rgba(245,158,11,0.1)',
    desc:   'Comprehensive solutions',
  },
  {
    icon:   FiStar,
    end:    99,
    suffix: '%',
    label:  'Client Satisfaction',
    color:  '#8b5cf6',
    bg:     'rgba(139,92,246,0.1)',
    desc:   'Rated 5 stars',
  },
  {
    icon:   FiGlobe,
    end:    3,
    suffix: '+',
    label:  'Countries Served',
    color:  '#ec4899',
    bg:     'rgba(236,72,153,0.1)',
    desc:   'Global reach',
  },
  {
    icon:   FiClock,
    end:    5,
    suffix: '+',
    label:  'Years Experience',
    color:  '#06b6d4',
    bg:     'rgba(6,182,212,0.1)',
    desc:   'Industry expertise',
  },
  {
    icon:   FiZap,
    end:    10,
    suffix: '+',
    label:  'Team Members',
    color:  '#f97316',
    bg:     'rgba(249,115,22,0.1)',
    desc:   'Expert professionals',
  },
  {
    icon:   FiTrendingUp,
    end:    299,
    suffix: '%',
    label:  'Average ROI',
    color:  '#1a3cff',
    bg:     'rgba(26,60,255,0.1)',
    desc:   'Client growth',
  },
]

const StatsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #0a0f1e 100%)',
      }}
    >
      {/* Background grid */}
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

      {/* Glow effects */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10"
        style={{ background: '#1a3cff', filter: 'blur(100px)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10"
        style={{ background: '#4169E1', filter: 'blur(80px)' }}
      />

      <div className="container mx-auto px-6 relative">
        {/* Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{
              background: 'rgba(26,60,255,0.15)',
              border: '1px solid rgba(26,60,255,0.3)',
              color: '#93c5fd',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            Numbers That Speak
          </span>
          <h2
            className="font-heading font-bold text-white mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Our Achievements in{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Numbers
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We've helped hundreds of businesses transform their digital presence
            and achieve remarkable growth with our solutions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => {
            // ✅ Store icon component in a variable - NOT JSX in data
            const IconComponent = stat.icon

            return (
              <motion.div
                key={i}
                className="relative p-6 rounded-2xl text-center group cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  background: 'rgba(255,255,255,0.06)',
                  borderColor: stat.color + '40',
                  boxShadow: `0 20px 40px ${stat.color}20`,
                }}
              >
                {/* Icon ✅ Rendered as component not JSX object */}
                <motion.div
                  className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl"
                  style={{ background: stat.bg, color: stat.color }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent />
                </motion.div>

                {/* Number ✅ Using custom Counter */}
                <div
                  className="font-heading font-black mb-1"
                  style={{
                    fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                    color: stat.color,
                    lineHeight: 1,
                  }}
                >
                  {inView ? (
                    <Counter
                      end={stat.end}
                      duration={2500}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>

                {/* Label */}
                <div className="text-white font-semibold text-sm mb-1">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-gray-500 text-xs">{stat.desc}</div>

                {/* Glow dot */}
                <div
                  className="absolute top-3 right-3 w-2 h-2 rounded-full"
                  style={{
                    background: stat.color,
                    boxShadow: `0 0 8px ${stat.color}`,
                    animation: 'glowPulse 2s ease-in-out infinite',
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsSection