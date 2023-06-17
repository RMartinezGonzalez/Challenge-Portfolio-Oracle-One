/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'clr-primary-400': 'hsl(166, 81%, 39%)', /* hsl */
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
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1296px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
