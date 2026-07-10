import { useState, useMemo } from 'react'
import { Helmet }  from 'react-helmet-async'
import { Link }    from 'react-router-dom'
import { motion }  from 'framer-motion'
import {
  FiCalendar, FiClock, FiUser, FiSearch,
  FiTag, FiArrowRight, FiTrendingUp,
} from 'react-icons/fi'
import PageHeroBanner from '../../components/about/PageHeroBanner'
import SectionTitle   from '../../components/ui/SectionTitle'

const categories = ['All', 'Technology', 'Business', 'Design', 'Marketing', 'Development', 'AI & ML']

const blogPosts = [
  {
    id: 1, slug: 'future-of-ai-in-business-2025',
    title:    'The Future of AI in Business: What You Need to Know in 2025',
    excerpt:  'Artificial Intelligence is no longer a buzzword. Discover how AI is transforming every industry and what it means for your business growth and competitiveness.',
    image:    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    category: 'AI & ML',  author: 'Ashan Perera',
    date: 'Jan 15, 2025',  readTime: '8 min', color: '#06b6d4', featured: true,
    tags: ['AI', 'Business', 'Technology', '2025'],
  },
  {
    id: 2, slug: 'why-your-business-needs-erp-2025',
    title:    'Why Every Growing Business Needs an ERP System in 2025',
    excerpt:  'Manual processes are costing your business thousands every month. Here is why an ERP system is the most important investment you can make this year.',
    image:    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    category: 'Business', author: 'Nimasha Silva',
    date: 'Jan 10, 2025',  readTime: '7 min', color: '#1a3cff', featured: false,
    tags: ['ERP', 'Business', 'Digital Transformation'],
  },
  {
    id: 3, slug: 'web-design-trends-2025',
    title:    'Top 10 Web Design Trends That Will Dominate 2025',
    excerpt:  'From glassmorphism to AI-generated layouts, discover the design trends that will define the digital experience in 2025 and how to apply them.',
    image:    'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80',
    category: 'Design',   author: 'Kasun Fernando',
    date: 'Jan 05, 2025',  readTime: '6 min', color: '#8b5cf6', featured: false,
    tags: ['Design', 'Web', 'UI/UX', 'Trends'],
  },
  {
    id: 4, slug: 'mobile-app-development-guide-2025',
    title:    'The Complete Guide to Mobile App Development in Sri Lanka 2025',
    excerpt:  'Planning to build a mobile app? This comprehensive guide covers everything from choosing the right technology stack to launch and beyond.',
    image:    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
    category: 'Development', author: 'Sahan Jayawardena',
    date: 'Dec 28, 2024',  readTime: '10 min', color: '#f59e0b', featured: false,
    tags: ['Mobile', 'React Native', 'Development'],
  },
  {
    id: 5, slug: 'seo-strategies-2025',
    title:    'SEO Strategies That Actually Work in 2025: A Complete Guide',
    excerpt:  'Google\'s algorithm has evolved dramatically. Learn the SEO strategies that are actually driving results in 2025 and how to implement them.',
    image:    'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80',
    category: 'Marketing', author: 'Malika Dissanayake',
    date: 'Dec 20, 2024',  readTime: '9 min', color: '#10b981', featured: false,
    tags: ['SEO', 'Marketing', 'Google', 'Digital Marketing'],
  },
  {
    id: 6, slug: 'cloud-migration-guide',
    title:    'Should You Move to the Cloud? A Practical Guide for Sri Lankan Businesses',
    excerpt:  'Cloud migration can transform your business — but only if done right. Here is everything you need to know before making the switch.',
    image:    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80',
    category: 'Technology', author: 'Nimasha Silva',
    date: 'Dec 15, 2024',  readTime: '8 min', color: '#06b6d4', featured: false,
    tags: ['Cloud', 'AWS', 'Technology', 'Migration'],
  },
  {
    id: 7, slug: 'react-vs-vue-2025',
    title:    'React vs Vue vs Angular in 2025: Which Should You Choose?',
    excerpt:  'The framework debate continues. We break down React, Vue, and Angular in 2025 with real performance benchmarks and use case recommendations.',
    image:    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
    category: 'Development', author: 'Sahan Jayawardena',
    date: 'Dec 10, 2024',  readTime: '12 min', color: '#ec4899', featured: false,
    tags: ['React', 'Vue', 'Angular', 'JavaScript'],
  },
  {
    id: 8, slug: 'digital-marketing-roi-guide',
    title:    'How to Measure and Maximize Your Digital Marketing ROI in 2025',
    excerpt:  'Are your marketing dollars working hard enough? Learn how to track, measure, and maximize the return on every digital marketing investment.',
    image:    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    category: 'Marketing', author: 'Malika Dissanayake',
    date: 'Dec 05, 2024',  readTime: '7 min', color: '#f97316', featured: false,
    tags: ['Marketing', 'ROI', 'Analytics', 'Strategy'],
  },
  {
    id: 9, slug: 'cybersecurity-checklist-2025',
    title:    'The Ultimate Cybersecurity Checklist for Sri Lankan Businesses 2025',
    excerpt:  'Cyber attacks are increasing. Is your business protected? This practical checklist covers everything you need to secure your digital assets.',
    image:    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
    category: 'Technology', author: 'Ashan Perera',
    date: 'Nov 28, 2024',  readTime: '11 min', color: '#1a3cff', featured: false,
    tags: ['Security', 'Cybersecurity', 'Business', 'Protection'],
  },
]

