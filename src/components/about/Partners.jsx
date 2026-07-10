import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'

const partners = [
  { name: 'Microsoft',    color: '#0078d4', emoji: '🖥️' },
  { name: 'Google Cloud', color: '#4285f4', emoji: '☁️' },
  { name: 'AWS',          color: '#ff9900', emoji: '🟠' },
  { name: 'Meta',         color: '#1877f2', emoji: '📘' },
  { name: 'Stripe',       color: '#635bff', emoji: '💳' },
  { name: 'Shopify',      color: '#96bf48', emoji: '🛍️' },
  { name: 'Zoho',         color: '#e42527', emoji: '📊' },
  { name: 'Twilio',       color: '#f22f46', emoji: '📞' },
]

const Partners = () => {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #0a0f1e 0%, #0d1b3e 60%, #0a0f1e 100%)',
      }}
    >
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
          badge="Technology Partners"
          title={
            <>
              Our Trusted{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Partners
              </span>
            </>
          }
          subtitle="We collaborate with the world's leading technology companies to deliver best-in-class solutions."
          align="center"
          light
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{
                background: 'rgba(255,255,255,0.07)',
                borderColor: partner.color + '40',
                scale: 1.04,
                boxShadow: `0 10px 30px ${partner.color}15`,
              }}
            >
              <span className="text-4xl">{partner.emoji}</span>
              <span
                className="text-sm font-bold"
                style={{ color: partner.color }}
              >
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners