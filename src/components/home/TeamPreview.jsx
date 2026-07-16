import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiLinkedin, FiTwitter, FiGithub, FiArrowRight } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

const team = [
  {
    name:  'Mohamed Insaf',
    role:  'CEO & Founder',
    dept:  'Leadership',
    avatar:'AP',
    color: '#1a3cff',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio:   '6+ years in software engineering and business leadership.',
    socials: { linkedin: '#', twitter: '#', github: '#' },
  },
  {
    name:  'Mohammadu Samly',
    role:  'CTO',
    dept:  'Technology',
    avatar:'NS',
    color: '#10b981',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio:   'Full-stack architect with expertise in cloud and AI systems.',
    socials: { linkedin: '#', github: '#' },
  },
  /*
  {
    name:  'Kasun Fernando',
    role:  'Lead Designer',
    dept:  'Design',
    avatar:'KF',
    color: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio:   'Award-winning UI/UX designer with 8 years of experience.',
    socials: { linkedin: '#', twitter: '#' },
  },
  {
    name:  'Dilani Rathnayake',
    role:  'Project Manager',
    dept:  'Operations',
    avatar:'DR',
    color: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio:   'PMP certified project manager delivering complex projects on time.',
    socials: { linkedin: '#' },
  },*/
]

const FlipCard = ({ member, index }) => (
  <motion.div
    className="relative h-80 cursor-pointer"
    style={{ perspective: 1000 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.6 }}
  >
    <motion.div
      className="relative w-full h-full"
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.6s ease' }}
      whileHover={{ rotateY: 180 }}
    >
      {/* Front */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{ backfaceVisibility: 'hidden' }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${member.color}ee, transparent 50%)`,
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="text-white font-bold font-heading text-lg leading-none mb-1">
            {member.name}
          </div>
          <div className="text-white/70 text-sm">{member.role}</div>
        </div>
        <div
          className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-white text-xs font-medium"
          style={{ background: `${member.color}cc` }}
        >
          {member.dept}
        </div>
      </div>

      {/* Back */}
      <div
        className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center p-6 text-center"
        style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: `linear-gradient(135deg, ${member.color}20, ${member.color}40)`,
          border: `1px solid ${member.color}40`,
          backdropFilter: 'blur(20px)',
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4"
          style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}cc)` }}
        >
          {member.avatar}
        </div>
        <h3 className="text-white font-bold font-heading text-lg mb-1">{member.name}</h3>
        <p className="text-blue-300 text-sm mb-3">{member.role}</p>
        <p className="text-gray-300 text-xs leading-relaxed mb-5">{member.bio}</p>
        <div className="flex gap-3">
          {member.socials.linkedin && (
            <a href={member.socials.linkedin}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <FiLinkedin size={14} />
            </a>
          )}
          {member.socials.twitter && (
            <a href={member.socials.twitter}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <FiTwitter size={14} />
            </a>
          )}
          {member.socials.github && (
            <a href={member.socials.github}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <FiGithub size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
)

const TeamPreview = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="Meet The Team"
          title={
            <>
              The Brilliant Minds{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Behind Hexora
              </span>
            </>
          }
          subtitle="Our diverse team of passionate experts brings together years of experience to deliver exceptional digital solutions."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {team.map((member, i) => (
            <FlipCard key={member.name} member={member} index={i} />
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/about#team">
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #1a3cff, #4169E1)' }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(26,60,255,0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              Meet The Full Team <FiArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamPreview