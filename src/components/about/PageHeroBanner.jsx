import { motion } from 'framer-motion'
import { Link }   from 'react-router-dom'
import { FiHome, FiChevronRight } from 'react-icons/fi'

const PageHeroBanner = ({
  badge,
  title,
  titleHighlight,
  subtitle,
  breadcrumb = [],
  image,
}) => {
  return (
    <section
      className="relative min-h-[520px] flex items-center overflow-hidden pt-24"
      style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 40%, #1a2f7a 70%, #0a0f1e 100%)',
      }}
    >
      {/* Background image overlay */}
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(10,15,30,0.95) 0%, rgba(13,27,62,0.85) 50%, rgba(10,15,30,0.95) 100%)',
            }}
          />
        </>
      )}

      {/* Grid overlay */}
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

      {/* Glow orbs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: '#1a3cff', filter: 'blur(100px)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10"
        style={{ background: '#4169E1', filter: 'blur(80px)' }}
      />

      {/* Decorative hexagons */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-5"
          style={{
            width:  60 + i * 40,
            height: 60 + i * 40,
            right:  `${10 + i * 8}%`,
            top:    `${20 + i * 10}%`,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 100 100" fill="none">
            <polygon
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              stroke="#4169E1"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          className="flex items-center gap-2 text-sm mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="flex items-center gap-1.5 text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            <FiHome size={14} />
            Home
          </Link>
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              <FiChevronRight size={14} className="text-gray-600" />
              {crumb.path ? (
                <Link
                  to={crumb.path}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-blue-400 font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          style={{
            background: 'rgba(26,60,255,0.15)',
            border: '1px solid rgba(26,60,255,0.3)',
            color: '#93c5fd',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span
            className="w-2 h-2 rounded-full bg-blue-400"
            style={{ animation: 'glowPulse 2s infinite' }}
          />
          {badge}
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-heading font-black text-white mb-5"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: 1.1 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {title}{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {titleHighlight}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-gray-300 text-lg max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>

        {/* Bottom decorative line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent, #1a3cff, #4169E1, transparent)',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        />
      </div>
    </section>
  )
}

export default PageHeroBanner