import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet }  from 'react-helmet-async'
import { motion }  from 'framer-motion'
import { FiCheck, FiArrowRight, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useState } from 'react'
import servicesData  from '../../data/servicesData'
import PageHeroBanner from '../../components/about/PageHeroBanner'
import ContactStrip   from '../../components/home/ContactStrip'
import SectionTitle   from '../../components/ui/SectionTitle'

/* ── Sub-components ─────────────────────────────── */

const SubServiceCard = ({ item, color, i }) => (
  <motion.div
    className="p-5 rounded-xl"
    style={{ background: `${color}06`, border: `1px solid ${color}20` }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.08, duration: 0.5 }}
    whileHover={{ y: -4, background: `${color}10`, borderColor: `${color}40` }}
  >
    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
      style={{ background: `${color}20` }}>
      <div className="w-2 h-2 rounded-full" style={{ background: color }} />
    </div>
    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{item.title}</h4>
    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
  </motion.div>
)

const TechBadge = ({ tech, color, i }) => (
  <motion.div
    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
    style={{ background: `${color}08`, border: `1px solid ${color}20` }}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.06 }}
    whileHover={{ scale: 1.05, background: `${color}15` }}
  >
    <span className="text-xl">{tech.icon}</span>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
  </motion.div>
)

const ProcessStep = ({ step, color, i }) => (
  <motion.div
    className="flex gap-5"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1, duration: 0.5 }}
  >
    <div className="flex flex-col items-center">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
        style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)`, boxShadow: `0 0 15px ${color}40` }}
      >
        {step.step}
      </div>
      {i < 5 && (
        <div className="w-px flex-1 mt-2" style={{ background: `${color}20`, minHeight: 32 }} />
      )}
    </div>
    <div className="pb-8">
      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{step.title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
    </div>
  </motion.div>
)

const BenefitCard = ({ benefit, color, i }) => (
  <motion.div
    className="p-5 rounded-xl text-center"
    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1, duration: 0.5 }}
    whileHover={{ y: -5, background: 'rgba(255,255,255,0.06)', borderColor: color + '30' }}
  >
    <div className="text-4xl mb-3">{benefit.emoji}</div>
    <h4 className="text-white font-bold mb-2 text-sm">{benefit.title}</h4>
    <p className="text-gray-400 text-xs leading-relaxed">{benefit.desc}</p>
  </motion.div>
)

const PricingCard = ({ plan, color, i }) => (
  <motion.div
    className="relative rounded-2xl p-8 flex flex-col"
    style={
      plan.popular
        ? { background: `linear-gradient(135deg, ${plan.color}15, ${plan.color}05)`, border: `2px solid ${plan.color}`, boxShadow: `0 0 40px ${plan.color}20` }
        : { background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }
    }
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.12, duration: 0.6 }}
    whileHover={{ y: -8, boxShadow: `0 25px 50px ${plan.color}20` }}
  >
    {plan.popular && (
      <div
        className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-bold"
        style={{ background: plan.color }}
      >
        Most Popular
      </div>
    )}

    <div
      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
      style={{ background: `${plan.color}15`, color: plan.color }}
    >
      {plan.name}
    </div>

    <div className="mb-6">
      <span
        className="font-heading font-black"
        style={{ fontSize: plan.price === 'Custom' || plan.price === 'Get Quote' ? '2rem' : '2.5rem', color: plan.color }}
      >
        {plan.price}
      </span>
      {plan.price !== 'Custom' && plan.price !== 'Get Quote' && (
        <span className="text-gray-400 text-sm ml-1">/ project</span>
      )}
    </div>

    <ul className="space-y-3 flex-1 mb-8">
      {plan.features.map((f, j) => (
        <li key={j} className="flex items-start gap-2.5">
          <FiCheck size={16} style={{ color: plan.color, flexShrink: 0, marginTop: 2 }} />
          <span className="text-gray-600 dark:text-gray-400 text-sm">{f}</span>
        </li>
      ))}
    </ul>

    <Link to="/contact">
      <motion.button
        className="w-full py-3.5 rounded-xl text-white font-bold"
        style={{ background: `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)` }}
        whileHover={{ scale: 1.02, boxShadow: `0 0 25px ${plan.color}50` }}
        whileTap={{ scale: 0.98 }}
      >
        Get Started
      </motion.button>
    </Link>
  </motion.div>
)

const FAQItem = ({ faq, i, color }) => {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className="rounded-xl overflow-hidden"
      style={{ border: '1px solid #e5e7eb' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
    >
      <button
        className="w-full flex items-center justify-between p-5 text-left"
        style={{ background: open ? `${color}05` : 'white' }}
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
        {open
          ? <FiChevronUp size={18} style={{ color, flexShrink: 0 }} />
          : <FiChevronDown size={18} className="text-gray-400 flex-shrink-0" />
        }
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="p-5 pt-0 text-gray-500 text-sm leading-relaxed bg-white">
          {faq.a}
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Main Component ─────────────────────────────── */

const ServiceDetailPage = () => {
  const { slug } = useParams()
  const service  = servicesData[slug]

  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <Helmet>
        <title>{service.title} | Hexora Solution</title>
        <meta name="description" content={service.intro.slice(0, 155)} />
        <link rel="canonical" href={`https://hexora.lk/services/${slug}`} />
      </Helmet>

      {/* Hero */}
      <PageHeroBanner
        badge={service.title}
        title={service.title}
        titleHighlight=""
        subtitle={service.tagline}
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: service.title },
        ]}
        image={service.heroImage}
      />

      {/* Stats strip */}
      <div
        className="py-10 border-b"
        style={{
          background: 'linear-gradient(135deg, #0a0f1e, #0d1b3e)',
          borderColor: 'rgba(255,255,255,0.05)',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {service.stats.map((stat, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="font-heading font-black text-3xl mb-1"
                  style={{ color: service.color }}
                >
                  {stat.n}
                </div>
                <div className="text-gray-400 text-sm">{stat.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                className="text-6xl mb-6 block"
                style={{ filter: 'drop-shadow(0 0 20px rgba(26,60,255,0.3))' }}
              >
                {service.icon}
              </span>
              <h2
                className="font-heading font-bold text-gray-900 dark:text-white mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', lineHeight: 1.2 }}
              >
                {service.tagline}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg mb-8">
                {service.intro}
              </p>
              <Link to="/contact">
                <motion.button
                  className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold"
                  style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`, boxShadow: `0 0 25px ${service.color}40` }}
                  whileHover={{ scale: 1.04, boxShadow: `0 0 40px ${service.color}60` }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Free Quote <FiArrowRight />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              className="relative rounded-2xl overflow-hidden aspect-video"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${service.color}20, transparent)` }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <SectionTitle
            badge="What We Offer"
            title={<>Our {service.title} <span style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span></>}
            subtitle="Comprehensive solutions covering every aspect of your needs."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.subServices.map((item, i) => (
              <SubServiceCard key={i} item={item} color={service.color} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section
        className="py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0f1e, #0d1b3e)' }}
      >
        <div className="container mx-auto px-6">
          <SectionTitle
            badge="Tech Stack"
            title={<>Technologies <span style={{ background: 'linear-gradient(135deg,#60a5fa,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>We Use</span></>}
            subtitle="We use industry-leading technologies to build robust, scalable solutions."
            align="center"
            light
          />
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {service.technologies.map((tech, i) => (
              <TechBadge key={i} tech={tech} color={service.color} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <SectionTitle
                badge="Our Process"
                title={<>How We <span style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Deliver</span></>}
                subtitle="A proven step-by-step process that guarantees quality results every time."
                align="left"
              />
            </div>
            <div>
              {service.process.map((step, i) => (
                <ProcessStep key={i} step={step} color={service.color} i={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0f1e, #0d1b3e)' }}
      >
        <div className="container mx-auto px-6">
          <SectionTitle
            badge="Why Choose Us"
            title={<>Key <span style={{ background: 'linear-gradient(135deg,#60a5fa,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Benefits</span></>}
            subtitle="Here is what you gain when you choose Hexora for your project."
            align="center"
            light
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.benefits.map((b, i) => (
              <BenefitCard key={i} benefit={b} color={service.color} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <SectionTitle
            badge="Transparent Pricing"
            title={<>Choose Your <span style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Plan</span></>}
            subtitle="Clear, upfront pricing with no hidden fees. All plans include our quality guarantee."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {service.pricing.map((plan, i) => (
              <PricingCard key={i} plan={plan} color={service.color} i={i} />
            ))}
          </div>

          <motion.p
            className="text-center text-gray-400 text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            💬 Not sure which plan is right? &nbsp;
            <Link to="/contact" style={{ color: service.color }} className="font-semibold hover:underline">
              Talk to our experts →
            </Link>
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0f1e, #0d1b3e)' }}
      >
        <div className="container mx-auto px-6">
          <SectionTitle
            badge="FAQ"
            title={<>Frequently Asked <span style={{ background: 'linear-gradient(135deg,#60a5fa,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Questions</span></>}
            subtitle="Answers to the most common questions about our services."
            align="center"
            light
          />
          <div className="max-w-3xl mx-auto space-y-3">
            {service.faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} i={i} color={service.color} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <h3 className="font-heading font-bold text-gray-900 dark:text-white text-2xl text-center mb-8">
            Explore Related Services
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(servicesData)
              .filter((s) => s.slug !== slug)
              .slice(0, 6)
              .map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`}>
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium"
                    style={{
                      background: `${s.color}08`,
                      border: `1px solid ${s.color}20`,
                      color: s.color,
                    }}
                    whileHover={{ scale: 1.05, background: `${s.color}15` }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>{s.icon}</span>
                    {s.title}
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  )
}

export default ServiceDetailPage