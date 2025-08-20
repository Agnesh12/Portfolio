/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // ✅ This scans all React files
    "./public/index.html",          // ✅ Add this for safety
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
