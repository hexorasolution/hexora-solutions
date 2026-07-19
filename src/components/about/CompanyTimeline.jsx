import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const timeline = [
  {
    year:  '2024',
    title: 'Company Founded',
    desc:  'Hexora Solution was established with 3 founding members and a vision to democratize digital solutions for Sri Lankan businesses.',
    emoji: '🚀',
    color: '#1a3cff',
    milestones: ['First office opened', 'First 2 clients onboarded', 'Core team formed'],
  },
  {
    year:  '2024',
    title: 'First Major Project',
    desc:  'Delivered our first enterprise ERP system for a leading hospital in Colombo, marking our entry into the enterprise software market.',
    emoji: '⭐',
    color: '#10b981',
    milestones: ['Hospital ERP delivered', 'Team grew to 2 members', '5 projects completed'],
  },
  {
    year:  '2024',
    title: 'Team Expansion',
    desc:  'Expanded our team to 5+ professionals and opened a dedicated development center with state-of-the-art facilities.',
    emoji: '👥',
    color: '#8b5cf6',
    milestones: ['5+ team members', 'New development center', '5 clients milestone'],
  },
  {
    year:  '2024',
    title: '10+ Clients Milestone',
    desc:  'Achieved the landmark of 10+ satisfied clients and expanded our services to include mobile app development and digital marketing.',
    emoji: '🏆',
    color: '#f59e0b',
    milestones: ['10+ happy clients', 'Mobile division launched', 'Marketing team added'],
  },
  {
    year:  '2025',
    title: 'Growth',
    desc:  'Moved to a headquarters, expanded internationally.',
    emoji: '🏢',
    color: '#ec4899',
    milestones: ['New HQ opened', 'ISO 9001 certified', 'International expansion'],
  },
  {
    year:  '2025',
    title: 'AI Division Launched',
    desc:  'Launched our dedicated AI & Emerging Technologies division, introducing AI-powered solutions, machine learning, and intelligent automation.',
    emoji: '🤖',
    color: '#06b6d4',
    milestones: ['AI division launched', '5+ team members', '20+ projects delivered'],
  },
]

const CompanyTimeline = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 60%, #0a0f1e 100%)',
      }}
    >
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

      <div className="container mx-auto px-6 relative">
        <SectionTitle
          badge="Our Journey"
          title={
            <>
              2 Years of{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Innovation
              </span>
            </>
          }
          subtitle="From a small startup to Sri Lanka's leading digital agency — here's our journey."
          align="center"
          light
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                'linear-gradient(to bottom, #1a3cff, rgba(26,60,255,0.1))',
              transform: 'translateX(-50%)',
            }}
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className={`relative flex items-start gap-8 mb-14 ${
                i % 2 === 0
                  ? 'md:flex-row flex-col'
                  : 'md:flex-row-reverse flex-col'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
            >
              {/* Card */}
              <div className="flex-1">
                <motion.div
                  className="p-6 rounded-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)',
                  }}
                  whileHover={{
                    background: 'rgba(255,255,255,0.06)',
                    borderColor: item.color + '40',
                    boxShadow: `0 20px 40px ${item.color}10`,
                    y: -4,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{item.emoji}</span>
                    <span
                      className="font-heading font-black text-2xl"
                      style={{ color: item.color }}
                    >
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-white font-bold font-heading text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Milestones */}
                  <div className="space-y-1.5">
                    {item.milestones.map((m, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: item.color }}
                        />
                        <span className="text-gray-500 text-xs">{m}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Center dot */}
              <motion.div
                className="hidden md:flex flex-shrink-0 relative z-10"
                whileInView={{ scale: [0, 1.3, 1] }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.3, duration: 0.4 }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                    boxShadow: `0 0 20px ${item.color}60`,
                  }}
                >
                  {item.year.slice(2)}
                </div>
              </motion.div>

              {/* Spacer */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyTimeline