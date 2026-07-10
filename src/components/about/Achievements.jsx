import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { useTheme } from '../../hooks/useTheme'

const achievements = [
  { emoji: '🏆', title: 'Best Tech Company 2024',    org: 'Sri Lanka Tech Awards',   year: '2024', color: '#f59e0b' },
  { emoji: '🥇', title: 'Top Software Developer',    org: 'SLASSCOM Awards',         year: '2023', color: '#1a3cff' },
  { emoji: '📜', title: 'ISO 9001:2015 Certified',   org: 'International Standards', year: '2024', color: '#10b981' },
  { emoji: '⭐', title: '5-Star Client Rating',      org: 'Clutch.co Platform',      year: '2024', color: '#8b5cf6' },
  { emoji: '🌐', title: 'Best Digital Agency',       org: 'Digital Lanka Awards',    year: '2023', color: '#ec4899' },
  { emoji: '💼', title: 'Top Employer of the Year',  org: 'HR Excellence Awards',    year: '2024', color: '#06b6d4' },
]

const Achievements = () => {
  const { isDark } = useTheme()

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="Recognition & Awards"
          title={
            <>
              Our{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Achievements
              </span>
            </>
          }
          subtitle="Industry recognition that validates our commitment to excellence and innovation."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-5 p-6 rounded-2xl group transition-all duration-300"
              style={{
                background: isDark ? '#111827' : '#ffffff',
                border: `1px solid ${isDark ? '#1f2937' : '#e5e7eb'}`,
                boxShadow: isDark
                  ? '0 4px 20px rgba(0,0,0,0.4)'
                  : '0 4px 20px rgba(0,0,0,0.06)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 40px ${item.color}${isDark ? '30' : '15'}`,
                borderColor: item.color + (isDark ? '50' : '30'),
              }}
            >
              <motion.div
                className="text-5xl flex-shrink-0"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                {item.emoji}
              </motion.div>
              <div>
                <h3 
                  className="font-bold text-base mb-1 transition-colors"
                  style={{ color: isDark ? '#ffffff' : '#111827' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-sm mb-1 transition-colors"
                  style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                >
                  {item.org}
                </p>
                <span
                  className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold"
                  style={{ 
                    background: `${item.color}${isDark ? '25' : '10'}`, 
                    color: item.color 
                  }}
                >
                  {item.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements