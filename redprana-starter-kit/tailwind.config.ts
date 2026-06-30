import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1220',
          light: '#1a2540',
        },
        secondary: {
          DEFAULT: '#0E7490',
          light: '#0891b2',
        },
        accent: {
          DEFAULT: '#2563EB',
          light: '#3b82f6',
          warm: '#C2410C',  // The "Prana" warmth — use sparingly
        },
        brand: {
          red: '#C52032',  // "NASA Red" — logo wordmark only
        },
        success: '#10B981',
        surface: {
          DEFAULT: '#F8FAFC',
          dark: '#0F172A',
        },
        text: {
          DEFAULT: '#111827',
          muted: '#6B7280',
          inverse: '#F9FAFB',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        logo: ['Audiowide', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'compass-spin': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': `
          radial-gradient(ellipse at 20% 50%, rgba(14, 116, 144, 0.22) 0%, transparent 55%),
          radial-gradient(ellipse at 80% 30%, rgba(37, 99, 235, 0.18) 0%, transparent 55%),
          radial-gradient(ellipse at 65% 80%, rgba(14, 116, 144, 0.12) 0%, transparent 50%)
        `,
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'card-hover': '0 10px 25px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
        'glow-teal': '0 0 30px rgba(14, 116, 144, 0.3)',
        'glow-blue': '0 0 30px rgba(37, 99, 235, 0.3)',
      },
    },
  },
  plugins: [],
} satisfies Config
