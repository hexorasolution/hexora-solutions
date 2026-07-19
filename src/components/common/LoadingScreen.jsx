import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => onComplete?.(), 300)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #0a0f1e 100%)',
      }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26, 60, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26, 60, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10"
        style={{ background: '#1a3cff', filter: 'blur(80px)', animation: 'float 6s ease-in-out infinite' }} />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full opacity-10"
        style={{ background: '#4169E1', filter: 'blur(60px)', animation: 'floatReverse 8s ease-in-out infinite' }} />

      {/* Logo Animation */}
      <motion.div
        className="relative flex flex-col items-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
      >
        {/* Hexagon Logo */}
        <motion.div
          className="relative mb-6"
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="80" height="80" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a3cff" />
                <stop offset="100%" stopColor="#4169E1" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <polygon
              points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
              fill="url(#hexGrad)"
              filter="url(#glow)"
            />
            <text
              x="50" y="55"
              textAnchor="middle"
              fill="white"
              fontSize="28"
              fontWeight="900"
              fontFamily="Poppins, sans-serif"
            >
              H
            </text>
          </svg>
        </motion.div>

        {/* Company Name */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-3xl font-bold text-white font-heading">
            Hexora Solution
          </h1>
          <p className="text-sm text-blue-400 tracking-widest uppercase mt-1">
            Innovate | Integrate | Empower
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: 'linear-gradient(90deg, #1a3cff, #4169E1, #60a5fa)',
              width: `${progress}%`,
              transition: 'width 0.05s linear',
              boxShadow: '0 0 10px rgba(26, 60, 255, 0.8)',
            }}
          />
        </div>

        <motion.p
          className="text-blue-400/60 text-xs mt-3 tracking-wider"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading... {progress}%
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen