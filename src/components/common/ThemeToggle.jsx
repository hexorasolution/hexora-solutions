import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../../hooks/useTheme'

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative w-14 h-7 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-300
        ${isDark ? 'bg-blue-600' : 'bg-gray-200'}
      `}
      whileTap={{ scale: 0.95 }}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {/* Track icons */}
      <div className="absolute left-1.5 text-yellow-400">
        <FiSun size={12} />
      </div>
      <div className="absolute right-1.5 text-blue-200">
        <FiMoon size={12} />
      </div>

      {/* Thumb */}
      <motion.div
        className={`
          w-5 h-5 rounded-full shadow-md flex items-center justify-center z-10
          ${isDark ? 'bg-white text-blue-600' : 'bg-white text-yellow-500'}
        `}
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? <FiMoon size={10} /> : <FiSun size={10} />}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle