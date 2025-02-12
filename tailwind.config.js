/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "titles": "Raleway",
        "general": "Montserrat",
      },
      width: {
        "cardProject": "25rem",
      },
      height: {
        "hS": "37.5rem",
        "cardProject": "30rem",
      },
      backgroundColor: {
        "blueCustom": "#001229",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [],
  },
}

