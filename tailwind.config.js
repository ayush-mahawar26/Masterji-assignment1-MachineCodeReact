/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors : {
        "bg-blue" : "#3F72AF",
        "bg-green" : "#D2E3C8",
        "bg-pink" : "#E2BBE9",
        "d-blue" : "#112D4E",
        "app-purple" : "#6C6BAF"
      },
    },
  },
  plugins: [],
}