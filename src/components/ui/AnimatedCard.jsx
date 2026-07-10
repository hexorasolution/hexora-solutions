import { motion } from 'framer-motion'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const AnimatedCard = ({
  children,
  delay     = 0,
  className = '',
  hover     = true,
  glow      = false,
  glass     = false,
  dark      = false,
  onClick,
}) => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      className={`
        rounded-2xl transition-all duration-300
        ${glass ? 'backdrop-blur-md' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      style={{
        background: glass
          ? 'rgba(255, 255, 255, 0.05)'
          : dark
          ? '#111827'
          : 'white',
        border: glass
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : glow
          ? '1px solid rgba(26, 60, 255, 0.2)'
          : '1px solid #e5e7eb',
        boxShadow: glow
          ? '0 4px 20px rgba(26, 60, 255, 0.1)'
          : '0 4px 20px rgba(0,0,0,0.08)',
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={
        hover
          ? {
              y: -8,
              boxShadow: glow
                ? '0 20px 40px rgba(26, 60, 255, 0.25)'
                : '0 20px 40px rgba(0,0,0,0.15)',
              borderColor: glow ? 'rgba(26, 60, 255, 0.5)' : undefined,
            }
          : {}
      }
    >
      {children}
    </motion.div>
  )
}

export default AnimatedCard