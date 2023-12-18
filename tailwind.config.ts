/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003366",
        secondary: "#708090",
        accent: "#FF6600",
        light_gray: "#D3D3D3",
        light_blue: "#ADD8E6",
      },
    },
  },
  plugins: [],
};
