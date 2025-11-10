/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#d4af37',   // ذهبي فاخر
        dark: '#0e0e0e',      // أسود أنيق
        light: '#f5f5f5',     // أبيض ناعم
        grayish: '#a3a3a3',
      },
    },
  },
  plugins: [],
}
