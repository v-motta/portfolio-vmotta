import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        'jet-brains-mono': ['var(--font-jet-brains-mono)'],
      },
      colors: {
        bracket: '#f97180',
        variable: '#b392f0',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
