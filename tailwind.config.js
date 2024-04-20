const animate = require('tailwindcss-animate');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        black: {
          100: '#E6E7E8',
          200: '#B6B7BC',
          300: '#878A92',
          400: '#71747E',
          500: '#5C5F6A',
          600: '#474B57',
          700: '#333845',
          800: '#202533',
          900: '#0E1422',
        },
        white: {
          100: '#F6F6F6',
          200: '#E9E9EB',
          900: '#FFFFFF',
        },
        blue: {
          100: '#F0F1FF',
          200: '#E3E5FF',
          300: '#B7BFFF',
          400: '#A8B2FF',
          500: '#97A6FF',
          600: '#869AFF',
          700: '#728FFF',
          800: '#5C83FF',
          900: '#4078FF',
        },
        green: {
          100: '#D5E5D7',
          200: '#C1D8C4',
          300: '#98BE9E',
          400: '#83B18B',
          500: '#6FA479',
          600: '#5A9868',
          700: '#458B56',
          800: '#2C7F45',
          900: '#057234',
        },
        red: {
          100: '#FBD9D0',
          200: '#F8C5B9',
          300: '#EE9F8D',
          400: '#E88C77',
          500: '#E17862',
          600: '#D9644E',
          700: '#D14F3A',
          800: '#C83727',
          900: '#BE1313',
        },
        yellow: {
          100: '#FFF1D8',
          200: '#FFEAC4',
          300: '#FFDC9E',
          400: '#FFD58A',
          500: '#FDCF76',
          600: '#FBC862',
          700: '#F9C14C',
          800: '#F6BB33',
          900: '#F3B40A',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
      },
      fontSize: {
        'h1-sm': ['32px', '150%'],
        'h2-sm': ['24px', 'auto'],
        'h3-sm': ['20px', 'auto'],
        'h4-sm': ['16px', 'auto'],
        'h5-sm': ['14px', 'auto'],
        'h6-sm': ['12px', 'auto'],
        'body-sm': ['14px', '150%'],
        'label-sm': ['12px', '24px'],

        'h1-lg': ['40px', '150%'],
        'h2-lg': ['32px', 'auto'],
        'h3-lg': ['24px', 'auto'],
        'h4-lg': ['18px', 'auto'],
        'h5-lg': ['16px', 'auto'],
        'h6-lg': ['14px', 'auto'],
        'body-lg': ['16px', '175%'],
        'label-lg': ['14px', '24px'],
      },
      boxShadow: {
        small: '2px 2px 30px 0 rgba(0, 0, 0, 0.05)',
        medium: '4px 4px 4px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [animate],
};
