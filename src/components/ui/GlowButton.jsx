import { motion } from 'framer-motion'

const GlowButton = ({
  children,
  onClick,
  href,
  variant  = 'primary',
  size     = 'md',
  icon,
  iconRight,
  className = '',
  disabled  = false,
  type      = 'button',
}) => {
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg',
  }

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #1a3cff 0%, #4169E1 100%)',
      color: '#fff',
      border: 'none',
      hoverShadow: '0 0 30px rgba(26, 60, 255, 0.6)',
    },
    outline: {
      background: 'transparent',
      color: '#fff',
      border: '2px solid rgba(255,255,255,0.5)',
      hoverShadow: '0 0 20px rgba(255,255,255,0.2)',
    },
    ghost: {
      background: 'rgba(26, 60, 255, 0.1)',
      color: '#4169E1',
      border: '1px solid rgba(26, 60, 255, 0.3)',
      hoverShadow: '0 0 20px rgba(26, 60, 255, 0.3)',
    },
    dark: {
      background: 'rgba(255,255,255,0.1)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.2)',
      hoverShadow: '0 0 20px rgba(255,255,255,0.1)',
    },
  }

  const style = variants[variant]

  const buttonProps = {
    className: `
      inline-flex items-center justify-center gap-2.5 rounded-full font-semibold
      transition-all duration-300 cursor-pointer select-none
      ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      ${className}
    `,
    style: {
      background:  style.background,
      color:       style.color,
      border:      style.border,
    },
    whileHover: disabled ? {} : {
      scale: 1.04,
      boxShadow: style.hoverShadow,
      y: -2,
    },
    whileTap: disabled ? {} : { scale: 0.97 },
    transition: { duration: 0.2 },
    onClick,
    disabled,
  }

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="flex-shrink-0">{iconRight}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a href={href} {...buttonProps} as="a">
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} {...buttonProps}>
      {content}
    </motion.button>
  )
}

export default GlowButton