const popularTags = ['AI', 'ERP', 'React', 'SEO', 'Mobile', 'Cloud', 'Security', 'Design', 'Business', 'Node.js']

/* ── Blog Card ───────────────────────────────── */
const BlogCard = ({ post, i, large = false }) => (
  <motion.article
    className={`group rounded-2xl overflow-hidden ${large ? '' : ''}`}
    style={{ background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.07, duration: 0.5 }}
    whileHover={{ y: -8, boxShadow: `0 20px 40px ${post.color}20`, borderColor: post.color + '30' }}
  >
    {/* Image */}
    <div className={`relative overflow-hidden ${large ? 'aspect-video' : 'aspect-video'}`}>
      <motion.img
        src={post.image} alt={post.title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 opacity-20"
        style={{ background: `linear-gradient(to bottom, transparent, ${post.color})` }} />
      <div
        className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-xs font-bold"
        style={{ background: post.color }}
      >
        {post.category}
      </div>
      {post.featured && (
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-white text-xs font-bold"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)' }}>
          🔥 Featured
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-6">
      {/* Meta */}
      <div className="flex items-center gap-4 text-gray-400 text-xs mb-3 flex-wrap">
        <span className="flex items-center gap-1.5"><FiUser size={11} /> {post.author}</span>
        <span className="flex items-center gap-1.5"><FiCalendar size={11} /> {post.date}</span>
        <span className="flex items-center gap-1.5"><FiClock size={11} /> {post.readTime} read</span>
      </div>

      {/* Title */}
      <h3 className={`font-heading font-bold text-gray-900 mb-3 leading-snug group-hover:transition-colors duration-300 ${large ? 'text-xl' : 'text-base'}`}>
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
            style={{ background: `${post.color}08`, color: post.color }}>
            <FiTag size={10} /> {tag}
          </span>
        ))}
      </div>

      {/* Read more */}
      <Link to={`/blog/${post.slug}`}>
        <motion.div
          className="flex items-center gap-2 text-sm font-bold"
          style={{ color: post.color }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          Read Article <FiArrowRight size={15} />
        </motion.div>
      </Link>
    </div>
  </motion.article>
)

/* ── Main Page ───────────────────────────────── */
const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery,    setSearchQuery]    = useState('')

  const filtered = useMemo(() => {
    let list = blogPosts
    if (activeCategory !== 'All') list = list.filter((p) => p.category === activeCategory)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      list = list.filter((p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      )
    }
    return list
  }, [activeCategory, searchQuery])

  const featured = blogPosts.find((p) => p.featured)
  const rest     = filtered.filter((p) => !p.featured || activeCategory !== 'All' || searchQuery)

  return (
    <>
      <Helmet>
        <title>Blog & Insights | Hexora Solutions</title>
        <meta name="description" content="Stay updated with the latest technology trends, business insights, and digital transformation strategies from Hexora Solutions." />
        <link rel="canonical" href="https://hexora.lk/blog" />
      </Helmet>

      <PageHeroBanner
        badge="Our Blog & Insights"
        title="Technology Insights"
        titleHighlight="& Resources"
        subtitle="Expert articles on technology, business, design, and digital transformation written by our team of specialists."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Blog' }]}
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80"
      />

      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-10">

            {/* Main content */}
            <div className="lg:col-span-3">
              {/* Featured post */}
              {!searchQuery && activeCategory === 'All' && featured && (
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-heading font-bold text-gray-900 dark:text-white text-xl mb-5 flex items-center gap-2">
                    <FiTrendingUp style={{ color: '#1a3cff' }} /> Featured Post
                  </h2>
                  <article
                    className="group relative rounded-2xl overflow-hidden"
                    style={{ background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                  >
                    <div className="grid md:grid-cols-2">
                      <div className="relative overflow-hidden aspect-video md:aspect-auto">
                        <motion.img
                          src={featured.image} alt={featured.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                        />
                        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-white text-xs font-bold"
                          style={{ background: featured.color }}>
                          🔥 Featured
                        </div>
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                          <span className="flex items-center gap-1"><FiUser size={11} /> {featured.author}</span>
                          <span className="flex items-center gap-1"><FiCalendar size={11} /> {featured.date}</span>
                          <span className="flex items-center gap-1"><FiClock size={11} /> {featured.readTime}</span>
                        </div>
                        <h3 className="font-heading font-bold text-gray-900 text-xl leading-snug mb-3">{featured.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {featured.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium"
                              style={{ background: `${featured.color}10`, color: featured.color }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <Link to={`/blog/${featured.slug}`}>
                          <motion.button
                            className="self-start flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm"
                            style={{ background: featured.color }}
                            whileHover={{ scale: 1.04, boxShadow: `0 0 20px ${featured.color}50` }}
                            whileTap={{ scale: 0.97 }}
                          >
                            Read Article <FiArrowRight size={15} />
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </article>
                </motion.div>
              )}

              {/* Filter + Search */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex flex-wrap gap-2 flex-1">
                  {categories.map((cat) => (
                    <motion.button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className="px-4 py-2 rounded-full text-sm font-semibold"
                      style={
                        activeCategory === cat
                          ? { background: 'linear-gradient(135deg,#1a3cff,#4169E1)', color: 'white' }
                          : { background: 'white', color: '#6b7280', border: '1px solid #e5e7eb' }
                      }
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      {cat}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Posts grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {(searchQuery || activeCategory !== 'All' ? filtered : rest).map((post, i) => (
                  <BlogCard key={post.id} post={post} i={i} />
                ))}
              </div>

              {filtered.length === 0 && (
                <motion.div className="text-center py-16" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="text-5xl mb-4">📝</div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-2">No articles found</h3>
                  <p className="text-gray-400 text-sm">Try a different category or search term</p>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Search */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
              >
                <h3 className="font-heading font-bold text-gray-900 text-base mb-4">Search Articles</h3>
                <div className="relative">
                  <FiSearch size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none bg-white text-gray-700"
                    style={{ borderColor: '#e5e7eb' }}
                    onFocus={(e) => { e.target.style.borderColor = '#1a3cff' }}
                    onBlur={(e)  => { e.target.style.borderColor = '#e5e7eb' }}
                  />
                </div>
              </div>

              {/* Popular Tags */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
              >
                <h3 className="font-heading font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                  <FiTag size={16} style={{ color: '#1a3cff' }} /> Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <motion.button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: 'rgba(26,60,255,0.06)', color: '#1a3cff', border: '1px solid rgba(26,60,255,0.15)' }}
                      whileHover={{ scale: 1.05, background: '#1a3cff', color: 'white' }}
                      whileTap={{ scale: 0.96 }}
                    >
                      #{tag}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Recent posts */}
              <div
                className="p-6 rounded-2xl"
                style={{ background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
              >
                <h3 className="font-heading font-bold text-gray-900 text-base mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 4).map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`}>
                      <motion.div
                        className="flex gap-3 group"
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                          <img src={post.image} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-900 text-xs font-semibold leading-snug mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </p>
                          <p className="text-gray-400 text-xs">{post.date}</p>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <motion.div
                className="p-6 rounded-2xl text-white text-center"
                style={{ background: 'linear-gradient(135deg, #0a0f1e, #1a2f7a)' }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="text-3xl mb-3">📧</div>
                <h3 className="font-bold font-heading text-lg mb-2">Stay Updated</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  Get the latest tech insights delivered to your inbox weekly.
                </p>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-xl text-gray-700 text-sm outline-none mb-3"
                />
                <motion.button
                  className="w-full py-2.5 rounded-xl text-white font-bold text-sm"
                  style={{ background: 'linear-gradient(135deg,#1a3cff,#4169E1)' }}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(26,60,255,0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe Free
                </motion.button>
                <p className="text-gray-600 text-xs mt-2">No spam. Unsubscribe anytime.</p>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage