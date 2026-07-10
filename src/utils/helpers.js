// Date formatting
export const formatDate = (date, opts = {}) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', ...opts,
  })

export const formatDateShort = (date) =>
  new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

export const formatDateTime = (date) =>
  new Date(date).toLocaleString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })

export const timeAgo = (date) => {
  const seconds = Math.floor((Date.now() - new Date(date)) / 1000)
  const intervals = [
    [31536000, 'year'], [2592000, 'month'], [86400, 'day'],
    [3600, 'hour'], [60, 'minute'],
  ]
  for (const [secs, unit] of intervals) {
    const count = Math.floor(seconds / secs)
    if (count >= 1) return `${count} ${unit}${count > 1 ? 's' : ''} ago`
  }
  return 'just now'
}

// Text helpers
export const truncate = (text, max = 150) =>
  !text || text.length <= max ? text : text.slice(0, max).trimEnd() + '…'

export const slugify = (text) =>
  text?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || ''

export const capitalize = (text) =>
  text ? text.charAt(0).toUpperCase() + text.slice(1) : ''

export const titleCase = (text) =>
  text?.split(' ').map(capitalize).join(' ') || ''

export const stripHtml = (html) =>
  html?.replace(/<[^>]*>/g, '') || ''

export const getReadTime = (content) => {
  const words = stripHtml(content).trim().split(/\s+/).length
  return `${Math.max(1, Math.ceil(words / 200))} min read`
}

// Number helpers
export const formatCurrency = (amount, currency = 'USD') =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount)

export const formatNumber = (n) =>
  new Intl.NumberFormat('en-US').format(n)

export const formatCompact = (n) => {
  if (n >= 1e9) return `${(n / 1e9).toFixed(1)}B`
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`
  return String(n)
}

export const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

// Color helpers
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : null
}

export const withOpacity = (hex, opacity) => {
  const rgb = hexToRgb(hex)
  return rgb ? `rgba(${rgb.r},${rgb.g},${rgb.b},${opacity})` : hex
}

// DOM helpers
export const scrollToSection = (id, offset = 80) => {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

// Array helpers
export const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size))

export const unique = (arr, key) =>
  key
    ? arr.filter((v, i, a) => a.findIndex((t) => t[key] === v[key]) === i)
    : [...new Set(arr)]

export const shuffle = (arr) =>
  [...arr].sort(() => Math.random() - 0.5)

// Storage helpers
export const storage = {
  get:    (key, fallback = null) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback }
    catch { return fallback }
  },
  set:    (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)) }
    catch {}
  },
  remove: (key) => localStorage.removeItem(key),
  clear:  ()    => localStorage.clear(),
}

// Debounce & throttle
export const debounce = (fn, delay = 300) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export const throttle = (fn, limit = 200) => {
  let lastRun = 0
  return (...args) => {
    const now = Date.now()
    if (now - lastRun >= limit) { lastRun = now; fn(...args) }
  }
}

// Class name helper
export const cn = (...classes) => classes.filter(Boolean).join(' ')

// Generate ID
export const generateId = (prefix = '') =>
  `${prefix}${Math.random().toString(36).slice(2, 9)}`

// Environment
export const isDev  = () => import.meta.env.DEV
export const isProd = () => import.meta.env.PROD
export const getApiUrl = () => import.meta.env.VITE_API_URL || '/api'