/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/index.css",
    "./src/main.jsx",
    "./src/pages/dashboard.jsx",
    "./src/assets/components/Dropdown.jsx",
    "./src/assets/components/Analysis.jsx",
    "./src/assets/components/BarChart.jsx",
    "./src/assets/components/SearchBar.jsx",
    "./src/assets/components/SalesFindLine.jsx"
   
  ],
  theme: {
    extend: {
      fontFamily: {
        noirpro: ['NoirPro', "sans-serif"]
      }
    },
  },
  plugins: [],
 
}

