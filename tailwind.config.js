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
        sans: ['Roboto', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        'deep-space': '#0a0a14',
        'light-text': '#e0e0e0',
        'glow-blue': '#00bfff',
        'glow-purple': '#8a2be2',
        'card-bg': 'rgba(20, 20, 40, 0.6)',
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(0, 191, 255, 0.4), 0 0 30px rgba(0, 191, 255, 0.2)',
        'glow-purple': '0 0 15px rgba(138, 43, 226, 0.4), 0 0 30px rgba(138, 43, 226, 0.2)',
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
        pulse: {
          'from': { transform: 'scale(1)', opacity: '0.1' },
          'to': { transform: 'scale(1.2)', opacity: '0.2' },
        },
        'fade-in-up': {
          'from': { opacity: 0, transform: 'translateY(30px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in-down': {
          'from': { opacity: 0, transform: 'translateY(-30px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-flow': 'gradient-flow 20s ease infinite',
        'pulse': 'pulse 15s infinite alternate',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
        'fade-in-down': 'fade-in-down 1s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};