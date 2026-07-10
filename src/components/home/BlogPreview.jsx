import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCalendar, FiClock, FiArrowRight, FiUser } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

const blogs = [
  {
    id: 1, slug: 'future-of-ai-in-business',
    title:    'The Future of AI in Business: What You Need to Know in 2025',
    excerpt:  'Artificial Intelligence is no longer a buzzword. Discover how AI is transforming every industry and what it means for your business.',
    image:    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
    category: 'Technology',
    author:   'Ashan Perera',
    date:     'Jan 15, 2025',
    readTime: '5 min read',
    color:    '#1a3cff',
  },
  {
    id: 2, slug: 'why-your-business-needs-erp',
    title:    'Why Every Growing Business Needs an ERP System in 2025',
    excerpt:  'Manual processes are costing your business time and money. Here is why an ERP system is the best investment you can make this year.',
    image:    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    category: 'Business',
    author:   'Nimasha Silva',
    date:     'Jan 10, 2025',
    readTime: '7 min read',
    color:    '#10b981',
  },
  {
    id: 3, slug: 'web-design-trends-2025',
    title:    'Top 10 Web Design Trends That Will Dominate 2025',
    excerpt:  'From glassmorphism to AI-generated layouts, discover the design trends that will define the digital experience in 2025.',
    image:    'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80',
    category: 'Design',
    author:   'Kasun Fernando',
    date:     'Jan 05, 2025',
    readTime: '4 min read',
    color:    '#8b5cf6',
  },
]

const categoryColors = {
  Technology: '#1a3cff',
  Business:   '#10b981',
  Design:     '#8b5cf6',
  Marketing:  '#f59e0b',
}

const BlogPreview = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 60%, #0a0f1e 100%)',
      }}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,60,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,60,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-6 relative">
        <SectionTitle
          badge="Latest Insights"
          title={
            <>
              From Our{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Blog & Newsroom
              </span>
            </>
          }
          subtitle="Stay updated with the latest technology trends, business insights, and digital transformation strategies from our expert team."
          align="center"
          light
        />

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              className="group rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{
                y: -8,
                background: 'rgba(255,255,255,0.06)',
                borderColor: blog.color + '30',
                boxShadow: `0 20px 40px ${blog.color}15`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <motion.img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                <div
                  className="absolute inset-0 opacity-40"
                  style={{ background: `linear-gradient(to bottom, transparent, ${blog.color}60)` }}
                />
                {/* Category */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold"
                  style={{ background: blog.color }}
                >
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-gray-500 text-xs mb-3">
                  <span className="flex items-center gap-1.5">
                    <FiUser size={12} /> {blog.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={12} /> {blog.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiClock size={12} /> {blog.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold font-heading text-base leading-snug mb-3 group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Read more */}
                <Link to={`/blog/${blog.slug}`}>
                  <motion.div
                    className="flex items-center gap-2 text-sm font-semibold"
                    style={{ color: blog.color }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    Read Article <FiArrowRight size={15} />
                  </motion.div>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/blog">
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, #1a3cff, #4169E1)' }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(26,60,255,0.4)' }}
              whileTap={{ scale: 0.97 }}
            >
              View All Articles <FiArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPreview