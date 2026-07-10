import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiLinkedin, FiTwitter, FiGithub, FiMail } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

const departments = ['All', 'Leadership', 'Development', 'Design', 'Marketing', 'Operations']

const team = [
  { name: 'Ashan Perera',       role: 'CEO & Founder',         dept: 'Leadership',   avatar: 'AP', color: '#1a3cff', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80',  bio: '10+ years in software & business leadership.' },
  { name: 'Nimasha Silva',      role: 'CTO',                   dept: 'Leadership',   avatar: 'NS', color: '#10b981', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80', bio: 'Cloud architect & full-stack engineering lead.' },
  { name: 'Kasun Fernando',     role: 'Lead Designer',         dept: 'Design',       avatar: 'KF', color: '#8b5cf6', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80', bio: 'Award-winning UI/UX with 8 years experience.' },
  { name: 'Dilani Rathnayake',  role: 'Project Manager',       dept: 'Operations',   avatar: 'DR', color: '#f59e0b', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80', bio: 'PMP certified, delivers complex projects on time.' },
  { name: 'Sahan Jayawardena',  role: 'Senior Developer',      dept: 'Development',  avatar: 'SJ', color: '#ec4899', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80', bio: 'React & Node.js expert, 6 years full-stack.' },
  { name: 'Malika Dissanayake', role: 'Marketing Head',        dept: 'Marketing',    avatar: 'MD', color: '#06b6d4', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=300&q=80', bio: 'Digital marketing strategist, SEO & paid ads.' },
  { name: 'Ruwan Kumara',       role: 'Mobile Developer',      dept: 'Development',  avatar: 'RK', color: '#f97316', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80', bio: 'React Native & Flutter specialist.' },
  { name: 'Sachini Wijesinghe', role: 'UI/UX Designer',        dept: 'Design',       avatar: 'SW', color: '#1a3cff', image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&q=80', bio: 'Figma expert creating beautiful user experiences.' },
]

const TeamCard = ({ member, i }) => (
  <motion.div
    className="relative rounded-2xl overflow-hidden group"
    style={{
      background: 'white',
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    }}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ delay: i * 0.08, duration: 0.5 }}
    whileHover={{ y: -8, boxShadow: `0 20px 40px ${member.color}20` }}
    layout
  >
    {/* Image */}
    <div className="relative aspect-square overflow-hidden">
      <motion.img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.5 }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to top, ${member.color}ee, transparent 50%)`,
        }}
      />

      {/* Social overlay */}
      <motion.div
        className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      >
        <div className="flex gap-2">
          {[
            { icon: <FiLinkedin size={15} />, href: '#' },
            { icon: <FiTwitter size={15} />,  href: '#' },
            { icon: <FiGithub size={15} />,   href: '#' },
            { icon: <FiMail size={15} />,     href: '#' },
          ].map((social, j) => (
            <motion.a
              key={j}
              href={social.href}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white"
              style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(10px)' }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: j * 0.05 }}
              whileHover={{ scale: 1.2, background: member.color }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Dept badge */}
      <div
        className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-xs font-bold"
        style={{ background: member.color }}
      >
        {member.dept}
      </div>
    </div>

    {/* Info */}
    <div className="p-5">
      <h3 className="font-heading font-bold text-gray-900 text-base mb-0.5">
        {member.name}
      </h3>
      <p style={{ color: member.color }} className="text-sm font-medium mb-2">
        {member.role}
      </p>
      <p className="text-gray-400 text-xs leading-relaxed">{member.bio}</p>
    </div>
  </motion.div>
)

const MeetTheTeam = () => {
  const [activeDept, setActiveDept] = useState('All')

  const filtered =
    activeDept === 'All'
      ? team
      : team.filter((m) => m.dept === activeDept)

  return (
    <section id="team" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="Our People"
          title={
            <>
              Meet The Brilliant{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Team
              </span>
            </>
          }
          subtitle="50+ talented professionals united by a passion for technology and a drive to deliver exceptional results."
          align="center"
        />

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map((dept) => (
            <motion.button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
              style={
                activeDept === dept
                  ? {
                      background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                      color: 'white',
                      boxShadow: '0 0 20px rgba(26,60,255,0.3)',
                    }
                  : {
                      background: 'rgba(26,60,255,0.05)',
                      color: '#1a3cff',
                      border: '1px solid rgba(26,60,255,0.2)',
                    }
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {dept}
            </motion.button>
          ))}
        </div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence>
            {filtered.map((member, i) => (
              <TeamCard key={member.name} member={member} i={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default MeetTheTeam