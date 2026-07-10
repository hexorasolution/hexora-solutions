import { useState } from 'react'
import { Helmet }  from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiMapPin, FiClock, FiBriefcase, FiDollarSign,
  FiChevronDown, FiChevronUp, FiUpload, FiSend,
  FiArrowRight, FiCheckCircle,
} from 'react-icons/fi'
import PageHeroBanner from '../../components/about/PageHeroBanner'
import SectionTitle   from '../../components/ui/SectionTitle'
import toast          from 'react-hot-toast'

const benefits = [
  { emoji: '💰', title: 'Competitive Salary',   desc: 'Market-leading pay reviewed every 6 months based on performance.' },
  { emoji: '📈', title: 'Career Growth',        desc: 'Clear career paths with mentorship from senior industry experts.' },
  { emoji: '🏠', title: 'Remote Flexibility',   desc: 'Hybrid work model — work from home 3 days a week.' },
  { emoji: '🏥', title: 'Health Insurance',     desc: 'Comprehensive medical insurance for you and your immediate family.' },
  { emoji: '🎓', title: 'Learning Budget',      desc: 'LKR 50,000 annual budget for courses, certifications, and conferences.' },
  { emoji: '🎉', title: 'Fun Culture',          desc: 'Team outings, game nights, hackathons, and quarterly retreats.' },
  { emoji: '⚡', title: 'Latest Equipment',     desc: 'MacBook Pro or equivalent, dual monitors, ergonomic setup.' },
  { emoji: '🍕', title: 'Free Meals & Snacks',  desc: 'Stocked pantry, catered lunches on Fridays, and coffee on tap.' },
]

const jobs = [
  {
    id: 1, title: 'Senior React Developer',
    dept: 'Development', location: 'Colombo / Remote',
    type: 'Full-time', salary: 'LKR 200,000 – 350,000',
    color: '#1a3cff', urgent: true,
    requirements: ['5+ years React.js experience', 'Node.js & REST APIs', 'MySQL / MongoDB', 'Git & Agile', 'TypeScript preferred'],
    description: 'We are looking for a Senior React Developer to lead frontend development of our enterprise SaaS products. You will architect scalable UI components, mentor junior developers, and collaborate directly with clients.',
  },
  {
    id: 2, title: 'UI/UX Designer',
    dept: 'Design', location: 'Colombo',
    type: 'Full-time', salary: 'LKR 120,000 – 200,000',
    color: '#8b5cf6', urgent: false,
    requirements: ['3+ years UI/UX experience', 'Figma expert', 'Prototyping skills', 'User research', 'Basic HTML/CSS knowledge'],
    description: 'Join our creative team as a UI/UX Designer and shape digital experiences for clients across Sri Lanka and internationally. You will own the design process from research to final handoff.',
  },
  {
    id: 3, title: 'Digital Marketing Specialist',
    dept: 'Marketing', location: 'Colombo / Remote',
    type: 'Full-time', salary: 'LKR 80,000 – 150,000',
    color: '#10b981', urgent: false,
    requirements: ['3+ years digital marketing', 'Google Ads & Analytics', 'Meta Ads certified', 'SEO/SEM knowledge', 'Content creation'],
    description: 'Drive digital growth for Hexora and our clients. You will plan and execute multi-channel campaigns, optimize for ROI, and report on performance across all digital channels.',
  },
  {
    id: 4, title: 'Mobile App Developer (React Native)',
    dept: 'Development', location: 'Remote',
    type: 'Full-time', salary: 'LKR 150,000 – 280,000',
    color: '#f59e0b', urgent: true,
    requirements: ['3+ years React Native', 'iOS & Android publishing', 'Firebase / REST APIs', 'Redux / Context API', 'Expo experience a plus'],
    description: 'Build the next generation of mobile applications for our growing client base. You will work on AI-integrated apps, e-commerce platforms, and enterprise mobile solutions.',
  },
  {
    id: 5, title: 'Project Manager',
    dept: 'Operations', location: 'Colombo',
    type: 'Full-time', salary: 'LKR 130,000 – 220,000',
    color: '#ec4899', urgent: false,
    requirements: ['PMP certification preferred', '4+ years IT project management', 'Agile/Scrum master', 'Client communication skills', 'Jira & Confluence'],
    description: 'Lead complex digital transformation projects from initiation to delivery. You will manage cross-functional teams, client relationships, budgets, and timelines for 5-10 active projects.',
  },
  {
    id: 6, title: 'DevOps Engineer',
    dept: 'Development', location: 'Remote',
    type: 'Full-time', salary: 'LKR 180,000 – 300,000',
    color: '#06b6d4', urgent: false,
    requirements: ['AWS / Azure certified', 'Docker & Kubernetes', 'CI/CD pipelines', 'Linux administration', 'Terraform / Ansible'],
    description: 'Build and maintain our cloud infrastructure, CI/CD pipelines, and DevOps practices. You will ensure 99.9% uptime for all client systems and drive our cloud-first strategy.',
  },
]

