import {nextui} from '@nextui-org/theme'
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './public/typographie/lexend/*.tff',
  ],
  theme: {
    extend: {
      fontFamily:{
        lexend: "lexend",
        "lexend-thin": "lexend-thin",
        "lexend-bold": "lexend-bolder",
        nunito: "nunito",
        "nunito-thin": "nunito-thin",
        "nunito-bold": "nunito-bold",
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      primary: colors.orange,
      'white':'white',
      'highgray':'#363636',
      'midgray':'#6b6b6b',
      'lowgray':'#b3b3b3',
      'lowgreen':'#a4d5a6',
      'mustard':'#f9a53e',
      'black': colors.black,
      'livered': '#ff1100',
      'white': colors.white,
      'green': colors.green,
      'orange': colors.orange,
      'gray': colors.gray,
      'emerald': colors.emerald,
      'indigo': colors.indigo,
      'yellow': colors.yellow,
      'teal': colors.teal,
      'cyan': colors.cyan,
    },
    
  },
  darkMode: "class",
  plugins: [nextui({addCommonColors: true,
  
  })],
}
