/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#111827',
        'cyan-glow': '#00F6FF',
        'cta-yellow': '#FBBF24',
        'off-white': '#E5E7EB',
        'glass-white': 'rgba(229, 231, 235, 0.1)',
        'glass-border': 'rgba(0, 246, 255, 0.2)',
      },
      fontFamily: {
        'exo': ['Exo 2', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
      },
      keyframes: {
        glow: {
          'from': { 'box-shadow': '0 0 20px #00F6FF40' },
          'to': { 'box-shadow': '0 0 40px #00F6FF80, 0 0 60px #00F6FF40' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          'from': { opacity: '0', transform: 'translateX(-30px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'glass': '16px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 246, 255, 0.1)',
        'glow': '0 0 20px rgba(0, 246, 255, 0.5)',
        'cta-glow': '0 0 20px rgba(251, 191, 36, 0.5)',
      },
    },
  },
  plugins: [],
};