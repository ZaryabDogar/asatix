/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bluetext': '#223568 ',
      'bluetextbold': '#3371B8',
      'bluetexthover': '#0B2545',
      'white': '#FFFFFF',
      'yellowtext': '#F9D72B',
      'transparent':'transparent'
    },
    fontFamily: {
      sans: ['OpenSauceOne', 'sans-serif'],
    
    },
    extend: {},
  },
  plugins: [],
}