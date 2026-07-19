import { Helmet }  from 'react-helmet-async'
import { Link }    from 'react-router-dom'
import { motion }  from 'framer-motion'
import {
  FiCode, FiGlobe, FiSmartphone, FiShield, FiCloud,
  FiPrinter, FiPenTool, FiTrendingUp, FiSettings,
  FiBriefcase, FiCpu, FiDatabase, FiArrowRight,
} from 'react-icons/fi'
import PageHeroBanner from '../../components/about/PageHeroBanner'
import SectionTitle   from '../../components/ui/SectionTitle'
import ContactStrip   from '../../components/home/ContactStrip'

const services = [
  { slug: 'software-development',  icon: <FiCode />,       title: 'Software Development',  color: '#1a3cff', desc: 'Custom ERP, CRM, desktop apps, and enterprise solutions.', tags: ['ERP', 'CRM', 'API'], popular: true  },
  { slug: 'website-solutions',     icon: <FiGlobe />,      title: 'Website Solutions',     color: '#10b981', desc: 'Websites, e-commerce platforms, and web applications.',  tags: ['React', 'E-Commerce'],  popular: false },
  { slug: 'mobile-apps',           icon: <FiSmartphone />, title: 'Mobile Applications',   color: '#8b5cf6', desc: 'iOS, Android, and cross-platform mobile apps.',         tags: ['iOS', 'Android'],       popular: false },
  { slug: 'network-security',      icon: <FiShield />,     title: 'Network & Security',    color: '#f59e0b', desc: 'Network setup, CCTV, cybersecurity, and AMC.',           tags: ['CCTV', 'Firewall'],     popular: false },
  { slug: 'cloud-infrastructure',  icon: <FiCloud />,      title: 'Cloud Infrastructure',  color: '#06b6d4', desc: 'AWS, Azure, DevOps, and cloud hosting solutions.',       tags: ['AWS', 'DevOps'],        popular: false },
  { slug: 'digital-printing',      icon: <FiPrinter />,    title: 'Digital Printing',      color: '#ec4899', desc: 'Mugs, t-shirts, banners, and all custom printing.',     tags: ['Mugs', 'Banners'],      popular: false },
  { slug: 'graphic-design',        icon: <FiPenTool />,    title: 'Graphic Design',        color: '#f97316', desc: 'Logos, branding, social media, and print designs.',     tags: ['Logos', 'Branding'],    popular: false },
  { slug: 'digital-marketing',     icon: <FiTrendingUp />, title: 'Digital Marketing',     color: '#1a3cff', desc: 'SEO, Google Ads, social media, and content marketing.',  tags: ['SEO', 'Google Ads'],    popular: true  },
  { slug: 'it-support',            icon: <FiSettings />,   title: 'IT Support',            color: '#10b981', desc: '24/7 tech support, hardware, and AMC contracts.',       tags: ['24/7', 'AMC'],          popular: false },
  { slug: 'business-solutions',    icon: <FiBriefcase />,  title: 'Business Solutions',    color: '#8b5cf6', desc: 'POS, inventory, HR, and business automation tools.',    tags: ['POS', 'HR'],            popular: false },
  { slug: 'emerging-technologies', icon: <FiCpu />,        title: 'Emerging Technologies', color: '#06b6d4', desc: 'AI, ML, blockchain, IoT, and AR/VR solutions.',         tags: ['AI', 'IoT'],            popular: true  },
  { slug: 'bpo-data-entry',        icon: <FiDatabase />,   title: 'BPO & Data Entry',      color: '#f59e0b', desc: 'Data entry, BPO, virtual assistants, and outsourcing.', tags: ['BPO', 'Data'],          popular: false },
]

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Hexora Solution</title>
        <meta name="description" content="Explore all 12 digital services offered by Hexora Solution – software development, web design, mobile apps, digital marketing, and more." />
        <link rel="canonical" href="https://hexora.lk/services" />
      </Helmet>

      <PageHeroBanner
        badge="What We Offer"
        title="Comprehensive Digital"
        titleHighlight="Services"
        subtitle="From software development to digital marketing — we provide end-to-end technology solutions that help your business grow."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Services' }]}
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80"
      />

      {/* Services Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <SectionTitle
            badge="All Services"
            title={<>12 Services To <span style={{ background: 'linear-gradient(135deg,#1a3cff,#4169E1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Power Your Business</span></>}
            subtitle="Every service is delivered by certified experts using the latest technologies. Click any service to learn more."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                className="relative p-8 rounded-2xl group overflow-hidden"
                style={{ background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                whileHover={{ y: -10, boxShadow: `0 25px 50px ${service.color}20`, borderColor: service.color + '40' }}
              >
                {service.popular && (
                  <div
                    className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-white text-xs font-bold"
                    style={{ background: service.color }}
                  >
                    Popular
                  </div>
                )}

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at top left, ${service.color}06, transparent)` }}
                />

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6"
                  style={{ background: `${service.color}10`, color: service.color, border: `1px solid ${service.color}20` }}
                >
                  {service.icon}
                </div>

                <h3 className="font-heading font-bold text-gray-900 text-xl mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ background: `${service.color}10`, color: service.color }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to={`/services/${service.slug}`}>
                  <motion.div
                    className="flex items-center gap-2 text-sm font-bold"
                    style={{ color: service.color }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    Explore Service <FiArrowRight />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  )
}

export default ServicesPage