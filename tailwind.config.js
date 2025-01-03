/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'layout': '200px 1fr',
        'layout-lg': '200px 1fr',
        'layout-md': '180px 1fr',
        'layout-sm': '150px 1fr',
        'layout-xs': '100px 1fr',
      }
    },
  },
  plugins: [],
}

