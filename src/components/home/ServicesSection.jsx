import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiCode, FiGlobe, FiSmartphone, FiShield, FiCloud,
  FiPrinter, FiPenTool, FiTrendingUp, FiSettings,
  FiBriefcase, FiCpu, FiDatabase, FiArrowRight,
} from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

const services = [
  {
    icon:        <FiCode />,
    title:       'Software Development',
    slug:        'software-development',
    description: 'Custom ERP systems, desktop apps, and enterprise software tailored to your business workflows.',
    color:       '#1a3cff',
    bg:          'rgba(26,60,255,0.08)',
    tags:        ['ERP', 'Desktop', 'API'],
    popular:     true,
  },
  {
    icon:        <FiGlobe />,
    title:       'Website Solutions',
    slug:        'website-solutions',
    description: 'Beautiful, fast, SEO-optimized websites and e-commerce platforms that convert visitors into customers.',
    color:       '#10b981',
    bg:          'rgba(16,185,129,0.08)',
    tags:        ['React', 'WordPress', 'E-commerce'],
    popular:     false,
  },
  {
    icon:        <FiSmartphone />,
    title:       'Mobile Applications',
    slug:        'mobile-apps',
    description: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.',
    color:       '#f59e0b',
    bg:          'rgba(245,158,11,0.08)',
    tags:        ['iOS', 'Android', 'React Native'],
    popular:     false,
  },
  {
    icon:        <FiShield />,
    title:       'Network & Security',
    slug:        'network-security',
    description: 'Complete network infrastructure, CCTV systems, cybersecurity solutions and AMC contracts.',
    color:       '#8b5cf6',
    bg:          'rgba(139,92,246,0.08)',
    tags:        ['CCTV', 'Firewall', 'VPN'],
    popular:     false,
  },
  {
    icon:        <FiCloud />,
    title:       'Cloud Infrastructure',
    slug:        'cloud-infrastructure',
    description: 'Scalable cloud hosting, server management, AWS/Azure deployments, and DevOps solutions.',
    color:       '#06b6d4',
    bg:          'rgba(6,182,212,0.08)',
    tags:        ['AWS', 'Azure', 'DevOps'],
    popular:     false,
  },
  {
    icon:        <FiPrinter />,
    title:       'Digital Printing',
    slug:        'digital-printing',
    description: 'High-quality printing for mugs, t-shirts, banners, business cards, and all promotional materials.',
    color:       '#ec4899',
    bg:          'rgba(236,72,153,0.08)',
    tags:        ['Mugs', 'Banners', 'T-Shirts'],
    popular:     false,
  },
  {
    icon:        <FiPenTool />,
    title:       'Graphic Design',
    slug:        'graphic-design',
    description: 'Stunning logos, brand identities, social media designs, brochures, and marketing collateral.',
    color:       '#f97316',
    bg:          'rgba(249,115,22,0.08)',
    tags:        ['Logos', 'Branding', 'Social'],
    popular:     false,
  },
  {
    icon:        <FiTrendingUp />,
    title:       'Digital Marketing',
    slug:        'digital-marketing',
    description: 'Result-driven SEO, social media marketing, Google Ads, and content strategies that grow your business.',
    color:       '#1a3cff',
    bg:          'rgba(26,60,255,0.08)',
    tags:        ['SEO', 'Google Ads', 'Social'],
    popular:     true,
  },
  {
    icon:        <FiSettings />,
    title:       'IT Support',
    slug:        'it-support',
    description: '24/7 technical support, hardware maintenance, troubleshooting, and annual maintenance contracts.',
    color:       '#10b981',
    bg:          'rgba(16,185,129,0.08)',
    tags:        ['24/7', 'AMC', 'Hardware'],
    popular:     false,
  },
  {
    icon:        <FiBriefcase />,
    title:       'Business Solutions',
    slug:        'business-solutions',
    description: 'POS systems, inventory management, HR software, and complete business process automation.',
    color:       '#8b5cf6',
    bg:          'rgba(139,92,246,0.08)',
    tags:        ['POS', 'HR', 'Inventory'],
    popular:     false,
  },
  {
    icon:        <FiCpu />,
    title:       'Emerging Technologies',
    slug:        'emerging-technologies',
    description: 'AI integration, machine learning, blockchain, IoT, and AR/VR solutions for forward-thinking businesses.',
    color:       '#06b6d4',
    bg:          'rgba(6,182,212,0.08)',
    tags:        ['AI/ML', 'Blockchain', 'IoT'],
    popular:     true,
  },
  {
    icon:        <FiDatabase />,
    title:       'BPO & Data Entry',
    slug:        'bpo-data-entry',
    description: 'Accurate data entry, document processing, virtual assistant services, and business process outsourcing.',
    color:       '#f59e0b',
    bg:          'rgba(245,158,11,0.08)',
    tags:        ['Data Entry', 'BPO', 'Virtual'],
    popular:     false,
  },
]

const ServiceCard = ({ service, index }) => (
  <motion.div
    className="relative p-6 rounded-2xl group cursor-pointer overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
    style={{
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.07, duration: 0.6 }}
    whileHover={{
      y: -10,
      boxShadow: `0 25px 50px ${service.color}20`,
    }}
  >
    {/* Popular badge */}
    {service.popular && (
      <div
        className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-white text-xs font-bold"
        style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)` }}
      >
        Popular
      </div>
    )}

    {/* Background glow on hover */}
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"
      style={{
        background: `radial-gradient(circle at top left, ${service.color}08, transparent 70%)`,
      }}
    />

    {/* Icon */}
    <motion.div
      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
      style={{
        background: service.bg,
        color: service.color,
        border: `1px solid ${service.color}20`,
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.2 }}
    >
      {service.icon}
    </motion.div>

    {/* Title */}
    <h3
      className="font-heading font-bold text-lg mb-3 text-gray-900 dark:text-white group-hover:transition-colors"
      style={{ lineHeight: 1.3 }}
    >
      {service.title}
    </h3>

    {/* Description */}
    <p className="text-gray-500 text-sm leading-relaxed mb-4">
      {service.description}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5 mb-5">
      {service.tags.map((tag) => (
        <span
          key={tag}
          className="px-2.5 py-1 rounded-full text-xs font-medium"
          style={{
            background: service.bg,
            color: service.color,
          }}
        >
          {tag}
        </span>
      ))}
    </div>

    {/* CTA */}
    <Link to={`/services/${service.slug}`}>
      <motion.div
        className="flex items-center gap-2 text-sm font-semibold"
        style={{ color: service.color }}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
      >
        Learn More
        <FiArrowRight size={16} />
      </motion.div>
    </Link>

    {/* Bottom gradient line */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
      style={{ background: `linear-gradient(135deg, ${service.color}, transparent)` }}
    />
  </motion.div>
)

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="What We Offer"
          title={
            <>
              Comprehensive Digital{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Services
              </span>
            </>
          }
          subtitle="From software development to digital marketing, we provide end-to-end technology solutions that help your business grow and succeed in the digital age."
          align="center"
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link to="/services">
            <motion.button
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #1a3cff, #4169E1)',
                boxShadow: '0 0 30px rgba(26,60,255,0.3)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(26,60,255,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              Explore All Services
              <FiArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection