import { motion } from 'framer-motion'

const Badge = ({
  children,
  color    = '#1a3cff',
  dot      = false,
  pulse    = false,
  size     = 'md',
  className = '',
}) => {
  const sizes = {
    sm: 'px-2.5 py-0.5 text-xs',
    md: 'px-3.5 py-1.5 text-sm',
    lg: 'px-5 py-2 text-base',
  }

  return (
    <motion.span
      className={`inline-flex items-center gap-2 rounded-full font-semibold ${sizes[size]} ${className}`}
      style={{
        background: `${color}12`,
        color,
        border: `1px solid ${color}25`,
      }}
      whileHover={{ scale: 1.04 }}
    >
      {dot && (
        <span
          className={`w-2 h-2 rounded-full flex-shrink-0 ${pulse ? 'animate-pulse' : ''}`}
          style={{ background: color }}
        />
      )}
      {children}
    </motion.span>
  )
}

export default Badge