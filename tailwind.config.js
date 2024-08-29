/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {  
      'tahiti': '#509FBA', 
      'white': '#ffffff', 
      'primary': '#031841',
      'secondary': '#539AB7'
    },
    fontFamily: {
      acumin: ['Acumin Variable Concept', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    }, 
  },
  plugins: [],
}

