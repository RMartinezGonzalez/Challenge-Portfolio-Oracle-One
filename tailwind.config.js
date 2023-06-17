/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'clr-primary-500': 'hsl(166, 82%, 28%)', /* hsl */
      'clr-primary-700': '#2a2e2d',
    
      
      'clr-neutral-100': 'hsl(0, 0%, 100%)',
      // 'clr-neutral-200': 'hsl(173, 72%, 82%)', /* hsl */
      // 'clr-neutral-400': 'hsl(184, 48%, 49%)', /* hsl */
      'clr-neutral-200': '#34e89e',
      'clr-neutral-400': '#0f3443',
      'clr-neutral-500': 'hsl(0, 0%, 8%)', /* hsl */
      'clr-neutral-700': '#1a1a1a',
      'clr-neutral-900': '#000',
    }
  },
  plugins: [],
}
