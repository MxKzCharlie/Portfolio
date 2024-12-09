/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "titles": "Poppins",
        "subtitles": "Raleway",
        "general": "Roboto",
      },
      backgroundColor: {
        "over": "#0e1025",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        nightMode: {
          "primary": "#060710",
          "secondary": "#3E65F9",
          "accent": "#6A4FCE",
          "neutral": "#0B0D17",
          "base-100": "#E5E7EB",
          "base-200":"#000000",
        },
        luminousMode: {
          "primary": "#ccccff",
          "secondary": "#2d9db9",
          "accent": "#6A4FCE",
          "neutral": "#EEEEFF",
          "base-100": "#0b0c0f",
          "base-200": "#9999ff", 
        },
      },
    ],
  },
}

