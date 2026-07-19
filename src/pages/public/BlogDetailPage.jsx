import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet }  from 'react-helmet-async'
import { motion }  from 'framer-motion'
import {
  FiArrowLeft, FiCalendar, FiClock, FiUser,
  FiShare2, FiTag, FiBookmark, FiThumbsUp,
} from 'react-icons/fi'
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { useState } from 'react'

const blogPosts = [
  {
    id: 1, slug: 'future-of-ai-in-business-2025',
    title: 'The Future of AI in Business: What You Need to Know in 2025',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=80',
    category: 'AI & ML', author: 'Ashan Perera',
    authorAvatar: 'AP', authorBio: 'CEO of Hexora Solution with 10+ years in software engineering.',
    date: 'January 15, 2025', readTime: '8 min',
    color: '#06b6d4', tags: ['AI', 'Business', 'Technology', '2025'],
    content: `
      <h2>Introduction: AI is No Longer Optional</h2>
      <p>Artificial Intelligence has moved from the realm of science fiction to the boardroom. In 2025, businesses that haven't integrated AI into their operations are already falling behind. The question is no longer "should we adopt AI?" but rather "how do we adopt AI effectively?"</p>

      <h2>The Current State of AI in Business</h2>
      <p>The global AI market reached $200 billion in 2024 and is projected to hit $1 trillion by 2030. More importantly, 77% of businesses worldwide are already using or exploring AI in some capacity. In Sri Lanka, adoption is accelerating, with industries from banking to healthcare embracing intelligent automation.</p>

      <h3>Key AI Applications Transforming Business Today</h3>
      <ul>
        <li><strong>Customer Service Automation:</strong> AI chatbots now handle 80% of routine queries, reducing response time from hours to seconds.</li>
        <li><strong>Predictive Analytics:</strong> Machine learning models analyze sales patterns, predict inventory needs, and identify revenue opportunities before humans can spot them.</li>
        <li><strong>Process Automation:</strong> RPA combined with AI is eliminating repetitive manual tasks, saving businesses 30-50 hours per week on average.</li>
        <li><strong>Fraud Detection:</strong> Financial institutions using AI detect 95% of fraudulent transactions in real-time.</li>
        <li><strong>Personalization:</strong> AI-driven personalization increases e-commerce conversion rates by up to 300%.</li>
      </ul>

      <h2>The AI Technologies Shaping 2025</h2>
      <p>Several breakthrough technologies are defining the AI landscape this year:</p>

      <h3>1. Large Language Models (LLMs)</h3>
      <p>GPT-4 and its successors are being integrated into business workflows for content creation, code generation, customer support, and data analysis. Businesses are building custom AI assistants trained on their specific data and processes.</p>

      <h3>2. Computer Vision</h3>
      <p>Visual AI is transforming manufacturing quality control, retail shelf monitoring, security systems, and healthcare diagnostics. The cost of implementation has dropped 70% in three years.</p>

      <h3>3. Agentic AI</h3>
      <p>2025 marks the rise of AI agents — systems that can plan, execute, and iterate on complex multi-step tasks autonomously. These agents are beginning to handle entire workflows without human intervention.</p>

      <h2>How to Start Your AI Journey</h2>
      <p>For businesses looking to adopt AI, we recommend a phased approach:</p>
      <ol>
        <li><strong>Identify Pain Points:</strong> Start with processes that are repetitive, time-consuming, or error-prone.</li>
        <li><strong>Start Small:</strong> Pilot one AI use case before scaling across the organization.</li>
        <li><strong>Build Data Infrastructure:</strong> AI is only as good as your data. Invest in clean, structured data first.</li>
        <li><strong>Partner with Experts:</strong> Work with AI implementation specialists who understand your industry.</li>
        <li><strong>Measure and Iterate:</strong> Set clear KPIs and continuously improve your AI implementations.</li>
      </ol>

      <h2>Conclusion</h2>
      <p>AI is not a technology of the future — it's a competitive necessity of the present. Businesses that embrace AI thoughtfully and strategically in 2025 will be positioned for sustained growth and competitive advantage. The window for early-mover advantage is closing. The time to act is now.</p>
    `,
  },
]

