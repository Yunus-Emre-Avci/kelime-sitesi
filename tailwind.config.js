/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        card: 'var(--color-card)',
        primary: 'var(--color-primary)',
        'primary-container': 'var(--color-primary-container)',
        'primary-light': 'var(--color-primary-light)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        muted: 'var(--color-muted)',
        'on-surface': 'var(--color-text)',
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        lg: '2rem',
      },
      fontFamily: {
        sans: ['var(--font-main)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        display: ['var(--font-main)', 'sans-serif'],
      },
      backdropBlur: {
        px: '1px',
        xs: '2px',
      }
    },
  },
  plugins: [],
}
