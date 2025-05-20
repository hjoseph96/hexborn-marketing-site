import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '960px',
      'lg': '1200px',
      'xl': '1440px',
    },
    extend: {
      colors: {
        neutral: {
          200: '#A9AFC2',
          300: '#5B6277',
          500: '#1A1D28',
          600: '#14161D',
        },
        gradient: {
          pink: '#DE0BC94D',
          blue: '#1286F04D',
        },
      },
      fontFamily: {
        geomanist: ['Geomanist', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      fontSize: {
        sm: ['12px', '16px'],
        lt: ['13px', '16px'],
        md: ['16px', 'normal'],
        lg: ['18px', 'normal'],
        xl: ['20px', '30px'],
        '2xl': ['24px', 'normal'],
        '3xl': ['32px', 'normal'],
        '4xl': ['40px', 'normal'],
        '5xl': ['56px', 'normal'],
        '6xl': ['64px', 'normal'],
        '7xl': ['78px', '78px'],
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.h1': {
          '@apply font-geomanist sm:text-7xl text-5xl': {},
        },
        '.h2': {
          '@apply font-lato sm:text-5xl text-4xl font-bold': {},
        },
        '.h3': {
          '@apply font-lato sm:text-4xl text-3xl font-semibold': {},
        },
        '.title1': {
          '@apply font-lato sm:text-3xl text-2xl font-semibold': {},
        },
        '.title2': {
          '@apply font-lato sm:text-2xl text-xl font-normal': {},
        },
        '.txt-extra': {
          '@apply font-lato sm:text-6xl text-3xl font-bold': {},
        },
        '.caption1': {
          '@apply font-lato sm:text-lg text-md font-normal': {},
        },
        '.caption2': {
          '@apply font-lato sm:text-md text-lt font-normal': {},
        },
        '.body-large': {
          '@apply font-lato sm:text-xl text-lg font-normal': {},
        },
        '.btn-caption': {
          '@apply font-lato sm:text-lg text-md font-bold': {},
        },
        '.txt-input': {
          '@apply font-lato sm:text-lg text-md font-normal': {},
        },
      });
    }),
  ],
};
