import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiCheckCircle, FiUser, FiMail, FiPhone, FiBriefcase, FiMessageSquare, FiDollarSign } from 'react-icons/fi'
import toast from 'react-hot-toast'
import api from '../../services/api'

const services = [
  'Software Development', 'Website Solutions', 'Mobile Applications',
  'Network & Security', 'Cloud Infrastructure', 'Digital Printing',
  'Graphic Design', 'Digital Marketing', 'IT Support',
  'Business Solutions', 'Emerging Technologies', 'BPO & Data Entry',
  'General Enquiry',
]

const budgets = [
  'Less than $500', '$500 – $1,000', '$1,000 – $5,000',
  '$5,000 – $10,000', '$10,000 – $25,000', '$25,000+', 'Not sure yet',
]

const initialForm = {
  name: '', email: '', phone: '', company: '',
  service: '', budget: '', message: '',
}

const InputField = ({ label, icon, required, error, children }) => (
  <div>
    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1.5">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      {icon && (
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {icon}
        </div>
      )}
      {children}
    </div>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
)

const ContactForm = () => {
  const [form,    setForm]    = useState(initialForm)
  const [errors,  setErrors]  = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Full name is required'
    if (!form.email.trim())   e.email   = 'Email address is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                              e.email   = 'Please enter a valid email'
    if (!form.service)        e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Message is required'
    if (form.message.trim().length < 20)
                              e.message = 'Message must be at least 20 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }))
    if (errors[field]) setErrors((p) => ({ ...p, [field]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    try {
      setLoading(true)
      await api.post('/public/contact', form)
      setSuccess(true)
      setForm(initialForm)
      toast.success('Message sent! We will get back to you within 24 hours.')
    } catch {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field) => `
    w-full py-3 rounded-xl border text-sm outline-none
    text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800
    transition-all duration-300
    ${errors[field]
      ? 'border-red-400 bg-red-50'
      : 'border-gray-200 dark:border-gray-700 focus:border-blue-500'}
  `

  const paddedInput = (field) => `${inputClass(field)} pl-10 pr-4`

  /* Success Screen */
  if (success) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center py-20 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', duration: 0.6 }}
      >
        <motion.div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
          style={{ background: 'linear-gradient(135deg,#10b981,#059669)' }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5 }}
        >
          <FiCheckCircle size={40} className="text-white" />
        </motion.div>
        <h3 className="font-heading font-bold text-gray-900 dark:text-white text-2xl mb-3">
          Message Sent Successfully! 🎉
        </h3>
        <p className="text-gray-500 max-w-md leading-relaxed mb-8">
          Thank you for reaching out! Our team will review your message and
          contact you within <strong>24 hours</strong>.
        </p>
        <div className="flex gap-4">
          <motion.button
            onClick={() => setSuccess(false)}
            className="px-6 py-3 rounded-full text-white font-semibold text-sm"
            style={{ background: 'linear-gradient(135deg,#1a3cff,#4169E1)' }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(26,60,255,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            Send Another Message
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="p-8 rounded-3xl"
      style={{
        background: 'white',
        border: '1px solid #e5e7eb',
        boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
      }}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="font-heading font-bold text-gray-900 dark:text-white text-2xl mb-2">
          Send Us A Message
        </h2>
        <p className="text-gray-500 text-sm">
          Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-5">
          {/* Row 1: Name + Email */}
          <div className="grid sm:grid-cols-2 gap-5">
            <InputField label="Full Name" icon={<FiUser size={15} />} required error={errors.name}>
              <input
                type="text"
                placeholder="John Perera"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={paddedInput('name')}
                onFocus={(e) => { if (!errors.name) e.target.style.borderColor = '#1a3cff'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,255,0.1)' }}
                onBlur={(e)  => { e.target.style.borderColor = errors.name ? '#f87171' : '#e5e7eb'; e.target.style.boxShadow = 'none' }}
              />
            </InputField>
            <InputField label="Email Address" icon={<FiMail size={15} />} required error={errors.email}>
              <input
                type="email"
                placeholder="john@company.com"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={paddedInput('email')}
                onFocus={(e) => { if (!errors.email) e.target.style.borderColor = '#1a3cff'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,255,0.1)' }}
                onBlur={(e)  => { e.target.style.borderColor = errors.email ? '#f87171' : '#e5e7eb'; e.target.style.boxShadow = 'none' }}
              />
            </InputField>
          </div>

          {/* Row 2: Phone + Company */}
          <div className="grid sm:grid-cols-2 gap-5">
            <InputField label="Phone Number" icon={<FiPhone size={15} />} error={errors.phone}>
              <input
                type="tel"
                placeholder="+94 76 476 5358"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={paddedInput('phone')}
                onFocus={(e) => { e.target.style.borderColor = '#1a3cff'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,255,0.1)' }}
                onBlur={(e)  => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
              />
            </InputField>
            <InputField label="Company Name" icon={<FiBriefcase size={15} />} error={errors.company}>
              <input
                type="text"
                placeholder="Your Company Ltd."
                value={form.company}
                onChange={(e) => handleChange('company', e.target.value)}
                className={paddedInput('company')}
                onFocus={(e) => { e.target.style.borderColor = '#1a3cff'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,255,0.1)' }}
                onBlur={(e)  => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
              />
            </InputField>
          </div>

          {/* Row 3: Service + Budget */}
          <div className="grid sm:grid-cols-2 gap-5">
            <InputField label="Service Interested In" required error={errors.service}>
              <select
                value={form.service}
                onChange={(e) => handleChange('service', e.target.value)}
                className={`${inputClass('service')} px-4 pr-10 cursor-pointer appearance-none`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  backgroundSize: '16px',
                }}
                onFocus={(e) => { if (!errors.service) e.target.style.borderColor = '#1a3cff'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,255,0.1)' }}
                onBlur={(e)  => { e.target.style.borderColor = errors.service ? '#f87171' : '#e5e7eb'; e.target.style.boxShadow = 'none' }}
              >
                <option value="">Select a service...</option>
                {services.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </InputField>
            <InputField label="Budget Range" icon={<FiDollarSign size={15} />} error={errors.budget}>
              <select
                value={form.budget}
                onChange={(e) => handleChange('budget', e.target.value)}
                className={`${inputClass('budget')} pl-10 pr-10 cursor-pointer appearance-none`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  backgroundSize: '16px',
                }}
                onFocus={(e) => { e.target.style.borderColor = '#1a3cff'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,255,0.1)' }}
                onBlur={(e)  => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none' }}
              >
                <option value="">Select budget range...</option>
                {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </InputField>
          </div>

          {/* Message */}
          <InputField label="Your Message" icon={<FiMessageSquare size={15} />} required error={errors.message}>
            <div className="relative">
              <FiMessageSquare size={15} className="absolute left-3.5 top-3.5 text-gray-400 pointer-events-none" />
              <textarea
                rows={5}
                placeholder="Tell us about your project, goals, timeline, or any questions you have..."
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className={`${inputClass('message')} pl-10 pr-4 pt-3 resize-none`}
                onFocus={(e) => { if (!errors.message) e.target.style.borderColor = '#1a3cff'; e.target.style.boxShadow = '0 0 0 3px rgba(26,60,255,0.1)' }}
                onBlur={(e)  => { e.target.style.borderColor = errors.message ? '#f87171' : '#e5e7eb'; e.target.style.boxShadow = 'none' }}
              />
            </div>
            <div className="text-right text-xs text-gray-400 mt-1">
              {form.message.length} / 500 characters
            </div>
          </InputField>

          {/* Privacy note */}
          <p className="text-gray-400 text-xs leading-relaxed">
            🔒 Your information is encrypted and secure. We never share your data with
            third parties. By submitting this form you agree to our{' '}
            <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </p>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl text-white font-bold text-base flex items-center justify-center gap-3 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1a3cff 0%, #4169E1 100%)',
              boxShadow: '0 0 30px rgba(26,60,255,0.3)',
            }}
            whileHover={!loading ? {
              scale: 1.01,
              boxShadow: '0 0 50px rgba(26,60,255,0.5)',
            } : {}}
            whileTap={!loading ? { scale: 0.99 } : {}}
          >
            {/* Shimmer effect */}
            {!loading && (
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            )}

            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending your message...
              </>
            ) : (
              <>
                <FiSend size={18} />
                Send Message – Get Reply Within 24 Hours
              </>
            )}
          </motion.button>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 pt-2">
            {[
              { emoji: '⭐', text: '99% Satisfaction' },
              { emoji: '⚡', text: '24hr Response' },
              { emoji: '🔒', text: 'Data Secure' },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-1.5 text-gray-400 text-xs">
                <span>{badge.emoji}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </form>
    </motion.div>
  )
}

export default ContactForm