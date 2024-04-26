/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: [ 'var(--font-pacifico)' ],
        regular: [ 'var(--font-poppins)' ]
      },
      colors: {
        primary: {
          '100': 'var(--color-primary-100)',
          '300': 'var(--color-primary-300)',
          '500': 'var(--color-primary-500)',
          '700': 'var(--color-primary-700)',
        },
        accent: {
          '100': 'var(--color-accent-100)',
          '300': 'var(--color-accent-300)',
          '500': 'var(--color-accent-500)',
          '700': 'var(--color-accent-700)',
        }
      }
    },
  },
  plugins: [],
}