/* ── Job Card ─────────────────────────────────── */
const JobCard = ({ job, i, onApply }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="rounded-2xl overflow-hidden"
      style={{ background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.5 }}
      whileHover={{ boxShadow: `0 15px 40px ${job.color}15`, borderColor: job.color + '30' }}
    >
      {/* Header */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${job.color}, ${job.color}cc)` }}
            >
              {job.dept.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h3 className="font-heading font-bold text-gray-900 text-lg">{job.title}</h3>
                {job.urgent && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold text-white"
                    style={{ background: '#ef4444' }}>
                    🔥 Urgent
                  </span>
                )}
              </div>
              <p style={{ color: job.color }} className="text-sm font-semibold">{job.dept}</p>
            </div>
          </div>

          <motion.button
            onClick={()=> setExpanded(!expanded)}
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-400"
            style={{ background: 'rgba(26,60,255,0.06)' }}
            whileHover={{ background: job.color, color: 'white' }}
            whileTap={{ scale: 0.9 }}
          >
            {expanded ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
          </motion.button>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center gap-1.5"><FiMapPin size={13} /> {job.location}</span>
          <span className="flex items-center gap-1.5"><FiClock size={13} /> {job.type}</span>
          <span className="flex items-center gap-1.5"><FiDollarSign size={13} /> {job.salary}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {job.requirements.slice(0, 3).map((req) => (
            <span key={req} className="px-2.5 py-1 rounded-full text-xs font-medium"
              style={{ background: `${job.color}08`, color: job.color }}>
              {req.split(' ').slice(0, 2).join(' ')}
            </span>
          ))}
        </div>
      </div>

      {/* Expanded */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-6 pb-6 border-t border-gray-100">
              <p className="text-gray-500 text-sm leading-relaxed mt-5 mb-5">{job.description}</p>

              <h4 className="font-semibold text-gray-900 text-sm mb-3">Requirements:</h4>
              <div className="space-y-2 mb-6">
                {job.requirements.map((req, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <FiCheckCircle size={15} className="flex-shrink-0 mt-0.5" style={{ color: job.color }} />
                    <span className="text-gray-600 text-sm">{req}</span>
                  </div>
                ))}
              </div>

              <motion.button
                onClick={() => onApply(job)}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm"
                style={{ background: `linear-gradient(135deg, ${job.color}, ${job.color}cc)` }}
                whileHover={{ scale: 1.04, boxShadow: `0 0 20px ${job.color}50` }}
                whileTap={{ scale: 0.97 }}
              >
                Apply for This Position <FiArrowRight size={15} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ── Application Form ─────────────────────────── */
const ApplicationForm = ({ job, onClose }) => {
  const [form,    setForm]    = useState({
    fullName: '', email: '', phone: '',
    experience: '', portfolioLink: '', coverLetter: '',
  })
  const [loading, setLoading] = useState(false)
  const [cvFile,  setCvFile]  = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!cvFile) return toast.error('Please upload your CV')
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    toast.success('Application submitted! We will contact you within 5 business days.')
    setLoading(false)
    onClose()
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 40 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-6 rounded-t-3xl text-white"
          style={{ background: `linear-gradient(135deg, ${job.color}, ${job.color}cc)` }}
        >
          <h3 className="font-heading font-bold text-xl mb-1">Apply for {job.title}</h3>
          <p className="text-white/80 text-sm">{job.dept} · {job.location} · {job.type}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {[
            { label: 'Full Name *',       name: 'fullName',     type: 'text',  placeholder: 'Your full name' },
            { label: 'Email Address *',   name: 'email',        type: 'email', placeholder: 'your@email.com' },
            { label: 'Phone Number',      name: 'phone',        type: 'tel',   placeholder: '+94 XX XXX XXXX' },
            { label: 'Years of Experience', name: 'experience', type: 'text',  placeholder: 'e.g. 4 years' },
            { label: 'Portfolio / GitHub Link', name: 'portfolioLink', type: 'url', placeholder: 'https://...' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block text-gray-700 text-sm font-medium mb-1.5">{field.label}</label>
              <input
                type={field.type}
                required={field.label.includes('*')}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border text-sm outline-none text-gray-700"
                style={{ borderColor: '#e5e7eb' }}
                onFocus={(e) => { e.target.style.borderColor = job.color }}
                onBlur={(e)  => { e.target.style.borderColor = '#e5e7eb' }}
              />
            </div>
          ))}

          {/* CV Upload */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1.5">Upload CV / Resume *</label>
            <label
              className="flex items-center gap-3 w-full px-4 py-4 rounded-xl border-2 border-dashed cursor-pointer transition-colors duration-200"
              style={{
                borderColor: cvFile ? job.color : '#e5e7eb',
                background: cvFile ? `${job.color}05` : 'transparent',
              }}
            >
              <FiUpload size={18} style={{ color: job.color }} />
              <span className="text-gray-500 text-sm">
                {cvFile ? cvFile.name : 'Click to upload PDF, DOC, DOCX (max 5MB)'}
              </span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => setCvFile(e.target.files[0])}
              />
            </label>
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1.5">Cover Letter</label>
            <textarea
              rows={4}
              placeholder="Tell us why you are the perfect fit for this role..."
              value={form.coverLetter}
              onChange={(e) => setForm({ ...form, coverLetter: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none text-gray-700"
              style={{ borderColor: '#e5e7eb' }}
              onFocus={(e) => { e.target.style.borderColor = job.color }}
              onBlur={(e)  => { e.target.style.borderColor = '#e5e7eb' }}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <motion.button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border text-gray-600 font-semibold text-sm"
              style={{ borderColor: '#e5e7eb' }}
              whileHover={{ background: '#f9fafb' }}
              whileTap={{ scale: 0.98 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              disabled={loading}
              className="flex-1 py-3 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2"
              style={{ background: `linear-gradient(135deg, ${job.color}, ${job.color}cc)` }}
              whileHover={{ scale: 1.02, boxShadow: `0 0 20px ${job.color}50` }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <><FiSend size={15} /> Submit Application</>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

/* ── Main Page ────────────────────────────────── */
const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const depts    = ['All', 'Development', 'Design', 'Marketing', 'Operations']
  const filtered = activeFilter === 'All' ? jobs : jobs.filter((j) => j.dept === activeFilter)

  return (
    <>
      <Helmet>
        <title>Careers | Hexora Solutions</title>
        <meta name="description" content="Join the Hexora Solutions team! Explore exciting career opportunities in software development, design, marketing, and more." />
        <link rel="canonical" href="https://hexora.lk/careers" />
      </Helmet>

      <PageHeroBanner
        badge="Join Our Team"
        title="Build The Future"
        titleHighlight="With Us"
        subtitle="We're always looking for talented people who are passionate about technology and want to make a real impact. Come grow with us."
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Careers' }]}
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
      />

      {/* Benefits */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-6">
          <SectionTitle
            badge="Why Join Hexora?"
            title={<>Benefits That Make A <span style={{ background: 'linear-gradient(135deg,#1a3cff,#4169E1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Difference</span></>}
            subtitle="We believe happy employees build better products. Here is what we offer beyond just a great salary."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl group"
                style={{ background: 'white', border: '1px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(26,60,255,0.1)', borderColor: 'rgba(26,60,255,0.3)' }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {b.emoji}
                </motion.div>
                <h3 className="font-heading font-bold text-gray-900 text-base mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 60%, #0a0f1e 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(26,60,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26,60,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container mx-auto px-6 relative">
          <SectionTitle
            badge="Open Positions"
            title={<>We Are <span style={{ background: 'linear-gradient(135deg,#60a5fa,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Hiring!</span></>}
            subtitle={`${jobs.length} open positions across ${depts.length - 1} departments. Find your perfect role.`}
            align="center"
            light
          />

          {/* Dept Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {depts.map((d) => (
              <motion.button
                key={d}
                onClick={() => setActiveFilter(d)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold"
                style={
                  activeFilter === d
                    ? { background: 'linear-gradient(135deg,#1a3cff,#4169E1)', color: 'white' }
                    : { background: 'rgba(255,255,255,0.05)', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.1)' }
                }
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {d}
              </motion.button>
            ))}
          </div>

          {/* Jobs Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <AnimatePresence>
              {filtered.map((job, i) => (
                <JobCard key={job.id} job={job} i={i} onApply={setSelectedJob} />
              ))}
            </AnimatePresence>
          </div>

          {/* No openings CTA */}
          <motion.div
            className="text-center mt-14 p-8 rounded-2xl max-w-lg mx-auto"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl mb-3">💌</div>
            <h3 className="text-white font-bold mb-2">Don't See a Matching Role?</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              We're always interested in connecting with talented people. Send us your CV and we'll keep you in mind for future opportunities.
            </p>
            <a href="mailto:careers@hexora.lk">
              <motion.button
                className="px-6 py-3 rounded-full text-white font-semibold text-sm"
                style={{ background: 'linear-gradient(135deg,#1a3cff,#4169E1)' }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(26,60,255,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                Send Open Application →
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob && (
          <ApplicationForm job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default CareersPage