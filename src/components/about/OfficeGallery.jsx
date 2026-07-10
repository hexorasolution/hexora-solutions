import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionTitle from '../ui/SectionTitle'

const images = [
  { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80', caption: 'Our Main Office', span: 'col-span-2' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80', caption: 'Team Collaboration' },
  { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80', caption: 'Development Lab' },
  { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&q=80', caption: 'Meeting Room' },
  { src: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=400&q=80', caption: 'Creative Studio' },
  { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80', caption: 'Tech Infrastructure', span: 'col-span-2' },
]

const OfficeGallery = () => {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (i)  => setLightbox(i)
  const closeLightbox = ()  => setLightbox(null)
  const prevImage = ()      => setLightbox((p) => (p - 1 + images.length) % images.length)
  const nextImage = ()      => setLightbox((p) => (p + 1) % images.length)

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
          badge="Our Workspace"
          title={
            <>
              Life At{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Hexora
              </span>
            </>
          }
          subtitle="A look inside our creative workspace where innovation and collaboration come alive every day."
          align="center"
          light
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative rounded-2xl overflow-hidden cursor-pointer ${img.span || ''}`}
              style={{ aspectRatio: img.span ? '16/7' : '1/1' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(i)}
            >
              <motion.img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 flex items-end p-4 opacity-0"
                style={{ background: 'linear-gradient(to top, rgba(10,15,30,0.8), transparent)' }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white text-sm font-medium">{img.caption}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.95)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightbox].src}
                alt={images[lightbox].caption}
                className="w-full rounded-2xl"
              />
              <p className="text-white text-center mt-4 font-medium">
                {images[lightbox].caption}
              </p>

              {/* Controls */}
              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ background: '#1a3cff' }}
              >
                <FiX />
              </button>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ background: 'rgba(255,255,255,0.1)' }}
              >
                <FiChevronRight />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default OfficeGallery