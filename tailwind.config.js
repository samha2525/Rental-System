/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",          // ✅ scan everything in src
    "./src/pages/**/*.{js,jsx,ts,tsx}",     // ✅ pages
    "./src/components/**/*.{js,jsx,ts,tsx}" // ✅ components
  ],
  theme: { extend: {} },
  plugins: [],
};
