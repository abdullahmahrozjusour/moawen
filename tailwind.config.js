/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {  
      'tahiti': '#509FBA', 
      'white': '#ffffff', 
    },
    fontFamily: {
      acumin: ['Acumin Variable Concept', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    }, 
  },
  plugins: [],
}

