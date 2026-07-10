import { Helmet }  from 'react-helmet-async'
import { motion }  from 'framer-motion'
import { Link }    from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import PageHeroBanner from '../../components/about/PageHeroBanner'
import SectionTitle   from '../../components/ui/SectionTitle'
import ContactStrip   from '../../components/home/ContactStrip'

const industries = [
  {
    emoji: '🏥', slug: 'healthcare', title: 'Healthcare',
    color: '#10b981', bg: 'rgba(16,185,129,0.08)',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    desc: 'Transforming patient care with digital health solutions. From hospital management systems to telemedicine platforms, we help healthcare providers deliver better outcomes.',
    solutions: ['Hospital Management ERP', 'Patient Portal & App', 'Telemedicine Platform', 'Pharmacy Management', 'Laboratory System', 'Medical Billing Software'],
    stats: [{ n: '15+', l: 'Healthcare Clients' }, { n: '500K+', l: 'Patients Served' }],
    caseStudy: 'MediCare Hospital System – 70% reduction in patient wait time',
  },
  {
    emoji: '🎓', slug: 'education', title: 'Education',
    color: '#f59e0b', bg: 'rgba(245,158,11,0.08)',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    desc: 'Empowering learners and educators with modern edtech solutions. We build platforms that make quality education accessible, engaging, and measurable.',
    solutions: ['Learning Management System', 'Student Mobile App', 'Online Examination Portal', 'School ERP', 'Teacher Dashboard', 'Parent Communication App'],
    stats: [{ n: '20+', l: 'Educational Institutions' }, { n: '50K+', l: 'Students on Platform' }],
    caseStudy: 'EduLearn App – 4.8★ rating with 50,000+ active students',
  },
  {
    emoji: '🛍️', slug: 'retail', title: 'Retail & E-Commerce',
    color: '#ec4899', bg: 'rgba(236,72,153,0.08)',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    desc: 'Helping retailers sell more — online, in-store, and everywhere in between. We build scalable commerce platforms that convert browsers into buyers.',
    solutions: ['E-Commerce Platform', 'POS System', 'Inventory Management', 'Customer Loyalty App', 'Multi-vendor Marketplace', 'Click & Collect System'],
    stats: [{ n: '30+', l: 'Retail Clients' }, { n: '400%', l: 'Avg Revenue Increase' }],
    caseStudy: 'ShopMax Platform – 400% increase in online sales',
  },
  {
    emoji: '🏦', slug: 'finance', title: 'Finance & Banking',
    color: '#1a3cff', bg: 'rgba(26,60,255,0.08)',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    desc: 'Building secure, compliant financial technology for the modern era. From digital banking to insurance platforms, we deliver fintech that customers trust.',
    solutions: ['Digital Banking Portal', 'Insurance Management', 'Loan Origination System', 'Financial Reporting', 'AI Fraud Detection', 'Payment Gateway Integration'],
    stats: [{ n: '10+', l: 'Fintech Projects' }, { n: '99.99%', l: 'System Uptime' }],
    caseStudy: 'FinFlow Banking Dashboard – Zero security breaches in 12 months',
  },
  {
    emoji: '🏨', slug: 'hotel', title: 'Hotel & Restaurant',
    color: '#8b5cf6', bg: 'rgba(139,92,246,0.08)',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    desc: 'Elevating hospitality experiences with smart technology. From reservation management to kitchen automation, we help hotels and restaurants delight their guests.',
    solutions: ['Hotel Management System', 'Restaurant POS', 'Online Booking Engine', 'Channel Manager', 'Housekeeping App', 'Revenue Management'],
    stats: [{ n: '25+', l: 'Hospitality Clients' }, { n: '40%', l: 'Revenue Increase' }],
    caseStudy: 'HotelPro System – 40% revenue increase for Grand Paradise',
  },
  {
    emoji: '🏛️', slug: 'government', title: 'Government',
    color: '#06b6d4', bg: 'rgba(6,182,212,0.08)',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    desc: 'Modernizing public services through e-government solutions. We help government institutions become more efficient, transparent, and citizen-friendly.',
    solutions: ['Citizen Service Portal', 'Document Management', 'Public Complaint System', 'Government ERP', 'Digital ID Systems', 'Audit & Compliance Tools'],
    stats: [{ n: '5+', l: 'Government Projects' }, { n: '70%', l: 'Office Visits Reduced' }],
    caseStudy: 'GovPortal – 10,000+ monthly active citizens served online',
  },
  {
    emoji: '🏭', slug: 'manufacturing', title: 'Manufacturing',
    color: '#f97316', bg: 'rgba(249,115,22,0.08)',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    desc: 'Optimizing manufacturing operations with Industry 4.0 solutions. From production tracking to quality control, we help manufacturers increase efficiency and reduce waste.',
    solutions: ['Production Management System', 'Inventory & WMS', 'Quality Control System', 'Machine Monitoring', 'Supply Chain Management', 'Employee Time Tracking'],
    stats: [{ n: '12+', l: 'Manufacturing Clients' }, { n: '30%', l: 'Efficiency Increase' }],
    caseStudy: 'InventoryPro – $50,000+ annual losses recovered for ManufactX',
  },
  {
    emoji: '🏗️', slug: 'construction', title: 'Construction',
    color: '#10b981', bg: 'rgba(16,185,129,0.08)',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    desc: 'Keeping construction projects on time and on budget with smart project management tools. From site monitoring to client portals, we build solutions for builders.',
    solutions: ['Project Management System', 'Site Progress Tracking', 'Material Management', 'Contractor Portal', 'Client Progress Reports', 'Safety Management'],
    stats: [{ n: '8+', l: 'Construction Projects' }, { n: '25%', l: 'Cost Overrun Reduction' }],
    caseStudy: 'BuildTrack – Real-time monitoring across 15 construction sites',
  },
  {
    emoji: '🚛', slug: 'logistics', title: 'Logistics & Transport',
    color: '#1a3cff', bg: 'rgba(26,60,255,0.08)',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    desc: 'Powering efficient logistics with real-time tracking and smart automation. From fleet management to last-mile delivery, we optimize every link in your supply chain.',
    solutions: ['Fleet Management System', 'Route Optimization', 'Driver Mobile App', 'Customer Tracking Portal', 'Freight Management', 'Delivery Analytics'],
    stats: [{ n: '10+', l: 'Logistics Clients' }, { n: '500+', l: 'Vehicles Tracked' }],
    caseStudy: 'LogiTrack – 25% fuel cost reduction for FastShip Logistics',
  },
]