const BlogDetailPage = () => {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(47)

  if (!post) return <Navigate to="/blog" replace />

  const handleLike = () => {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Hexora Blog</title>
        <meta name="description" content={post.title} />
      </Helmet>

      {/* Hero */}
      <section
        className="relative min-h-96 flex items-end pb-0 overflow-hidden pt-24"
        style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 50%, #0a0f1e 100%)' }}
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${post.image})` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0a0f1e 40%, rgba(10,15,30,0.7))' }} />

        <div className="container mx-auto px-6 relative pb-12">
          <Link to="/blog">
            <motion.div className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors"
              whileHover={{ x: -4 }}>
              <FiArrowLeft /> Back to Blog
            </motion.div>
          </Link>

          <div
            className="inline-block px-3 py-1.5 rounded-full text-white text-xs font-bold mb-5"
            style={{ background: post.color }}
          >
            {post.category}
          </div>

          <motion.h1
            className="font-heading font-black text-white mb-5 max-w-4xl"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', lineHeight: 1.15 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {post.title}
          </motion.h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ background: post.color }}>
                {post.authorAvatar}
              </div>
              <span>{post.author}</span>
            </div>
            <span className="flex items-center gap-1.5"><FiCalendar size={13} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><FiClock size={13} /> {post.readTime} read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12">

            {/* Article */}
            <article className="lg:col-span-3">
              {/* Hero image */}
              <div className="rounded-2xl overflow-hidden aspect-video mb-10 shadow-xl">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>

              {/* Content */}
              <div
                className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300"
                style={{
                  '--tw-prose-headings': '#111827',
                  '--tw-prose-body': '#4b5563',
                }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-gray-100 dark:border-gray-800">
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span key={tag}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: `${post.color}10`, color: post.color, border: `1px solid ${post.color}20` }}>
                      <FiTag size={10} /> {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4">
                  <motion.button
                    onClick={handleLike}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                    style={
                      liked
                        ? { background: '#1a3cff', color: 'white' }
                        : { background: 'rgba(26,60,255,0.08)', color: '#1a3cff', border: '1px solid rgba(26,60,255,0.2)' }
                    }
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <FiThumbsUp size={15} /> {likes} Helpful
                  </motion.button>

                  <motion.button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                    style={{ background: 'rgba(26,60,255,0.08)', color: '#1a3cff', border: '1px solid rgba(26,60,255,0.2)' }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <FiBookmark size={15} /> Save
                  </motion.button>

                  {/* Share */}
                  <div className="flex items-center gap-2 ml-auto">
                    <span className="text-gray-400 text-sm flex items-center gap-1.5">
                      <FiShare2 size={13} /> Share:
                    </span>
                    {[
                      { icon: <FiFacebook />, color: '#1877f2', label: 'Facebook' },
                      { icon: <FiTwitter />,  color: '#1da1f2', label: 'Twitter' },
                      { icon: <FiLinkedin />, color: '#0a66c2', label: 'LinkedIn' },
                    ].map((s) => (
                      <motion.a
                        key={s.label}
                        href="#"
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
                        style={{ background: s.color }}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {s.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author box */}
              <div className="mt-10 p-6 rounded-2xl"
                style={{ background: 'rgba(26,60,255,0.04)', border: '1px solid rgba(26,60,255,0.1)' }}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ background: post.color }}>
                    {post.authorAvatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-0.5">{post.author}</h4>
                    <p className="text-blue-600 text-xs font-medium mb-2">Author & Contributor</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{post.authorBio}</p>
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="p-6 rounded-2xl sticky top-24"
                style={{ background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                <h3 className="font-heading font-bold text-gray-900 text-base mb-4">Need Help?</h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  Want to implement AI or digital solutions for your business? Our experts are ready to help.
                </p>
                <Link to="/contact">
                  <motion.button
                    className="w-full py-3 rounded-xl text-white font-bold text-sm"
                    style={{ background: `linear-gradient(135deg, ${post.color}, ${post.color}cc)` }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Free Consultation →
                  </motion.button>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetailPage