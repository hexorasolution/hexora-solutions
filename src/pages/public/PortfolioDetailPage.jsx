import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet }  from 'react-helmet-async'
import { motion }  from 'framer-motion'
import { useState } from 'react'
import {
  FiArrowLeft, FiExternalLink, FiCheck,
  FiChevronLeft, FiChevronRight, FiStar,
  FiCalendar, FiClock, FiDollarSign, FiUser,
} from 'react-icons/fi'
import { portfolioProjects } from '../../data/portfolioData'
import ContactStrip from '../../components/home/ContactStrip'

const PortfolioDetailPage = () => {
  const { slug } = useParams()
  const project  = portfolioProjects.find((p) => p.slug === slug)

  const [activeImg, setActiveImg] = useState(0)

  if (!project) return <Navigate to="/portfolio" replace />

  const related = portfolioProjects
    .filter((p) => p.slug !== slug && p.category === project.category)
    .slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{project.title} | Portfolio | Hexora Solution</title>
        <meta name="description" content={project.description.slice(0, 155)} />
      </Helmet>

      {/* Hero */}
      <section
        className="relative min-h-[520px] flex items-end pb-0 overflow-hidden pt-24"
        style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #0a0f1e 100%)' }}
      >
        {/* BG image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0f1e 30%, rgba(10,15,30,0.6))' }} />

        <div className="container mx-auto px-6 relative pb-12">
          {/* Back */}
          <Link to="/portfolio">
            <motion.div
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors duration-200"
              whileHover={{ x: -4 }}
            >
              <FiArrowLeft /> Back to Portfolio
            </motion.div>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8 items-end">
            <div className="lg:col-span-2">
              {/* Category */}
              <motion.span
                className="inline-block px-3 py-1.5 rounded-full text-white text-xs font-bold mb-4"
                style={{ background: project.color }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.category}
              </motion.span>

              <motion.h1
                className="font-heading font-black text-white mb-5"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {project.title}
              </motion.h1>

              <motion.p
                className="text-gray-300 text-lg leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {project.description}
              </motion.p>
            </div>

            {/* Meta card */}
            <motion.div
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: <FiUser size={15} />,     label: 'Client',    value: project.client },
                { icon: <FiCalendar size={15} />, label: 'Year',      value: project.year },
                { icon: <FiClock size={15} />,    label: 'Duration',  value: project.duration },
                { icon: <FiDollarSign size={15} />,label: 'Budget',   value: project.budget },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-3 py-3 ${i < 3 ? 'border-b border-white/10' : ''}`}>
                  <span style={{ color: project.color }}>{item.icon}</span>
                  <div>
                    <div className="text-gray-500 text-xs">{item.label}</div>
                    <div className="text-white text-sm font-semibold">{item.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left – Main content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden aspect-video mb-3 shadow-xl">
                  <motion.img
                    key={activeImg}
                    src={project.images[activeImg]}
                    alt={`${project.title} screenshot ${activeImg + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Navigation */}
                  {project.images.length > 1 && (
                    <>
                      <motion.button
                        onClick={() => setActiveImg((p) => (p - 1 + project.images.length) % project.images.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white"
                        style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiChevronLeft />
                      </motion.button>
                      <motion.button
                        onClick={() => setActiveImg((p) => (p + 1) % project.images.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white"
                        style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)' }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FiChevronRight />
                      </motion.button>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                <div className="flex gap-3">
                  {project.images.map((img, i) => (
                    <motion.button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className="relative rounded-xl overflow-hidden aspect-video flex-1"
                      style={{
                        border: `2px solid ${i === activeImg ? project.color : '#e5e7eb'}`,
                        opacity: i === activeImg ? 1 : 0.6,
                      }}
                      whileHover={{ opacity: 1, scale: 1.02 }}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Challenge */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading font-bold text-gray-900 dark:text-white text-2xl mb-4 flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: project.color }}
                  >
                    🎯
                  </span>
                  The Challenge
                </h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-base">
                  {project.challenge}
                </p>
              </motion.div>

              {/* Solution */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading font-bold text-gray-900 dark:text-white text-2xl mb-4 flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: project.color }}
                  >
                    💡
                  </span>
                  Our Solution
                </h2>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-base">
                  {project.solution}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-heading font-bold text-gray-900 dark:text-white text-2xl mb-5 flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ background: project.color }}
                  >
                    ✨
                  </span>
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 p-3.5 rounded-xl"
                      style={{ background: `${project.color}06`, border: `1px solid ${project.color}15` }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <FiCheck size={16} className="flex-shrink-0 mt-0.5" style={{ color: project.color }} />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                className="p-8 rounded-2xl relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)`,
                  border: `1px solid ${project.color}20`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl font-serif mb-4 opacity-20" style={{ color: project.color }}>"</div>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <FiStar key={s} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg italic leading-relaxed mb-5">
                  "{project.testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: project.color }}
                  >
                    {project.clientLogo}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      {project.testimonial.author}
                    </div>
                    <div className="text-gray-400 text-xs">{project.client}</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Results */}
              <motion.div
                className="p-6 rounded-2xl"
                style={{ background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-4">
                  📊 Project Results
                </h3>
                <div className="space-y-3">
                  {project.results.map((r, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl"
                      style={{ background: `${project.color}06`, border: `1px solid ${project.color}15` }}>
                      <span className="text-gray-600 text-sm">{r.label}</span>
                      <span className="font-black font-heading text-lg" style={{ color: project.color }}>
                        {r.metric}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                className="p-6 rounded-2xl"
                style={{ background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-4">
                  🛠️ Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: `${project.color}10`, color: project.color, border: `1px solid ${project.color}20` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                className="p-6 rounded-2xl text-center"
                style={{
                  background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                  border: `1px solid ${project.color}20`,
                }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Ready for a similar project?
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Let's discuss your requirements and build something amazing.
                </p>
                <Link to="/contact">
                  <motion.button
                    className="w-full py-3 rounded-xl text-white font-bold text-sm"
                    style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)` }}
                    whileHover={{ scale: 1.02, boxShadow: `0 0 20px ${project.color}50` }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Your Project →
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Related Projects */}
          {related.length > 0 && (
            <div className="mt-20">
              <h3 className="font-heading font-bold text-gray-900 dark:text-white text-2xl mb-8 text-center">
                Related Projects in{' '}
                <span style={{ color: project.color }}>{project.category}</span>
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p, i) => (
                  <motion.div
                    key={p.id}
                    className="rounded-2xl overflow-hidden group"
                    style={{ background: 'white', border: '1px solid #e5e7eb' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -6, boxShadow: `0 20px 40px ${p.color}20` }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <motion.img
                        src={p.image} alt={p.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-xs font-bold"
                        style={{ background: p.color }}>
                        {p.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">{p.title}</h4>
                      <Link to={`/portfolio/${p.slug}`}>
                        <motion.div
                          className="flex items-center gap-1.5 text-xs font-bold"
                          style={{ color: p.color }}
                          whileHover={{ x: 4 }}
                        >
                          View Project <FiArrowLeft size={12} style={{ transform: 'rotate(180deg)' }} />
                        </motion.div>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ContactStrip />
    </>
  )
}

export default PortfolioDetailPage