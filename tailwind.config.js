/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'steelfish': ['steelfish', 'sans-serif'],
        'roboto': ['roboto', 'sans-serif']
      },
      backgroundImage: {
        'my_bg_image' : "url('/public/image/Topographic5.png')",
        'backdrops':'linear-gradient(154.51deg, rgba(255, 255, 255, 0.1) 6.2%, rgba(255, 255, 255, 0) 94.47%), linear-gradient(0deg, rgba(12, 5, 33, 0.3), rgba(12, 5, 33, 0.3))',
        'nav':'linear-gradient(154.51deg, rgba(255, 255, 255, 0.1) 6.2%, rgba(255, 255, 255, 0) 94.47%),linear-gradient(0deg, rgba(12, 5, 33, 0.3),rgba(12, 5, 33, 0.3))'
      }
    }
  },
  plugins: [],
}
