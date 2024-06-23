/** @type {import('tailwindcss').Config} */
export default {
  content: [
 
    "./src/**/*.{js,jsx,ts, }",
  ],
  theme: {
    extend: {
      colors: { 
        'brand-black': '#101010', 
        'brand-black-100': '#18181C',
        'brand-black-200': '#222228',
        'brand-orange': '#CC5551',
        'brand-gray': '#9E9E9E'
    },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],   
        'inter': ['Inter', 'sans-serif'],   
      },
    },
  },
  plugins: [],
}
