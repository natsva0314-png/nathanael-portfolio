import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      keyframes: {
        'typing-dot': {
          '0%, 80%, 100%': { transform: 'scale(0)', opacity: '0' },
          '40%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(52px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(52px) rotate(-360deg)' },
        },
      },
      animation: {
        'typing-dot': 'typing-dot 1.4s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        float: 'float 5s ease-in-out infinite',
        orbit: 'orbit 8s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
