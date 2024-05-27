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
    './public/typographie/nunito/*.tff',

  ],
  theme: {
    screens:{
      'xs': '320px',
      'xm': '378px',
      "sm":	"640px"	,
      "md":	"768px",
      "lg":	"1024px",	
      "xl":	"1280px",	
      "2xl":	"1536px",
      "3xl":	"1850px",
    },
    extend: {
      fontFamily:{
        lexend: "lexend",
        "lexend-thin": "lexend-thin",
        "lexend-bold": "lexend-bolder",
        nunito: "nunito",
        "nunito-thin": "nunito-thin",
        "nunito-bold": "nunito-bold",
        "nunito-bolder": "nunito-bolder",
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
      'livered-title': '#E80303',
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
  plugins: [nextui({addCommonColors: true,}),
    require('tailwindcss-directional-shadows')
  ],
}
