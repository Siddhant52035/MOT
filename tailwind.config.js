/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideFade: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        rotateIn: {
          '0%': { opacity: 0, transform: 'rotate(-10deg)' },
          '100%': { opacity: 1, transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'slide-fade': 'slideFade 0.5s ease-out',
        'zoom-in': 'zoomIn 0.5s ease-out',
        'rotate-in': 'rotateIn 0.5s ease-out',
      },
    },
  },
  plugins: [],
}

// slideFade: {
//   '0%': { opacity: 0, transform: 'translateY(-20px)' },
//   '100%': { opacity: 1, transform: 'translateY(0)' },
// },
// zoomIn: {
//   '0%': { opacity: 0, transform: 'scale(0.9)' },
//   '100%': { opacity: 1, transform: 'scale(1)' },
// },
// rotateIn: {
//   '0%': { opacity: 0, transform: 'rotate(-10deg)' },
//   '100%': { opacity: 1, transform: 'rotate(0deg)' },
// },
// },
// animation: {
// 'slide-fade': 'slideFade 0.5s ease-out',
// 'zoom-in': 'zoomIn 0.5s ease-out',
// 'rotate-in': 'rotateIn 0.5s ease-out',
// },

