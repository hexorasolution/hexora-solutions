import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar           from '../components/common/Navbar'
import Footer           from '../components/common/Footer'
import ScrollToTop      from '../components/common/ScrollToTop'
import WhatsAppButton   from '../components/common/WhatsAppButton'
import ScrollProgressBar from '../components/ui/ScrollProgressBar'
import { useTheme } from '../hooks/useTheme'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.3 } },
}

const PublicLayout = () => {
  const location = useLocation()
  const { isDark } = useTheme()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'dark' : ''}`}
      style={{ background: isDark ? '#0a0f1e' : '#f8faff' }}>

      <ScrollProgressBar />
      <Navbar />

      <main className="flex-1">
        <AnimatePresence >
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  )
}

export default PublicLayout