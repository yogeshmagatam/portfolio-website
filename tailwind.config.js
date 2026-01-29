/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        },
        neon: {
          blue: '#00d4ff',
          purple: '#b829ff',
          cyan: '#00ffff',
          pink: '#ff006e',
          green: '#00ff88'
        },
        dark: {
          900: '#0a0a0f',
          800: '#13131a',
          700: '#1a1a24',
          600: '#25253a'
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'mono': ['Fira Code', 'monospace']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #00d4ff 0%, #b829ff 50%, #00ffff 100%)',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(184, 41, 255, 0.5)',
        'neon-cyan': '0 0 20px rgba(0, 255, 255, 0.5)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'glass': '12px',
      }
    },
  },
  plugins: [],
}