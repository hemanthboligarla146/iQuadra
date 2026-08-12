/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#16C784',
          navy: '#081B3A',
        },
        secondary: {
          blue: '#4A8CFF',
          bg: '#F8FAFC',
        },
        border: '#E5E7EB',
        card: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'enterprise': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'enterprise-hover': '0 20px 40px -10px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        'xl': '20px',
      }
    },
  },
  plugins: [],
}
