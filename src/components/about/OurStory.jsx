import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { FiCheckCircle } from 'react-icons/fi'

const highlights = [
  'Founded in 2020 with a vision to empower Sri Lankan businesses',
  'Grew from 3 to 50+ expert professionals in 5 years',
  'Delivered 250+ successful projects across 12+ countries',
  'Achieved 99% client satisfaction rate consistently',
  'Launched AI division in 2025 for next-gen solutions',
]

const OurStory = () => {
  const { ref: leftRef,  isVisible: leftVisible  } = useScrollAnimation()
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation()

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Images */}
          <motion.div
            ref={leftRef}
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={leftVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-square max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                alt="Hexora team at work"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(26,60,255,0.2), transparent)',
                }}
              />
            </div>

            {/* Floating card 1 */}
            <motion.div
              className="absolute -bottom-6 -right-6 p-5 rounded-2xl shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                minWidth: '200px',
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={leftVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-white/70 text-xs uppercase tracking-wider mb-1">
                Est.
              </div>
              <div className="text-white font-black font-heading text-4xl leading-none">
                2020
              </div>
              <div className="text-white/80 text-sm mt-1">
                Colombo, Sri Lanka
              </div>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              className="absolute -top-6 -right-6 p-4 rounded-2xl shadow-xl"
              style={{
                background: 'white',
                border: '1px solid #e5e7eb',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={leftVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'rgba(26,60,255,0.1)' }}
                >
                  🏆
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-sm">
                    Award Winner
                  </div>
                  <div className="text-gray-500 text-xs">
                    Best Tech Company 2024
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Background blob */}
            <div
              className="absolute -z-10 inset-0 rounded-3xl opacity-20"
              style={{
                background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                transform: 'translate(20px, 20px)',
              }}
            />
          </motion.div>

          {/* Right – Content */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 60 }}
            animate={rightVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
              style={{
                background: 'rgba(26,60,255,0.08)',
                color: '#1a3cff',
                border: '1px solid rgba(26,60,255,0.15)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Our Story
            </span>

            <h2
              className="font-heading font-bold text-gray-900 dark:text-white mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.15 }}
            >
              From a Small Team to{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Sri Lanka's Leading
              </span>{' '}
              Digital Agency
            </h2>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-5 text-lg">
              Hexora Solutions was born in 2020 from a simple belief — that every
              business in Sri Lanka deserves access to world-class digital solutions
              without the world-class price tag.
            </p>

            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              What started as a 3-person startup in a small office in Colombo has
              grown into a 50+ member powerhouse delivering enterprise-grade software,
              websites, mobile applications, and complete digital ecosystems to clients
              across Sri Lanka and 12+ countries worldwide.
            </p>

            {/* Highlights */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={rightVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <FiCheckCircle
                    size={20}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: '#1a3cff' }}
                  />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Founders */}
            <div
              className="flex items-center gap-4 p-4 rounded-2xl"
              style={{
                background: 'rgba(26,60,255,0.05)',
                border: '1px solid rgba(26,60,255,0.1)',
              }}
            >
              <div className="flex -space-x-3">
                {['AP', 'NS', 'KF'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-white"
                    style={{
                      background: ['#1a3cff', '#10b981', '#8b5cf6'][i],
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-gray-900 dark:text-white font-semibold text-sm">
                  Ashan, Nimasha & Kasun
                </div>
                <div className="text-gray-500 text-xs">Co-Founders of Hexora</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurStory