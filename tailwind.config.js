/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        'deep-space': '#06060f',
        'void': '#0a0a1a',
        'surface': '#0f0f23',
        'surface-light': '#161630',
        'light-text': '#e0e0e8',
        'muted-text': '#8888a0',
        'glow-blue': '#00c8ff',
        'glow-purple': '#8b5cf6',
        'glow-cyan': '#06d6a0',
        'glow-pink': '#ec4899',
        'glow-orange': '#f59e0b',
        'card-bg': 'rgba(15, 15, 35, 0.7)',
        'card-border': 'rgba(0, 200, 255, 0.08)',
        'accent-gradient-start': '#00c8ff',
        'accent-gradient-end': '#8b5cf6',
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(0, 200, 255, 0.3), 0 0 30px rgba(0, 200, 255, 0.1)',
        'glow-purple': '0 0 15px rgba(139, 92, 246, 0.3), 0 0 30px rgba(139, 92, 246, 0.1)',
        'glow-cyan': '0 0 15px rgba(6, 214, 160, 0.3), 0 0 30px rgba(6, 214, 160, 0.1)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 200, 255, 0.15)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #00c8ff 0%, #8b5cf6 100%)',
        'gradient-radial': 'radial-gradient(circle at 50% 50%, rgba(0, 200, 255, 0.08) 0%, transparent 70%)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'gradient-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-in-up': {
          'from': { opacity: 0, transform: 'translateY(30px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in-down': {
          'from': { opacity: 0, transform: 'translateY(-30px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        'scale-in': {
          'from': { opacity: 0, transform: 'scale(0.95)' },
          'to': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-flow': 'gradient-flow 20s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-down': 'fade-in-down 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};