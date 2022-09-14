/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,astro}'],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        night0: '#2e3440',
        night1: '#3b4252',
        night2: '#434c5e',
        night3: '#4c566a',
        snow0: '#d8dee9',
        snow1: '#e5e9f0',
        snow2: '#eceff4',
        frost0: '#8fbcbb',
        frost1: '#51E5FF',
        frost2: '#81a1c1',
        frost3: '#5e81ac',
        aurora0: '#E83F6F',
        aurora1: '#d08770',
        aurora2: '#251351',
        aurora3: '#E83F6F',
        aurora4: '#b48ead',
      },
      animation: {
        cursor: 'cursor .6s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '8ch' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
