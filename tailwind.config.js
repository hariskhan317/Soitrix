/** @type {import('tailwindcss').Config} */
export default {
  content: [
 
    "./src/**/*.{js,jsx,ts, }",
  ],
  theme: {
    extend: {
      colors: { 
        'brand-black': 'rgb(18, 21, 26)',
        'brand-lightWhite': 'rgba(255, 255, 255, 0.3)',
        'brand-gray': 'rgb(238, 240, 245)',  
        'brand-gray-100': 'rgb(202, 204, 214)',
        'brand-gray-200': 'rgb(238, 240, 245)',
        'brand-gray-300': '#f9f5ff',
        'brand-gray-400': 'rgb(246, 248, 251)',
        'brand-blue': 'rgb(42, 78, 204)',
        'brand-blue-100': 'rgb(53, 97, 255)',
        'brand-lightBlue':'rgb(222, 245, 255)',
        'brand-yellow': 'rgb(252, 255, 217)',
        'brand-lightblue':'rgb(225, 247, 242)',
    },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],   
        'inter': ['Inter', 'sans-serif'],   
      },
    },
  },
  plugins: [],
}
