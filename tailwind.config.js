/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('https://ik.imagekit.io/kushyzee/heavenly_delights/hero-background__dYOvHUNI.jpg')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}