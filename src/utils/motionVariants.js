// ============================================================
// HEXORA SOLUTIONS – FRAMER MOTION VARIANTS
// ============================================================

// Page transitions
export const pageVariants = {
  initial:  { opacity: 0, y: 20 },
  animate:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  exit:     { opacity: 0, y: -20, transition: { duration: 0.3 } },
}

// Fade in up
export const fadeInUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
}

// Fade in down
export const fadeInDown = {
  hidden:  { opacity: 0, y: -40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6 },
  }),
}

// Fade in left
export const fadeInLeft = {
  hidden:  { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}

// Fade in right
export const fadeInRight = {
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
}

// Scale in
export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { delay: i * 0.06, duration: 0.5, type: 'spring', damping: 20 },
  }),
}

// Stagger container
export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

// Stagger item
export const staggerItem = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
}

// Card hover
export const cardHover = {
  rest:  { y: 0, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transition: { duration: 0.3 } },
  hover: { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.15)', transition: { duration: 0.3 } },
}

// Button hover
export const buttonHover = {
  rest:  { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.2 } },
  tap:   { scale: 0.97 },
}

// Navbar collapse
export const navbarVariants = {
  open:   { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  closed: { opacity: 0, height: 0,      transition: { duration: 0.3 } },
}

// Drawer slide
export const drawerVariants = {
  open:   { x: 0,     transition: { type: 'spring', damping: 30, stiffness: 300 } },
  closed: { x: '100%',transition: { type: 'spring', damping: 30, stiffness: 300 } },
}

// Count up reveal
export const countUpVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
}

// Floating animation
export const floatingVariants = {
  animate: {
    y:          [0, -20, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

// Pulse glow
export const pulseGlow = {
  animate: {
    boxShadow: [
      '0 0 10px rgba(26,60,255,0.3)',
      '0 0 30px rgba(26,60,255,0.7)',
      '0 0 10px rgba(26,60,255,0.3)',
    ],
    transition: { duration: 2, repeat: Infinity },
  },
}

// Rotate
export const rotateVariants = {
  animate: {
    rotate: [0, 360],
    transition: { duration: 8, repeat: Infinity, ease: 'linear' },
  },
}

// Shimmer (for loading)
export const shimmerVariants = {
  animate: {
    backgroundPosition: ['200% center', '-200% center'],
    transition: { duration: 2, repeat: Infinity, ease: 'linear' },
  },
}

// Accordion
export const accordionVariants = {
  open:   { height: 'auto', opacity: 1, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
  closed: { height: 0,      opacity: 0, transition: { duration: 0.3 } },
}

// Modal
export const modalVariants = {
  hidden:  { opacity: 0, scale: 0.85, y: 40 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { type: 'spring', damping: 25, stiffness: 300 } },
  exit:    { opacity: 0, scale: 0.85, y: 40, transition: { duration: 0.25 } },
}

// Overlay
export const overlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit:    { opacity: 0, transition: { duration: 0.25 } },
}

// Slide up (toast/notification)
export const slideUp = {
  hidden:  { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { type: 'spring', damping: 25 } },
  exit:    { opacity: 0, y: -20,             transition: { duration: 0.2 } },
}

// Text char stagger
export const charVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.03, duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  }),
}

// Hero section
export const heroVariants = {
  badge: {
    hidden:  { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
  },
  title: {
    hidden:  { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  },
  subtitle: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.5 } },
  },
  buttons: {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7 } },
  },
  visual: {
    hidden:  { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1,   rotate: 0, transition: { duration: 1, delay: 0.4, type: 'spring' } },
  },
}