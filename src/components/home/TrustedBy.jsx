import { motion } from 'framer-motion'
import { useRef } from 'react'

const clients = [
  { name: 'TechCorp',      color: '#1a3cff' },
  { name: 'MediHealth',    color: '#10b981' },
  { name: 'EduLearn',      color: '#f59e0b' },
  { name: 'RetailMax',     color: '#8b5cf6' },
  { name: 'FinanceHub',    color: '#ec4899' },
  { name: 'CloudNine',     color: '#06b6d4' },
  { name: 'BuildCo',       color: '#f97316' },
  { name: 'LogiTrans',     color: '#1a3cff' },
  { name: 'HotelPro',      color: '#10b981' },
  { name: 'GovTech',       color: '#8b5cf6' },
  { name: 'ManufactX',     color: '#f59e0b' },
  { name: 'DataFlow',      color: '#06b6d4' },
]

const LogoCard = ({ client }) => (
  <motion.div
    className="flex-shrink-0 mx-4 px-8 py-4 rounded-2xl flex items-center justify-center"
    style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      minWidth: '160px',
    }}
    whileHover={{
      background: 'rgba(255,255,255,0.08)',
      borderColor: client.color + '40',
      scale: 1.05,
    }}
    transition={{ duration: 0.2 }}
  >
    {/* Placeholder logo with company initial */}
    <div className="flex items-center gap-3">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
        style={{ background: client.color }}
      >
        {client.name.charAt(0)}
      </div>
      <span className="text-gray-300 font-semibold text-sm whitespace-nowrap">
        {client.name}
      </span>
    </div>
  </motion.div>
)

const TrustedBy = () => {
  return (
    <section className="py-16 overflow-hidden"
      style={{ background: 'rgba(10,15,30,0.5)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="container mx-auto px-6 mb-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest font-medium">
            Trusted by leading companies across Sri Lanka & beyond
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll row 1 */}
      <div className="relative overflow-hidden mb-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, #0a0f1e, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, #0a0f1e, transparent)' }} />

        <motion.div
          className="flex"
          animate={{ x: [0, -50 + '%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ width: 'max-content' }}
        >
          {[...clients, ...clients].map((client, i) => (
            <LogoCard key={i} client={client} />
          ))}
        </motion.div>
      </div>

      {/* Infinite scroll row 2 (reverse) */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, #0a0f1e, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, #0a0f1e, transparent)' }} />

        <motion.div
          className="flex"
          animate={{ x: ['-50%', 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          style={{ width: 'max-content' }}
        >
          {[...clients.slice().reverse(), ...clients.slice().reverse()].map((client, i) => (
            <LogoCard key={i} client={client} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedBy