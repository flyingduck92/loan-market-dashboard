/** @type {import('tailwindcss').Config} */

import flowbite from "flowbite-react/tailwind"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        'blues': {
          '50': '#f1f9fe',
          '100': '#e1f3fd',
          '200': '#bde7fa',
          '300': '#82d4f7',
          '400': '#40bff0',
          '500': '#17a9e2',
          '600': '#0a86bf',
          '700': '#096b9b',
          '800': '#0c5a80',
          '900': '#104c6a',
          '950': '#0b3046',
        },
      },
      screens: {
        'xs': '420px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1400px',
      },
      boxShadow: {
        'sidebar': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        "mint": '0px 4px 4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [
    flowbite.plugin()({
      charts: true,
    }),
  ],
}