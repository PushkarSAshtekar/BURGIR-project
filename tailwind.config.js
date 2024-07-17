/** @type {import('tailwindcss').Config} */
export default {
  screens:{
    sm:"480px",
    md:"786px",
    lg:"1024px"
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

