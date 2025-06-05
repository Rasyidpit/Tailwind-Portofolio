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
        '2xl': '1320px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}
