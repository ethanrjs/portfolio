/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    extend: {
      // slide in
      keyframes: {
        'slide-and-fade-in': {
          '0%': {
            opacity: 0,
            transform: 'translateY(300%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'slide-from-left': {
          '0%': {
            opacity: 0,
            transform: 'translateX(-300%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        'slide-from-right': {
          '0%': {
            opacity: 0,
            transform: 'translateX(300%)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        hoverspin: {
          // spin one time
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        'slide-and-fade-in': 'slide-and-fade-in 0.7s ease-in-out forwards',
        'slide-from-left': 'slide-from-left 0.7s ease-in-out',
        'slide-from-right': 'slide-from-right 0.9s ease-in-out',
        hoverspin: 'hoverspin 1s ease',
      },
    },
  },
  variants: {
    extend: {
      textColor: [
        'responsive',
        'dark',
        'group-hover',
        'focus-within',
        'hover',
        'focus',
      ],
    },
  },
  plugins: [
    require('tailwindcss-animation-delay'),
    require('tailwind-scrollbar'),
  ],
};
