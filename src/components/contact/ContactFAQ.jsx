import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

const faqs = [
  { q: 'How quickly can you start my project?',              a: 'For most projects, we can start within 1-2 weeks of signing the agreement. Urgent projects can often begin within 48 hours.' },
  { q: 'Do you provide free consultations?',                 a: 'Yes! All initial consultations are completely free with no obligation. We believe in understanding your needs before recommending solutions.' },
  { q: 'What information do I need to get a quote?',        a: 'A brief description of your project, your goals, approximate timeline, and budget range is enough to get started. We\'ll ask for more details in our consultation call.' },
  { q: 'How do you communicate during projects?',           a: 'We use Slack or Microsoft Teams for daily communication, weekly video calls for progress updates, and a dedicated project management dashboard for task tracking.' },
  { q: 'Do you work with international clients?',           a: 'Absolutely! We work with clients across 12+ countries. We accommodate different time zones and communicate in English.' },
  { q: 'What payment methods do you accept?',              a: 'We accept bank transfers, credit/debit cards, PayPal, and local payment methods. We typically work with a 50% upfront deposit for new projects.' },
  { q: 'Do you sign NDAs and confidentiality agreements?',  a: 'Yes, we sign NDAs before discussing any sensitive project details. Your business information is always kept strictly confidential.' },
  { q: 'What happens after my project is delivered?',       a: 'All projects include a 30-day bug-fix warranty. We also offer ongoing support and maintenance packages to keep your solution running perfectly.' },
]

const FAQItem = ({ faq, i }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="rounded-2xl overflow-hidden"
      style={{ border: '1px solid #e5e7eb', background: 'white' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.06 }}
    >
      <motion.button
        className="w-full flex items-center justify-between p-5 text-left"
        style={{ background: open ? 'rgba(26,60,255,0.03)' : 'white' }}
        onClick={() => setOpen(!open)}
        whileHover={{ background: 'rgba(26,60,255,0.03)' }}
      >
        <span className="font-semibold text-gray-900 text-sm pr-4 leading-snug">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
          style={{ color: '#1a3cff' }}
        >
          <FiChevronDown size={18} />
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="px-5 pb-5 text-gray-500 text-sm leading-relaxed"
              style={{ borderTop: '1px solid rgba(26,60,255,0.08)' }}
            >
              <div className="pt-4">{faq.a}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const ContactFAQ = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="Common Questions"
          title={<>Frequently Asked <span style={{ background: 'linear-gradient(135deg,#1a3cff,#4169E1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Questions</span></>}
          subtitle="Everything you need to know before getting in touch with us."
          align="center"
        />

        <div className="max-w-3xl mx-auto grid gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactFAQ