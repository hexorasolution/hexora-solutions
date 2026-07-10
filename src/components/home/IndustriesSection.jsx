import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../ui/SectionTitle'
import { useTheme } from '../../hooks/useTheme'

const industries = [
  { emoji: '🏥', title: 'Healthcare',          slug: 'healthcare',      color: '#10b981', desc: 'Hospital management, patient records, telemedicine' },
  { emoji: '🎓', title: 'Education',           slug: 'education',       color: '#f59e0b', desc: 'LMS platforms, student portals, e-learning' },
  { emoji: '🛍️', title: 'Retail & E-commerce', slug: 'retail',          color: '#ec4899', desc: 'Online stores, POS, inventory management' },
  { emoji: '🏦', title: 'Finance & Banking',   slug: 'finance',         color: '#1a3cff', desc: 'Banking software, fintech, payment systems' },
  { emoji: '🏨', title: 'Hotel & Restaurant',  slug: 'hotel',           color: '#8b5cf6', desc: 'Reservation systems, POS, kitchen management' },
  { emoji: '🏛️', title: 'Government',          slug: 'government',      color: '#06b6d4', desc: 'e-Government, citizen portals, public services' },
  { emoji: '🏭', title: 'Manufacturing',       slug: 'manufacturing',   color: '#f97316', desc: 'Production tracking, quality control, supply chain' },
  { emoji: '🏗️', title: 'Construction',        slug: 'construction',    color: '#10b981', desc: 'Project management, resource tracking, budgeting' },
  { emoji: '🚛', title: 'Logistics',           slug: 'logistics',       color: '#1a3cff', desc: 'Fleet management, route optimization, tracking' },
]

const IndustriesSection = () => {
  const { isDark } = useTheme()

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="Industries We Serve"
          title={
            <>
              Solutions Across{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Every Industry
              </span>
            </>
          }
          subtitle="We have deep expertise across diverse industries, delivering tailored digital solutions that solve real business challenges."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.slug}
              className="relative p-6 rounded-2xl group cursor-pointer overflow-hidden"
              style={{
                background: isDark ? '#111827' : '#ffffff',
                border: `1px solid ${isDark ? '#1f2937' : '#e5e7eb'}`,
                boxShadow: isDark
                  ? '0 4px 20px rgba(0,0,0,0.3)'
                  : '0 4px 20px rgba(0,0,0,0.06)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{
                y: -6,
                boxShadow: `0 20px 40px ${industry.color}${isDark ? '40' : '20'}`,
                borderColor: industry.color + '60',
              }}
            >
              {/* Background gradient on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${industry.color}${isDark ? '10' : '05'}, ${industry.color}${isDark ? '20' : '10'})`,
                }}
              />

              <div className="relative flex items-start gap-4">
                {/* Emoji icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{
                    background: `${industry.color}${isDark ? '20' : '10'}`,
                    border: `1px solid ${industry.color}${isDark ? '40' : '20'}`,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {industry.emoji}
                </motion.div>

                <div className="flex-1">
                  <h3
                    className="font-heading font-bold mb-2"
                    style={{
                      fontSize: '1.05rem',
                      color: isDark ? '#ffffff' : '#111827',
                    }}
                  >
                    {industry.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                  >
                    {industry.desc}
                  </p>
                </div>
              </div>

              {/* Bottom bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 rounded-full"
                style={{ background: `linear-gradient(135deg, ${industry.color}, transparent)` }}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
              />
            </motion.div>
          ))}
        </div>

        {/* View all industries */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/industries">
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold border-2"
              style={{
                borderColor: 'rgba(26,60,255,0.3)',
                color: isDark ? '#60a5fa' : '#1a3cff',
                background: 'transparent',
              }}
              whileHover={{
                background: '#1a3cff',
                color: '#ffffff',
                borderColor: '#1a3cff',
                scale: 1.02,
              }}
              whileTap={{ scale: 0.97 }}
            >
              View All Industries
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default IndustriesSection