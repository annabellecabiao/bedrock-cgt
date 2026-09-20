/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bedrock: {
          navy: "#0A1A2F",
          gold: "#b0790b",
          slate: "#2E3A45",
          white: "#F7F7F7",
          red: "#8B1E1E",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      boxShadow: {
        card: "0 4px 12px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};