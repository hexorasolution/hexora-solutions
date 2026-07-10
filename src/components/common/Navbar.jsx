import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiMenu, FiX, FiChevronDown, FiCode, FiGlobe, FiSmartphone,
  FiShield, FiCloud, FiPrinter, FiPenTool, FiTrendingUp,
  FiSettings, FiBriefcase, FiCpu, FiDatabase,
} from 'react-icons/fi'
import ThemeToggle from '../ui/../common/ThemeToggle'
import { useTheme } from '../../hooks/useTheme'

const services = [
  { icon: <FiCode />,       label: 'Software Development',   slug: 'software-development' },
  { icon: <FiGlobe />,      label: 'Website Solutions',      slug: 'website-solutions' },
  { icon: <FiSmartphone />, label: 'Mobile Apps',            slug: 'mobile-apps' },
  { icon: <FiShield />,     label: 'Network & Security',     slug: 'network-security' },
  { icon: <FiCloud />,      label: 'Cloud Infrastructure',   slug: 'cloud-infrastructure' },
  { icon: <FiPrinter />,    label: 'Digital Printing',       slug: 'digital-printing' },
  { icon: <FiPenTool />,    label: 'Graphic Design',         slug: 'graphic-design' },
  { icon: <FiTrendingUp />, label: 'Digital Marketing',      slug: 'digital-marketing' },
  { icon: <FiSettings />,   label: 'IT Support',             slug: 'it-support' },
  { icon: <FiBriefcase />,  label: 'Business Solutions',     slug: 'business-solutions' },
  { icon: <FiCpu />,        label: 'Emerging Technologies',  slug: 'emerging-technologies' },
  { icon: <FiDatabase />,   label: 'BPO & Data Entry',       slug: 'bpo-data-entry' },
]

const navLinks = [
  { label: 'Home',       path: '/' },
  { label: 'About',      path: '/about' },
  { label: 'Services',   path: '/services', dropdown: true },
  { label: 'Portfolio',  path: '/portfolio' },
  { label: 'Industries', path: '/industries' },
  { label: 'Blog',       path: '/blog' },
  { label: 'Careers',    path: '/careers' },
  { label: 'Contact',    path: '/contact' },
]

const Navbar = () => {
  const [scrolled,        setScrolled]        = useState(false)
  const [mobileOpen,      setMobileOpen]      = useState(false)
  const [servicesOpen,    setServicesOpen]    = useState(false)
  const [mobileServices,  setMobileServices]  = useState(false)
  const { isDark } = useTheme()
  const location   = useLocation()
  const servicesRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        style={!scrolled ? { background: 'transparent' } : {}}
      >
        <div className="navbar__container">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <svg viewBox="0 0 100 100">
                <polygon
                  points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                  fill="white"
                  opacity="0.9"
                />
                <text x="50" y="58" textAnchor="middle" fill="#1a3cff"
                  fontSize="36" fontWeight="900" fontFamily="Poppins">H</text>
              </svg>
            </div>
            <div className="navbar__logo-text">
              <span className={`name ${!scrolled && !isDark ? 'text-white' : ''}`}>
                Hexora
              </span>
              <span className="tagline">Solutions</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="navbar__menu">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="navbar__item"
                onMouseEnter={() => link.dropdown && setServicesOpen(true)}
                onMouseLeave={() => link.dropdown && setServicesOpen(false)}
                ref={link.dropdown ? servicesRef : null}
              >
                <Link
                  to={link.path}
                  className={`navbar__link ${isActive(link.path) ? 'active' : ''} ${
                    !scrolled && !isDark ? 'text-white/90 hover:text-white' : ''
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <motion.span
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiChevronDown size={14} />
                    </motion.span>
                  )}
                </Link>

                {/* Services Dropdown */}
                {link.dropdown && (
                  <div className="navbar__dropdown" style={{ minWidth: '600px', left: '50%', transform: 'translateX(-50%)' }}>
                    <div className="grid grid-cols-3 gap-1 p-2">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="navbar__dropdown-item"
                        >
                          <span className="icon">{service.icon}</span>
                          <span className="text-sm">{service.label}</span>
                        </Link>
                      ))}
                    </div>
                    <div
                      className="mt-2 p-3 mx-2 mb-2 rounded-xl flex items-center justify-between"
                      style={{ background: 'linear-gradient(135deg, rgba(26,60,255,0.1), rgba(65,105,225,0.1))' }}
                    >
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        View all services
                      </span>
                      <Link
                        to="/services"
                        className="text-xs px-3 py-1.5 rounded-full font-semibold text-white"
                        style={{ background: 'linear-gradient(135deg, #1a3cff, #4169E1)' }}
                      >
                        All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="navbar__actions">
            <ThemeToggle />

            <Link to="/contact" className="navbar__cta">
              Get Free Quote
            </Link>

            {/* Hamburger */}
            <button
              className={`navbar__hamburger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span style={{ background: !scrolled && !isDark ? 'white' : undefined }} />
              <span style={{ background: !scrolled && !isDark ? 'white' : undefined }} />
              <span style={{ background: !scrolled && !isDark ? 'white' : undefined }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${mobileOpen ? 'open' : ''}`}>
        {/* Header */}
        <div className="navbar__mobile-header">
          <Link to="/" className="navbar__logo" onClick={() => setMobileOpen(false)}>
            <div className="navbar__logo-icon">
              <svg viewBox="0 0 100 100">
                <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="white" opacity="0.9"/>
                <text x="50" y="58" textAnchor="middle" fill="#1a3cff"
                  fontSize="36" fontWeight="900" fontFamily="Poppins">H</text>
              </svg>
            </div>
            <div className="navbar__logo-text">
              <span className="name">Hexora</span>
              <span className="tagline">Solutions</span>
            </div>
          </Link>
          <button
            className="navbar__mobile-close"
            onClick={() => setMobileOpen(false)}
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="navbar__mobile-nav">
          {navLinks.map((link, i) => (
            <div key={link.path}>
              {link.dropdown ? (
                <>
                  <button
                    className={`navbar__mobile-link w-full ${isActive(link.path) ? 'active' : ''}`}
                    onClick={() => setMobileServices(!mobileServices)}
                  >
                    <span>{link.label}</span>
                    <motion.span animate={{ rotate: mobileServices ? 180 : 0 }}>
                      <FiChevronDown size={16} />
                    </motion.span>
                  </button>
                  <div className={`navbar__mobile-submenu ${mobileServices ? 'open' : ''}`}>
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="flex items-center gap-2 py-2 px-3 text-sm text-gray-500 hover:text-blue-600 rounded-lg"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-blue-500">{service.icon}</span>
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`navbar__mobile-link ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile CTA */}
        <div className="navbar__mobile-cta">
          <p>Ready to start your project?</p>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            Get Free Consultation
          </Link>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-3 mt-4 px-4">
          <span className="text-sm text-gray-500 dark:text-gray-400">Theme:</span>
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}

export default Navbar