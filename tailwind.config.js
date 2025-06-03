/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        "primary": "#3B82F6",
        "secondary": "#1E40AF",
        "dark": "#020617",
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
