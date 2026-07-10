import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const values = [
  { emoji: '💎', title: 'Excellence',    color: '#1a3cff', desc: 'We never compromise on quality. Every project is built to the highest standards with attention to every detail.' },
  { emoji: '🤝', title: 'Integrity',     color: '#10b981', desc: 'Transparency and honesty are at the core of everything we do. We keep our promises, always.' },
  { emoji: '🚀', title: 'Innovation',    color: '#8b5cf6', desc: 'We constantly push boundaries, exploring new technologies to deliver forward-thinking solutions.' },
  { emoji: '👥', title: 'Collaboration', color: '#f59e0b', desc: 'We work as true partners with our clients, ensuring their vision drives every decision.' },
  { emoji: '⚡', title: 'Speed',         color: '#ec4899', desc: 'We move fast without breaking things. Agile processes ensure rapid delivery without compromising quality.' },
  { emoji: '🌍', title: 'Impact',        color: '#06b6d4', desc: 'We measure success by the real-world impact our solutions create for businesses and communities.' },
]

const CoreValues = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="What We Stand For"
          title={
            <>
              Our Core{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Values
              </span>
            </>
          }
          subtitle="These values are not just words on a wall. They guide every decision, every line of code, and every client interaction."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={i}
              className="relative p-8 rounded-2xl overflow-hidden group"
              style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 40px ${value.color}20`,
                borderColor: value.color + '30',
              }}
            >
              {/* Hover bg */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top left, ${value.color}06, transparent 70%)`,
                }}
              />

              {/* Number */}
              <div
                className="absolute top-4 right-4 font-black font-heading opacity-5"
                style={{ fontSize: '4rem', color: value.color, lineHeight: 1 }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Emoji */}
              <motion.div
                className="text-5xl mb-5"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                {value.emoji}
              </motion.div>

              {/* Title */}
              <h3
                className="font-heading font-bold text-xl mb-3"
                style={{ color: value.color }}
              >
                {value.title}
              </h3>

              {/* Divider */}
              <motion.div
                className="h-0.5 rounded-full mb-4"
                style={{ background: `linear-gradient(135deg, ${value.color}, transparent)`, width: 40 }}
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.4 }}
              />

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreValues