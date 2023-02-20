module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        lightBlue: "#4DB5F0",
        blue: "#4979D1",
        white: "#fefefe",
        gray: "#C9C5C5",
      },
      backgroundImage: {
        "top-form": "url('../public/assets/icons/top_form.svg')",
      },
    },
    fontFamily: {
      poppins: ["Poppins"],
    },
    fontSize: {
      xs: ["12px"],
      sm: ["15px"],
      xl: ["20px"],
      "2xl": ["40px"],
      "3xl": ["60px"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
