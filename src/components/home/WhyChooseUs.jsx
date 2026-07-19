import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Stars } from '@react-three/drei'
import {
  FiZap, FiShield, FiUsers, FiAward,
  FiHeadphones, FiTrendingUp, FiCheckCircle, FiGlobe,
} from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

const reasons = [
  {
    icon:  <FiZap />,
    title: 'Lightning Fast Delivery',
    desc:  'We meet deadlines without compromising quality. Our agile process ensures your project is delivered on time, every time.',
    color: '#f59e0b',
  },
  {
    icon:  <FiShield />,
    title: 'Enterprise-Grade Security',
    desc:  'Your data is protected with bank-level security, SSL certificates, and regular security audits.',
    color: '#10b981',
  },
  {
    icon:  <FiUsers />,
    title: 'Expert Team of 50+',
    desc:  'Our team of certified developers, designers, and marketers brings deep expertise across all domains.',
    color: '#1a3cff',
  },
  {
    icon:  <FiAward />,
    title: 'Award-Winning Quality',
    desc:  'Recognized for excellence in digital solutions with multiple industry awards and ISO certifications.',
    color: '#8b5cf6',
  },
  {
    icon:  <FiHeadphones />,
    title: '24/7 Dedicated Support',
    desc:  'Round-the-clock technical support ensures your systems are always running at peak performance.',
    color: '#ec4899',
  },
  {
    icon:  <FiTrendingUp />,
    title: 'Proven ROI Results',
    desc:  'Our clients see an average 300% ROI within the first year of implementing our digital solutions.',
    color: '#06b6d4',
  },
  {
    icon:  <FiCheckCircle />,
    title: 'Transparent Process',
    desc:  'Real-time project tracking, weekly reports, and complete transparency throughout the development lifecycle.',
    color: '#f97316',
  },
  {
    icon:  <FiGlobe />,
    title: 'Global Standards',
    desc:  'We build solutions following international best practices, accessible on all devices worldwide.',
    color: '#1a3cff',
  },
]

const WhyChooseUs = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 60%, #0a0f1e 100%)',
      }}
    >
      {/* Stars background */}
      <div className="absolute inset-0 opacity-40">
        <Canvas>
          <Suspense fallback={null}>
            <Stars radius={100} depth={50} count={2000} factor={4} fade speed={0.3} />
          </Suspense>
        </Canvas>
      </div>

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
          badge="Why Hexora?"
          title={
            <>
              Why Businesses Choose{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hexora Solution
              </span>
            </>
          }
          subtitle="We don't just build software — we build lasting partnerships. Here's what makes us different from the rest."
          align="center"
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="relative p-6 rounded-2xl group"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{
                y: -8,
                background: 'rgba(255,255,255,0.06)',
                borderColor: reason.color + '40',
                boxShadow: `0 20px 40px ${reason.color}15`,
              }}
            >
              {/* Icon */}
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{
                  background: `${reason.color}15`,
                  color: reason.color,
                  border: `1px solid ${reason.color}30`,
                }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                {reason.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-white font-bold font-heading text-base mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.desc}
              </p>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-16 h-16 rounded-tr-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${reason.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs