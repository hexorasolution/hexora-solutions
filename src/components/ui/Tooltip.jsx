import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Tooltip = ({ children, content, position = 'top' }) => {
  const [show, setShow] = useState(false)

  const positionStyles = {
    top:    { bottom: '110%', left: '50%', transform: 'translateX(-50%)' },
    bottom: { top:    '110%', left: '50%', transform: 'translateX(-50%)' },
    left:   { right:  '110%', top:  '50%', transform: 'translateY(-50%)' },
    right:  { left:   '110%', top:  '50%', transform: 'translateY(-50%)' },
  }

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            className="absolute z-50 px-3 py-1.5 rounded-lg text-xs font-medium text-white whitespace-nowrap pointer-events-none"
            style={{
              ...positionStyles[position],
              background: 'rgba(10,15,30,0.95)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.15 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Tooltip