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
          type: {
            // text typing effect
            '0%': { width: '0ch' },
            '5%, 10%': { width: '1ch' },
            '15%, 20%': { width: '2ch' },
            '25%, 30%': { width: '3ch' },
            '35%, 40%': { width: '4ch' },
            '45%, 50%': { width: '5ch' },
            '55%, 60%': { width: '6ch' },
            '65%, 70%': { width: '7ch' },
            '75%, 80%': { width: '8ch' },
            '85%, 90%': { width: '9ch' },
            '95%, 100%': { width: '10ch' },
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
        type: 'type 1.8s ease-out .8s 1 normal both',
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
      visibility: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
      opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    },
  },
  plugins: [
    require('tailwindcss-animation-delay'),
    require('tailwind-scrollbar'),
  ],
};