const IndustryCard = ({ industry, i }) => (
  <motion.section
    id={industry.slug}
    className="relative overflow-hidden rounded-3xl"
    style={{ background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.07, duration: 0.7 }}
  >
    <div className={`grid lg:grid-cols-2 ${i % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Image */}
      <div className={`relative overflow-hidden aspect-video lg:aspect-auto min-h-72 ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
        <motion.img
          src={industry.image}
          alt={industry.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${industry.color}30, transparent)` }} />
        <div className="absolute top-5 left-5 text-5xl filter drop-shadow-lg">{industry.emoji}</div>
      </div>

      {/* Content */}
      <div className={`p-10 flex flex-col justify-center ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold mb-5 self-start"
          style={{ background: industry.bg, color: industry.color }}
        >
          {industry.emoji} {industry.title}
        </div>

        <h2
          className="font-heading font-bold text-gray-900 mb-4"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: 1.2 }}
        >
          {industry.title} Solutions
        </h2>
        <p className="text-gray-500 leading-relaxed mb-6 text-sm">{industry.desc}</p>

        {/* Solutions */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {industry.solutions.map((sol, j) => (
            <motion.div
              key={j}
              className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: j * 0.05 }}
            >
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: industry.color }} />
              {sol}
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex gap-6 mb-6">
          {industry.stats.map((stat, j) => (
            <div key={j}>
              <div className="font-black font-heading text-2xl" style={{ color: industry.color }}>
                {stat.n}
              </div>
              <div className="text-gray-400 text-xs">{stat.l}</div>
            </div>
          ))}
        </div>

        {/* Case study */}
        <div
          className="p-3 rounded-xl text-xs mb-6"
          style={{ background: industry.bg, border: `1px solid ${industry.color}20`, color: industry.color }}
        >
          📌 Case Study: {industry.caseStudy}
        </div>

        <Link to="/contact">
          <motion.button
            className="self-start flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm"
            style={{ background: `linear-gradient(135deg, ${industry.color}, ${industry.color}cc)` }}
            whileHover={{ scale: 1.04, boxShadow: `0 0 25px ${industry.color}50` }}
            whileTap={{ scale: 0.97 }}
          >
            Get a Custom Solution <FiArrowRight size={15} />
          </motion.button>
        </Link>
      </div>
    </div>
  </motion.section>
)

const IndustriesPage = () => {
  return (
    <>
      <Helmet>
        <title>Industries We Serve | Hexora Solutions</title>
        <meta name="description" content="Hexora Solutions delivers specialized digital solutions across 9 industries – healthcare, education, retail, finance, hospitality, government, and more." />
        <link rel="canonical" href="https://hexora.lk/industries" />
      </Helmet>

      <PageHeroBanner
        badge="Industries We Serve"
        title="Digital Solutions For"
        titleHighlight="Every Industry"
        subtitle="Deep domain expertise combined with cutting-edge technology — we deliver tailored solutions that solve real industry-specific challenges."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Industries' }]}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
      />

      {/* Quick nav */}
      <div className="py-8 bg-white dark:bg-gray-950 border-b dark:border-gray-800 sticky top-16 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <a key={ind.slug} href={`#${ind.slug}`}>
                <motion.div
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={{ background: ind.bg, color: ind.color, border: `1px solid ${ind.color}20` }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span>{ind.emoji}</span>
                  {ind.title}
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Industry sections */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <SectionTitle
            badge="9 Industry Verticals"
            title={<>Specialized Solutions For <span style={{ background: 'linear-gradient(135deg,#1a3cff,#4169E1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Your Sector</span></>}
            subtitle="We don't just build generic software — we build industry-specific solutions that understand your unique challenges."
            align="center"
          />

          <div className="space-y-10">
            {industries.map((industry, i) => (
              <IndustryCard key={industry.slug} industry={industry} i={i} />
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  )
}

export default IndustriesPage