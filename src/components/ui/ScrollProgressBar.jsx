import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] origin-left"
      style={{
        scaleX,
        height: '3px',
        background: 'linear-gradient(90deg, #1a3cff, #4169E1, #60a5fa)',
        boxShadow: '0 0 10px rgba(26,60,255,0.6)',
      }}
    />
  )
}

export default ScrollProgressBar