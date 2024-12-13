/** @type {import('tailwindcss').Config} */
import { theme } from './src/styles/theme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: theme.colors,
      backgroundColor: theme.colors,
      textColor: theme.colors,
      borderColor: theme.colors,
      ringColor: theme.colors,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}