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
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
