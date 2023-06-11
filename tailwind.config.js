/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'clr-primary-500': 'hsl(166, 82%, 28%)', /* hsl */
      'clr-primary-700': '#2a2e2d',
    
      'clr-neutral-50': 'HSL(0, 0%, 100%)',
      'clr-neutral-100': 'hsl(173, 72%, 82%)', /* hsl */
      'clr-neutral-200': 'hsl(0, 0%, 8%)', /* hsl */
      'clr-neutral-400': '#1a1a1a',
      'clr-neutral-600': '#000',
    }
  },
  plugins: [],
}
