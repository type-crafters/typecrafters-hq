/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,css,js,ts,svelte}"],
  theme: {
    extend: {
        "flex": {
            "2": "2 2 0%",
            "3": "3 3 0%",
        }
    },
  },
  plugins: [],
}

