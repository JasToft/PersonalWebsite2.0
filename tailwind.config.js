/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Blue
          light: '#60A5FA',
          dark: '#2563EB',
        },
        secondary: {
          DEFAULT: '#6B7280', // Gray
          light: '#D1D5DB',
          dark: '#374151',
        },
        background: {
          DEFAULT: '#FFFFFF', // White
          light: '#F9FAFB',
          medium: '#E5E7EB',
          dark: '#F3F4F6',
        },
        accent: {
          DEFAULT: '#EF4444', // Red
          light: '#F87171',
          dark: '#B91C1C',
        },
      },
    },
  },
  plugins: [],
};

