import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#0d0d0d',
          light: '',
          navy: '#192a45',
        },
        primary: {
          red: '#ff4d4d',
          yellow: '#ffcc00',
          purple: '#9b5de5',
          green: '#00c896',
          white: '#f5f5f5',
          gray: '#b0b0b0',
          orange: '#ff8922',
        },
      },
    },
  },
  plugins: [],
};
export default config;
