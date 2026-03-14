import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f5',
          100: '#e8f0eb',
          200: '#c5d9cd',
          300: '#a3c2af',
          400: '#8aac96',
          500: '#70967F', // Principal
          600: '#5d7d6a',
          700: '#4a6355',
          800: '#3a4f43',
          900: '#2d3e35',
        },
        champagne: {
          50: '#fdfbf7',
          100: '#F3E9CD', // Claro (centro do gradiente)
          200: '#e8d9b8',
          300: '#D4C4A3', // Escuro (extremidades do gradiente)
          400: '#c5b28f',
          500: '#b6a07b',
          600: '#9a8766',
          700: '#7d6e52',
          800: '#635642',
          900: '#4e4434',
        },
        neutral: {
          50: '#f7fafc',
          100: '#edf2f7',
          200: '#e2e8f0',
          300: '#cbd5e0',
          400: '#a0aec0',
          500: '#718096',
          600: '#4a5568',
          700: '#2d3748', // Texto principal
          800: '#1a202c', // Texto escuro
          900: '#171923',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
