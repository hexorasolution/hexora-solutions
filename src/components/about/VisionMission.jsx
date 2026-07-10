import { motion } from 'framer-motion'
import { FiEye, FiTarget, FiCompass } from 'react-icons/fi'

const cards = [
  {
    icon:  <FiEye size={28} />,
    label: 'Our Vision',
    color: '#1a3cff',
    bg:    'rgba(26,60,255,0.1)',
    title: 'To Be Asia\'s Most Trusted Digital Partner',
    desc:  'We envision a future where every business — regardless of size — has access to innovative digital solutions that drive real growth. We aim to be the go-to technology partner for businesses across Asia by 2030.',
  },
  {
    icon:  <FiTarget size={28} />,
    label: 'Our Mission',
    color: '#10b981',
    bg:    'rgba(16,185,129,0.1)',
    title: 'Empowering Businesses Through Technology',
    desc:  'Our mission is to deliver cutting-edge, affordable, and scalable digital solutions that solve real business problems. We combine technical excellence with deep industry knowledge to create lasting impact.',
  },
  {
    icon:  <FiCompass size={28} />,
    label: 'Our Purpose',
    color: '#8b5cf6',
    bg:    'rgba(139,92,246,0.1)',
    title: 'Creating Digital Success Stories Every Day',
    desc:  'We exist to bridge the gap between technology and business success. Every line of code we write, every design we create, and every campaign we run is driven by one purpose — your growth.',
  },
]

const VisionMission = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 60%, #0a0f1e 100%)',
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
            style={{
              background: 'rgba(26,60,255,0.15)',
              border: '1px solid rgba(26,60,255,0.3)',
              color: '#93c5fd',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            What Drives Us
          </span>
          <h2
            className="font-heading font-bold text-white"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
          >
            Vision, Mission &{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Purpose
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="relative p-8 rounded-2xl text-center"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{
                y: -8,
                background: 'rgba(255,255,255,0.06)',
                borderColor: card.color + '40',
                boxShadow: `0 20px 40px ${card.color}15`,
              }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
                style={{ background: card.bg, color: card.color, border: `1px solid ${card.color}30` }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                {card.icon}
              </motion.div>

              {/* Label badge */}
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ background: card.bg, color: card.color }}
              >
                {card.label}
              </span>

              {/* Title */}
              <h3 className="text-white font-bold font-heading text-lg mb-4">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.desc}
              </p>

              {/* Bottom glow */}
              <motion.div
                className="absolute bottom-0 left-1/2 w-16 h-px -translate-x-1/2"
                style={{ background: card.color }}
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VisionMission