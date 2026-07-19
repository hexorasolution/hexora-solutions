import { useState, useMemo } from 'react'
import { Helmet }  from 'react-helmet-async'
import { Link }    from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiArrowRight, FiSearch } from 'react-icons/fi'
import PageHeroBanner from '../../components/about/PageHeroBanner'
import ContactStrip   from '../../components/home/ContactStrip'
import SectionTitle   from '../../components/ui/SectionTitle'
import { portfolioCategories, portfolioProjects } from '../../data/portfolioData'

/* ── Project Card ─────────────────────────────── */
const ProjectCard = ({ project, i }) => (
  <motion.article
    className="group relative rounded-2xl overflow-hidden"
    style={{
      background: 'white',
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    }}
    layout
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ delay: i * 0.06, duration: 0.5 }}
    whileHover={{ y: -10, boxShadow: `0 25px 50px ${project.color}20`, borderColor: project.color + '40' }}
  >
    {/* Image */}
    <div className="relative overflow-hidden aspect-video">
      <motion.img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.5 }}
      />
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
        style={{ background: `${project.color}dd` }}
        transition={{ duration: 0.3 }}
      >
        <Link to={`/portfolio/${project.slug}`}>
          <motion.div
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white font-bold text-sm"
            style={{ color: project.color }}
            initial={{ scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.05 }}
            animate={{ scale: 1, y: 0 }}
          >
            View Project <FiExternalLink size={15} />
          </motion.div>
        </Link>
      </motion.div>

      {/* Category badge */}
      <div
        className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold"
        style={{ background: project.color }}
      >
        {project.category}
      </div>

      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-xs font-bold"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)' }}>
          ⭐ Featured
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-6">
      {/* Client */}
      <div className="flex items-center gap-2 mb-3">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ background: project.color }}
        >
          {project.clientLogo}
        </div>
        <span className="text-gray-400 text-xs font-medium">{project.client}</span>
        <span className="text-gray-300 text-xs ml-auto">{project.year}</span>
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-gray-900 text-lg mb-2 leading-snug group-hover:transition-colors duration-300"
        style={{ '--hover-color': project.color }}>
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full text-xs font-medium"
            style={{ background: `${project.color}10`, color: project.color }}
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
            +{project.tags.length - 3}
          </span>
        )}
      </div>

      {/* Results preview */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        {project.results.slice(0, 2).map((r, i) => (
          <div
            key={i}
            className="p-2.5 rounded-xl text-center"
            style={{ background: `${project.color}08`, border: `1px solid ${project.color}15` }}
          >
            <div className="font-bold font-heading" style={{ color: project.color, fontSize: '1.1rem' }}>
              {r.metric}
            </div>
            <div className="text-gray-500 text-xs mt-0.5">{r.label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link to={`/portfolio/${project.slug}`}>
        <motion.div
          className="flex items-center gap-2 text-sm font-bold"
          style={{ color: project.color }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          View Case Study <FiArrowRight size={15} />
        </motion.div>
      </Link>
    </div>
  </motion.article>
)

/* ── Featured Project ─────────────────────────── */
const FeaturedProject = ({ project }) => (
  <motion.div
    className="relative rounded-3xl overflow-hidden mb-16"
    style={{ background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 8px 40px rgba(0,0,0,0.1)' }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    <div className="grid lg:grid-cols-2">
      {/* Image side */}
      <div className="relative overflow-hidden aspect-video lg:aspect-auto min-h-80">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${project.color}30, transparent)` }}
        />
        <div
          className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-white text-xs font-bold"
          style={{ background: project.color }}
        >
          ⭐ Featured Project
        </div>
      </div>

      {/* Content side */}
      <div className="p-10 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
            style={{ background: project.color }}
          >
            {project.clientLogo}
          </div>
          <div>
            <div className="text-gray-900 font-semibold text-sm">{project.client}</div>
            <div className="text-gray-400 text-xs">{project.category} · {project.year}</div>
          </div>
        </div>

        <h3
          className="font-heading font-bold text-gray-900 mb-4"
          style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.2 }}
        >
          {project.title}
        </h3>

        <p className="text-gray-500 leading-relaxed mb-6 text-sm">
          {project.description}
        </p>

        {/* Results */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {project.results.map((r, i) => (
            <div
              key={i}
              className="p-3 rounded-xl text-center"
              style={{ background: `${project.color}08`, border: `1px solid ${project.color}15` }}
            >
              <div className="font-black font-heading text-xl" style={{ color: project.color }}>
                {r.metric}
              </div>
              <div className="text-gray-500 text-xs">{r.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <Link to={`/portfolio/${project.slug}`}>
            <motion.button
              className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm"
              style={{ background: project.color }}
              whileHover={{ scale: 1.04, boxShadow: `0 0 25px ${project.color}50` }}
              whileTap={{ scale: 0.97 }}
            >
              View Case Study <FiExternalLink size={15} />
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
)

/* ── Main Page ────────────────────────────────── */
const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery,    setSearchQuery]    = useState('')

  const featuredProjects = portfolioProjects.filter((p) => p.featured)

  const filtered = useMemo(() => {
    let list = portfolioProjects
    if (activeCategory !== 'All') {
      list = list.filter((p) => p.category === activeCategory)
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.client.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    return list
  }, [activeCategory, searchQuery])

  return (
    <>
      <Helmet>
        <title>Portfolio | Hexora Solution</title>
        <meta name="description" content="Browse Hexora Solution' portfolio of 250+ successful projects – ERP systems, websites, mobile apps, AI projects, and more." />
        <link rel="canonical" href="https://hexora.lk/portfolio" />
      </Helmet>

      <PageHeroBanner
        badge="Our Portfolio"
        title="28+ Projects"
        titleHighlight="Delivered"
        subtitle="Explore our work across industries and technology domains. Every project tells a story of digital transformation."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Portfolio' }]}
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
      />

      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-6">

          {/* Featured Section */}
          <SectionTitle
            badge="Featured Work"
            title={<>Our Most Impactful <span style={{ background: 'linear-gradient(135deg,#1a3cff,#4169E1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span></>}
            subtitle="Handpicked case studies showcasing the real business impact of our solutions."
            align="center"
          />

          {/* Featured carousel (first featured project) */}
          {featuredProjects.slice(0, 1).map((p) => (
            <FeaturedProject key={p.id} project={p} />
          ))}

          {/* Filters + Search */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-10">
            {/* Category filters */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {portfolioCategories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300"
                  style={
                    activeCategory === cat
                      ? { background: 'linear-gradient(135deg,#1a3cff,#4169E1)', color: 'white', boxShadow: '0 0 20px rgba(26,60,255,0.3)' }
                      : { background: 'white', color: '#6b7280', border: '1px solid #e5e7eb' }
                  }
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-shrink-0">
              <FiSearch
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none bg-white text-gray-700"
                style={{ borderColor: '#e5e7eb', minWidth: 220 }}
                onFocus={(e) => { e.target.style.borderColor = '#1a3cff'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,255,0.1)' }}
                onBlur={(e)  => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
              />
            </div>
          </div>

          {/* Results count */}
          <motion.p
            className="text-gray-400 text-sm mb-6"
            key={filtered.length}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Showing <span className="text-blue-600 font-semibold">{filtered.length}</span> project{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && ` in "${activeCategory}"`}
          </motion.p>

          {/* Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} i={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-2">No projects found</h3>
              <p className="text-gray-400">Try a different category or search term</p>
              <motion.button
                className="mt-6 px-6 py-2.5 rounded-full text-white text-sm font-semibold"
                style={{ background: 'linear-gradient(135deg,#1a3cff,#4169E1)' }}
                onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                whileHover={{ scale: 1.04 }}
              >
                Clear Filters
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      <ContactStrip />
    </>
  )
}

export default PortfolioPage