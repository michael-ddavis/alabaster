
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Cormorant Infant'", 'serif'],
        sans: ['"Source Sans 3"', 'Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#0B0D12',
        teal: '#2AB3A6',
        gold: '#D89B1C',
        'royal-blue': '#1E3A8A',
        purple: '#6B3FA0',
        seafoam: '#7EE0CF',
        stone: '#0F1218'
      }
    }
  },
  plugins: []
}
