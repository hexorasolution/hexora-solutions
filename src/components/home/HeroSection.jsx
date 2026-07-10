import { useRef, useEffect, Suspense } from 'react'
import { Canvas }   from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import { motion }   from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Link }     from 'react-router-dom'
import { FiPlay, FiArrowRight, FiChevronDown } from 'react-icons/fi'
import gsap         from 'gsap'
import HexagonModel from '../three/HexagonModel'
import ParticleField from '../three/ParticleField'

const stats = [
  { number: '250+', label: 'Projects Done'      },
  { number: '100+', label: 'Happy Clients'      },
  { number: '15+',  label: 'Services'           },
  { number: '99%',  label: 'Satisfaction Rate'  },
]

const HeroSection = () => {
  const titleRef  = useRef(null)
  const badgeRef  = useRef(null)
  const btnsRef   = useRef(null)
  const statsRef  = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(badgeRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8 }
    )
    .fromTo(titleRef.current?.children || [],
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.15 },
      '-=0.4'
    )
    .fromTo(btnsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.3'
    )
    .fromTo(statsRef.current?.children || [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
      '-=0.3'
    )
  }, [])

  return (
    <section className="hero">
      {/* Grid overlay */}
      <div className="hero__grid" />

      {/* Glow orbs */}
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      {/* 3D Canvas Background */}
      <div className="hero__canvas">
        <Canvas
          gl={{ antialias: true, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <PerspectiveCamera makeDefault fov={60} position={[0, 0, 6]} />
          <Suspense fallback={null}>
            <Stars
              radius={80}
              depth={50}
              count={3000}
              factor={3}
              saturation={0.5}
              fade
              speed={0.5}
            />
            <ParticleField count={120} />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="hero__content">
        {/* Left – Text */}
        <div>
          {/* Badge */}
          <motion.div
            ref={badgeRef}
            className="hero__badge"
            initial={{ opacity: 0 }}
          >
            <span className="dot" />
            🚀 Sri Lanka's Leading Digital Solutions Provider
          </motion.div>

          {/* Title */}
          <div ref={titleRef} className="hero__title">
            <div>Transforming Ideas</div>
            <div>
              Into{' '}
              <span className="gradient">Digital Reality</span>
            </div>
          </div>

          {/* Typing Animation */}
          <div className="hero__typing">
            <span className="prefix">We build</span>
            <TypeAnimation
              sequence={[
                'Software Development',  2000,
                'Website Solutions',     2000,
                'Mobile Applications',   2000,
                'Cloud Services',        2000,
                'Digital Marketing',     2000,
                'AI Solutions',          2000,
                'ERP Systems',           2000,
                'Network Solutions',     2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ color: '#60a5fa', fontWeight: 700 }}
            />
          </div>

          {/* Description */}
          <motion.p
            className="hero__description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            We are a full-service digital agency empowering businesses with
            cutting-edge technology solutions. From concept to deployment,
            we bring your vision to life.
          </motion.p>

          {/* Buttons */}
          <div ref={btnsRef} className="hero__buttons" style={{ opacity: 0 }}>
            <Link to="/contact">
              <motion.button
                className="btn-primary"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(26,60,255,0.7)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Get Free Consultation</span>
                <FiArrowRight />
              </motion.button>
            </Link>

            <Link to="/portfolio">
              <motion.button
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiPlay size={16} />
                <span>View Our Portfolio</span>
              </motion.button>
            </Link>
          </div>

          {/* Mini Stats */}
          <div ref={statsRef} className="hero__stats" style={{ opacity: 0 }}>
            {stats.map((stat, i) => (
              <div key={i} className="hero__stats-item">
                <div
                  className="number"
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa, #818cf8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.number}
                </div>
                <div className="label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – 3D Model */}
        <div className="hero__visual">
          {/* Decorative rings */}
          <div className="hero__visual-ring hero__visual-ring--1" />
          <div className="hero__visual-ring hero__visual-ring--2" />
          <div className="hero__visual-ring hero__visual-ring--3" />

          <Canvas
            className="hero__visual-canvas"
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <PerspectiveCamera makeDefault fov={50} position={[0, 0, 5]} />
            <Suspense fallback={null}>
              <HexagonModel />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 3}
            />
          </Canvas>

          {/* Floating info cards */}
          <FloatingCard
            style={{ top: '15%', right: '-10%' }}
            delay={1.2}
            icon="⚡"
            title="Fast Delivery"
            subtitle="On-time projects"
          />
          <FloatingCard
            style={{ bottom: '20%', left: '-12%' }}
            delay={1.5}
            icon="🛡️"
            title="Secure & Reliable"
            subtitle="Enterprise grade"
          />
          <FloatingCard
            style={{ bottom: '5%', right: '5%' }}
            delay={1.8}
            icon="🌟"
            title="5-Star Rated"
            subtitle="99% satisfaction"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-line" />
        <FiChevronDown
          style={{ animation: 'float 2s ease-in-out infinite' }}
        />
      </div>
    </section>
  )
}

const FloatingCard = ({ style, delay, icon, title, subtitle }) => (
  <motion.div
    className="absolute"
    style={{
      ...style,
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '16px',
      padding: '12px 16px',
      zIndex: 20,
    }}
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.6, type: 'spring' }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
        style={{ background: 'rgba(26,60,255,0.2)' }}
      >
        {icon}
      </div>
      <div>
        <div className="text-white text-sm font-semibold leading-none mb-1">
          {title}
        </div>
        <div className="text-gray-400 text-xs">{subtitle}</div>
      </div>
    </div>
  </motion.div>
)

export default HeroSection