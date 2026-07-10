/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        royal: {
          light:  '#4169E1',
          DEFAULT:'#2441A0',
          dark:   '#1a2f7a',
        },
        hexora: {
          blue:  '#1a3cff',
          glow:  '#4d79ff',
          white: '#f8faff',
          dark:  '#0a0f1e',
          card:  '#111827',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono:    ['Fira Code', 'monospace'],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'glow':         'glow 2s ease-in-out infinite alternate',
        'slide-up':     'slideUp 0.6s ease-out',
        'slide-right':  'slideRight 0.6s ease-out',
        'fade-in':      'fadeIn 0.8s ease-out',
        'pulse-slow':   'pulse 3s ease-in-out infinite',
        'spin-slow':    'spin 8s linear infinite',
        'bounce-slow':  'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 10px #1a3cff, 0 0 20px #1a3cff' },
          to:   { boxShadow: '0 0 20px #4d79ff, 0 0 40px #4d79ff, 0 0 60px #4d79ff' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-sm':  '0 0 10px rgba(26, 60, 255, 0.3)',
        'glow-md':  '0 0 20px rgba(26, 60, 255, 0.4)',
        'glow-lg':  '0 0 40px rgba(26, 60, 255, 0.5)',
        'glow-xl':  '0 0 60px rgba(26, 60, 255, 0.6)',
        'card-dark':'0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}