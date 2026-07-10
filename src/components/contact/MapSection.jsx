import { motion } from 'framer-motion'

const MapSection = () => {
  return (
    <section className="py-6 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          className="rounded-3xl overflow-hidden shadow-xl"
          style={{ height: '420px', border: '1px solid #e5e7eb' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80392064921!2d79.82118!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'saturate(0.8) hue-rotate(200deg)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hexora Solutions Office Location"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default MapSection