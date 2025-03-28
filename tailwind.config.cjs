/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          'to': { transform: 'rotate(1turn)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      },
      animation: {
        'spin-slow': 'rotate 1.5s infinite linear',
        'fadeIn': 'fadeIn 0.6s ease-out',
        'bounce': 'bounce 2s infinite ease-in-out',
        'slideIn': 'slideIn 0.4s ease-out'
      }
    },
  },
  plugins: [],
} 