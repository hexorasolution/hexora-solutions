import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const steps = [
  {
    number: '01',
    title:  'Free Consultation',
    desc:   'We start with a deep-dive consultation to understand your business goals, challenges, and vision.',
    icon:   '💬',
    color:  '#1a3cff',
  },
  {
    number: '02',
    title:  'Strategy & Planning',
    desc:   'Our experts create a detailed project roadmap with timelines, technology stack, and cost breakdown.',
    icon:   '📋',
    color:  '#10b981',
  },
  {
    number: '03',
    title:  'UI/UX Design',
    desc:   'We design stunning, user-friendly interfaces with wireframes and interactive prototypes for your approval.',
    icon:   '🎨',
    color:  '#f59e0b',
  },
  {
    number: '04',
    title:  'Development',
    desc:   'Our developers build your solution using cutting-edge technologies with clean, maintainable code.',
    icon:   '⚡',
    color:  '#8b5cf6',
  },
  {
    number: '05',
    title:  'Testing & QA',
    desc:   'Rigorous testing across all devices and browsers ensures your solution works flawlessly.',
    icon:   '🔍',
    color:  '#ec4899',
  },
  {
    number: '06',
    title:  'Deployment',
    desc:   'We deploy your solution to production with zero downtime and handle all server configurations.',
    icon:   '🚀',
    color:  '#06b6d4',
  },
  {
    number: '07',
    title:  'Ongoing Support',
    desc:   'Post-launch, we provide continuous maintenance, updates, and 24/7 technical support.',
    icon:   '🛡️',
    color:  '#f97316',
  },
]

const ProcessSection = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 60%, #0a0f1e 100%)',
      }}
    >
      {/* Grid */}
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
          badge="Our Process"
          title={
            <>
              How We Turn Your{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Vision Into Reality
              </span>
            </>
          }
          subtitle="Our proven 7-step process ensures every project is delivered on time, on budget, and exceeds your expectations."
          align="center"
          light
        />

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 hidden md:block"
            style={{
              background: 'linear-gradient(to bottom, #1a3cff, rgba(26,60,255,0.1))',
              transform: 'translateX(-50%)',
            }}
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={`relative flex items-center gap-8 mb-10 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:flex-row`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
            >
              {/* Card */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <motion.div
                  className="inline-block p-6 rounded-2xl max-w-sm"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)',
                  }}
                  whileHover={{
                    background: 'rgba(255,255,255,0.06)',
                    borderColor: step.color + '40',
                    boxShadow: `0 20px 40px ${step.color}15`,
                    y: -4,
                  }}
                >
                  <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <span className="text-2xl">{step.icon}</span>
                    <span
                      className="font-heading font-black text-3xl"
                      style={{ color: step.color, opacity: 0.3 }}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-white font-bold font-heading text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </div>

              {/* Center dot */}
              <motion.div
                className="relative z-10 flex-shrink-0 hidden md:flex"
                whileInView={{ scale: [0, 1.3, 1] }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                    boxShadow: `0 0 25px ${step.color}60`,
                  }}
                >
                  {i + 1}
                </div>
              </motion.div>

              {/* Right side spacer */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection