import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube,
  FiMail, FiPhone, FiMapPin, FiSend, FiArrowRight,
  FiCode, FiGlobe, FiSmartphone, FiShield, FiCloud,
} from 'react-icons/fi'
import { FaTiktok } from 'react-icons/fa'
import toast from 'react-hot-toast'
import api from '../../services/api'

const footerServices = [
  { label: 'Software Development', slug: 'software-development' },
  { label: 'Website Solutions',    slug: 'website-solutions' },
  { label: 'Mobile Applications',  slug: 'mobile-apps' },
  { label: 'Network & Security',   slug: 'network-security' },
  { label: 'Cloud Infrastructure', slug: 'cloud-infrastructure' },
  { label: 'Digital Marketing',    slug: 'digital-marketing' },
  { label: 'Graphic Design',       slug: 'graphic-design' },
  { label: 'IT Support',           slug: 'it-support' },
]

const quickLinks = [
  { label: 'About Us',    path: '/about' },
  { label: 'Portfolio',   path: '/portfolio' },
  { label: 'Industries',  path: '/industries' },
  { label: 'Blog',        path: '/blog' },
  { label: 'Careers',     path: '/careers' },
  { label: 'Contact Us',  path: '/contact' },
  { label: 'Client Login',path: '/client' },
]

const socials = [
  { icon: <FiFacebook />,  href: 'https://www.facebook.com/share/1CyPfPy4rq/', label: 'Facebook',  color: '#1877f2' },
  { icon: <FiInstagram />, href: 'https://www.instagram.com/hexorasolution?igsh=MXRwNHQyeHFkNXh2cg==', label: 'Instagram', color: '#e4405f' },
  { icon: <FiLinkedin />,  href: '#', label: 'LinkedIn',  color: '#0a66c2' },
  //{ icon: <FiTwitter />,   href: '#', label: 'Twitter',   color: '#1da1f2' },
  //{ icon: <FiYoutube />,   href: '#', label: 'YouTube',   color: '#ff0000' },
  { icon: <FaTiktok />,    href: '#', label: 'TikTok',    color: '#010101' },
]

const Footer = () => {
  const [email,   setEmail]   = useState('')
  const [loading, setLoading] = useState(false)

  const handleNewsletter = async (e) => {
    e.preventDefault()
    if (!email) return

    try {
      setLoading(true)
      await api.post('/public/newsletter', { email })
      toast.success('Subscribed successfully! Welcome to Hexora newsletter.')
      setEmail('')
    } catch {
      toast.error('Subscription failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #0a0f1e 100%)',
      }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,60,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,60,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: '#1a3cff', filter: 'blur(100px)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5"
        style={{ background: '#4169E1', filter: 'blur(80px)' }} />

      {/* Main Footer Content */}
      <div className="relative container mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1 – Company Info */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                  boxShadow: '0 0 20px rgba(26,60,255,0.4)',
                }}
              >
                <svg viewBox="0 0 100 100" width="28" height="28">
                  <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="white" opacity="0.9"/>
                  <text x="50" y="58" textAnchor="middle" fill="#1a3cff"
                    fontSize="36" fontWeight="900" fontFamily="Poppins">H</text>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold font-heading text-xl leading-none">
                  Hexora
                </h3>
                <p className="text-blue-400 text-xs tracking-widest uppercase mt-0.5">
                  Solutions
                </p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transforming businesses through innovative digital solutions.
              We build powerful software, websites, and digital systems
              that drive growth and success.
            </p>

            {/* Tagline */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(26,60,255,0.15)',
                border: '1px solid rgba(26,60,255,0.3)',
              }}
            >
              <span className="text-blue-400 text-xs tracking-widest font-medium">
                Innovate | Integrate | Empower
              </span>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  whileHover={{
                    scale: 1.15,
                    background: social.color,
                    color: '#fff',
                    boxShadow: `0 0 15px ${social.color}66`,
                    borderColor: social.color,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2 – Services */}
          <div>
            <h4 className="text-white font-semibold font-heading text-lg mb-6 flex items-center gap-2">
              <span
                className="w-5 h-5 rounded"
                style={{ background: 'linear-gradient(135deg, #1a3cff, #4169E1)' }}
              />
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200 group"
                  >
                    <FiArrowRight
                      size={12}
                      className="text-blue-500 group-hover:translate-x-1 transition-transform duration-200"
                    />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-heading text-lg mb-6 flex items-center gap-2">
              <span
                className="w-5 h-5 rounded"
                style={{ background: 'linear-gradient(135deg, #1a3cff, #4169E1)' }}
              />
              Quick Links
            </h4>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200 group"
                  >
                    <FiArrowRight
                      size={12}
                      className="text-blue-500 group-hover:translate-x-1 transition-transform duration-200"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:info@hexora.lk"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(26,60,255,0.15)' }}
                >
                  <FiMail size={14} className="text-blue-400" />
                </div>
                info@hexora.lk
              </a>
              <a
                href="tel:+94764765358"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(26,60,255,0.15)' }}
                >
                  <FiPhone size={14} className="text-blue-400" />
                </div>
                +94 76 476 5358
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(26,60,255,0.15)' }}
                >
                  <FiMapPin size={14} className="text-blue-400" />
                </div>
                <span>Kandy, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Column 4 – Newsletter */}
          <div>
            <h4 className="text-white font-semibold font-heading text-lg mb-6 flex items-center gap-2">
              <span
                className="w-5 h-5 rounded"
                style={{ background: 'linear-gradient(135deg, #1a3cff, #4169E1)' }}
              />
              Newsletter
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Subscribe to get the latest updates on technology, digital trends,
              and exclusive offers from Hexora Solutions.
            </p>

            <form onSubmit={handleNewsletter} className="relative mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 pr-14 rounded-xl text-white text-sm outline-none"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(26,60,255,0.5)'
                  e.target.style.boxShadow   = '0 0 0 3px rgba(26,60,255,0.1)'
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.target.style.boxShadow   = 'none'
                }}
              />
              <motion.button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-lg flex items-center justify-center text-white"
                style={{ background: 'linear-gradient(135deg, #1a3cff, #4169E1)' }}
                whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(26,60,255,0.5)' }}
                whileTap={{ scale: 0.9 }}
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <FiSend size={15} />
                )}
              </motion.button>
            </form>

            <p className="text-gray-600 text-xs">
              🔒 No spam. Unsubscribe anytime. We respect your privacy.
            </p>

            {/* App Badges placeholder */}
            <div className="mt-6 space-y-2">
              <p className="text-gray-500 text-xs uppercase tracking-wider font-medium">
                Certifications
              </p>
              <div className="flex flex-wrap gap-2">
                {['ISO 9001', 'SSL Secured', 'GDPR Ready'].map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1 text-xs rounded-full text-blue-400 font-medium"
                    style={{
                      background: 'rgba(26,60,255,0.1)',
                      border: '1px solid rgba(26,60,255,0.2)',
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Hexora Solutions. All rights reserved.
            Built with ❤️ in Sri Lanka.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy"
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms"
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/sitemap"
              className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-200">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer