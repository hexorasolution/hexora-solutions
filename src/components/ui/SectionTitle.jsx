import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const SectionTitle = ({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  const { ref, isVisible } = useScrollAnimation()

  const alignClass = {
    center: 'text-center mx-auto',
    left:   'text-left',
    right:  'text-right ml-auto',
  }[align]

  return (
    <motion.div
      ref={ref}
      className={`max-w-3xl mb-14 ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      {badge && (
        <motion.span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
          style={{
            background: light ? 'rgba(255,255,255,0.15)' : 'rgba(26,60,255,0.1)',
            color:      light ? '#93c5fd' : '#2563eb',
            border:     `1px solid ${light ? 'rgba(255,255,255,0.2)' : 'rgba(26,60,255,0.2)'}`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: light ? '#60a5fa' : '#1a3cff' }}
          />
          {badge}
        </motion.span>
      )}

      <motion.h2
        className={`font-heading font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-gray-900 dark:text-white'
        }`}
        style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {title}
      </motion.h2>

      {/* Divider */}
      <motion.div
        className={`h-1 rounded-full mb-5 ${align === 'center' ? 'mx-auto' : ''}`}
        style={{
          width: 60,
          background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
        }}
        initial={{ scaleX: 0 }}
        animate={isVisible ? { scaleX: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.5 }}
      />

      {subtitle && (
        <motion.p
          className={`text-lg leading-relaxed ${
            light ? 'text-blue-100/80' : 'text-gray-500 dark:text-gray-400'
          }`}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionTitle