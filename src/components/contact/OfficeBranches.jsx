import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

const branches = [
  {
    city:    'Opening Soon...',
    address: '–',
    phone:   '+94 11 XXX XXXX',
    email:   'xxxxxx@hexora.lk',
    hours:   'Mon–Fri: 9AM–6PM, Sat: 9AM–1PM',
    color:   '#1a3cff',
    emoji:   '🏙️',
    main:    true,
  },
 /* {
    city:    'Kandy Branch',
    address: '45, Dalada Veediya, Kandy, Sri Lanka',
    phone:   '+94 81 XXX XXXX',
    email:   'kandy@hexora.lk',
    hours:   'Mon–Fri: 9AM–5PM',
    color:   '#10b981',
    emoji:   '🏔️',
    main:    false,
  },
  {
    city:    'Galle Branch',
    address: '78, Wakwella Road, Galle, Sri Lanka',
    phone:   '+94 91 XXX XXXX',
    email:   'galle@hexora.lk',
    hours:   'Mon–Fri: 9AM–5PM',
    color:   '#8b5cf6',
    emoji:   '🌊',
    main:    false,
  },*/
]

const OfficeBranches = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="Our Offices"
          title={<>Find Us <span style={{ background: 'linear-gradient(135deg,#1a3cff,#4169E1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Across Sri Lanka</span></>}
          subtitle="Three strategically located offices to serve you better wherever you are."
          align="center"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {branches.map((branch, i) => (
            <motion.div
              key={i}
              className="relative p-6 rounded-2xl overflow-hidden"
              style={{
                background: branch.main
                  ? `linear-gradient(135deg, ${branch.color}15, ${branch.color}05)`
                  : 'white',
                border: `${branch.main ? '2px' : '1px'} solid ${branch.main ? branch.color + '40' : '#e5e7eb'}`,
                boxShadow: branch.main
                  ? `0 8px 40px ${branch.color}20`
                  : '0 4px 20px rgba(0,0,0,0.06)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: `0 20px 40px ${branch.color}20` }}
            >
              {branch.main && (
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-white text-xs font-bold"
                  style={{ background: branch.color }}
                >
                  Headquarters
                </div>
              )}

              <div className="text-4xl mb-4">{branch.emoji}</div>
              <h3
                className="font-heading font-bold text-xl mb-4"
                style={{ color: branch.color }}
              >
                {branch.city}
              </h3>

              <div className="space-y-3">
                {[
                  { icon: <FiMapPin size={14} />,  value: branch.address },
                  { icon: <FiPhone size={14} />,   value: branch.phone,  href: `tel:${branch.phone}` },
                  { icon: <FiMail size={14} />,    value: branch.email,  href: `mailto:${branch.email}` },
                  { icon: <FiClock size={14} />,   value: branch.hours },
                ].map((item, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 mt-0.5" style={{ color: branch.color }}>
                      {item.icon}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <motion.a
                href={`https://maps.google.com?q=${encodeURIComponent(branch.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-xl text-xs font-semibold text-white"
                style={{ background: `linear-gradient(135deg, ${branch.color}, ${branch.color}cc)` }}
                whileHover={{ scale: 1.04, boxShadow: `0 0 15px ${branch.color}50` }}
                whileTap={{ scale: 0.97 }}
              >
                <FiMapPin size={12} /> Get Directions
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfficeBranches