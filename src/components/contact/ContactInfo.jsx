import { motion } from 'framer-motion'
import {
  FiMail, FiPhone, FiMapPin, FiClock,
  FiMessageCircle, FiHeadphones,
} from 'react-icons/fi'
import {
  FaWhatsapp, FaFacebook, FaInstagram,
  FaLinkedin, FaTwitter,
} from 'react-icons/fa'
import { useTheme } from '../../hooks/useTheme'

const contactDetails = [
  {
    icon:  <FiPhone size={20} />,
    label: 'Call Us',
    value: '+94 76 476 5358',
    sub:   'Mon – Sat, 9AM – 6PM',
    color: '#1a3cff',
    href:  'tel:+94764765358',
  },
  {
    icon:  <FiMail size={20} />,
    label: 'Email Us',
    value: 'info@hexora.lk',
    sub:   'We reply within 24 hours',
    color: '#10b981',
    href:  'mailto:info@hexora.lk',
  },
  {
    icon:  <FaWhatsapp size={20} />,
    label: 'WhatsApp',
    value: '+94 76 476 5358',
    sub:   'Chat with us instantly',
    color: '#25D366',
    href:  'https://wa.me/94764765358',
  },
  {
    icon:  <FiMapPin size={20} />,
    label: 'Visit Us',
    value: 'Kandy, Sri Lanka',
    sub:   'By appointment only',
    color: '#8b5cf6',
    href:  'https://maps.google.com',
  },
  {
    icon:  <FiClock size={20} />,
    label: 'Business Hours',
    value: 'Mon – Fri: 9AM – 6PM',
    sub:   'Sat: 9AM – 1PM',
    color: '#f59e0b',
    href:  null,
  },
  {
    icon:  <FiHeadphones size={20} />,
    label: '24/7 Support',
    value: 'support@hexora.lk',
    sub:   'For existing clients',
    color: '#ec4899',
    href:  'mailto:support@hexora.lk',
  },
]

const socials = [
  { icon: <FaFacebook  size={18} />, href: 'https://www.facebook.com/share/1CyPfPy4rq/', label: 'Facebook',  color: '#1877f2' },
  { icon: <FaInstagram size={18} />, href: 'https://www.instagram.com/hexorasolution?igsh=MXRwNHQyeHFkNXh2cg==', label: 'Instagram', color: '#e4405f' },
  { icon: <FaLinkedin  size={18} />, href: '#', label: 'LinkedIn',  color: '#0a66c2' },
  { icon: <FaTwitter   size={18} />, href: '#', label: 'Twitter',   color: '#1da1f2' },
]

const ContactInfo = () => {
  const { isDark } = useTheme()

  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Header */}
      <div className="mb-8">
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
          style={{
            background: isDark ? 'rgba(26,60,255,0.15)' : 'rgba(26,60,255,0.08)',
            color: isDark ? '#60a5fa' : '#1a3cff',
            border: `1px solid ${isDark ? 'rgba(26,60,255,0.3)' : 'rgba(26,60,255,0.15)'}`,
          }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          Contact Information
        </span>
        <h2
          className="font-heading font-bold mb-3"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            lineHeight: 1.2,
            color: isDark ? '#ffffff' : '#111827',
          }}
        >
          We'd Love To{' '}
          <span
            style={{
              background: 'linear-gradient(135deg,#1a3cff,#4169E1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Hear From You
          </span>
        </h2>
        <p
          className="text-sm leading-relaxed"
          style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
        >
          Whether you have a project idea, a question, or just want to say hello —
          our team is here and ready to help you succeed.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="space-y-3 mb-8">
        {contactDetails.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                <ContactCard item={item} isDark={isDark} />
              </a>
            ) : (
              <ContactCard item={item} isDark={isDark} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <div>
        <p
          className="text-xs uppercase tracking-wider font-medium mb-4"
          style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
        >
          Follow Us On Social Media
        </p>
        <div className="flex gap-3">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              title={s.label}
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: isDark ? '#111827' : '#ffffff',
                border: `1px solid ${isDark ? '#1f2937' : '#e5e7eb'}`,
                boxShadow: isDark
                  ? '0 2px 8px rgba(0,0,0,0.3)'
                  : '0 2px 8px rgba(0,0,0,0.06)',
                color: isDark ? '#9ca3af' : '#6b7280',
              }}
              whileHover={{
                scale: 1.15,
                background: s.color,
                color: '#ffffff',
                borderColor: s.color,
                boxShadow: `0 0 15px ${s.color}50`,
              }}
              whileTap={{ scale: 0.9 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Live Chat Badge */}
      <motion.div
        className="mt-8 p-4 rounded-2xl flex items-center gap-4"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, rgba(26,60,255,0.15), rgba(65,105,225,0.08))'
            : 'linear-gradient(135deg, rgba(26,60,255,0.08), rgba(65,105,225,0.04))',
          border: `1px solid ${isDark ? 'rgba(26,60,255,0.3)' : 'rgba(26,60,255,0.15)'}`,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.01 }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'linear-gradient(135deg,#1a3cff,#4169E1)' }}
        >
          <FiMessageCircle size={22} className="text-white" />
        </div>
        <div className="flex-1">
          <div
            className="font-semibold text-sm flex items-center gap-2"
            style={{ color: isDark ? '#ffffff' : '#111827' }}
          >
            Live Chat Available
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>
          <div
            className="text-xs"
            style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
          >
            Average response: under 2 minutes
          </div>
        </div>
        <motion.button
          className="px-4 py-2 rounded-xl text-white text-xs font-bold"
          style={{ background: 'linear-gradient(135deg,#1a3cff,#4169E1)' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => window.open('https://wa.me/94764765358', '_blank')}
        >
          Chat Now
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

const ContactCard = ({ item, isDark }) => (
  <motion.div
    className="flex items-center gap-4 p-4 rounded-xl group cursor-pointer transition-all duration-300"
    style={{
      background: isDark ? '#111827' : '#ffffff',
      border: `1px solid ${isDark ? '#1f2937' : '#e5e7eb'}`,
      boxShadow: isDark
        ? '0 2px 8px rgba(0,0,0,0.3)'
        : '0 2px 8px rgba(0,0,0,0.04)',
    }}
    whileHover={{
      y: -2,
      borderColor: item.color + (isDark ? '60' : '40'),
      boxShadow: `0 8px 25px ${item.color}${isDark ? '25' : '15'}`,
    }}
  >
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
      style={{
        background: `${item.color}${isDark ? '20' : '12'}`,
        color: item.color,
      }}
    >
      {item.icon}
    </div>
    <div className="flex-1 min-w-0">
      <div
        className="text-xs font-medium mb-0.5"
        style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
      >
        {item.label}
      </div>
      <div
        className="font-semibold text-sm truncate"
        style={{ color: isDark ? '#ffffff' : '#111827' }}
      >
        {item.value}
      </div>
      <div
        className="text-xs"
        style={{ color: isDark ? '#6b7280' : '#9ca3af' }}
      >
        {item.sub}
      </div>
    </div>
    <motion.div
      className="opacity-0 group-hover:opacity-100 transition-opacity"
      style={{ color: item.color }}
    >
      →
    </motion.div>
  </motion.div>
)

export default ContactInfo