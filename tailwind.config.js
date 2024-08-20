/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        title: ["Chakra Petch"],
        ubuntu: ["Ubuntu"],
        nunito: ["Nunito"],
      },
      colors: {
        secondary: "#fffffe",
        primary: "#232946",
        main: "#eebbc3",
        stroke: "#EA516F",
        headline: '#F4F4F5',
        dark: '#161616',
      },
    },
  },
  plugins: [],
};
