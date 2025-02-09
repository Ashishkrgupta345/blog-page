/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./pages/**/*.{js,}", "./components/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
    },
    extend: {
      colors: {
        gray: {
          300: "#C8C8C8",
          400: "#888888",
          500: "#707070",
          600: "#515151",
          700: "#434343",
        },
        white: "#FFFFFF",
        black: "#000000",
        blue: {
          300: "#a6b4ff",
          400: "#7382ff",
          500: "#3b44ff",
          600: "#1614ff",
        },
        rose: {
          400: "#ff58c0",
        },
      },
      transitionDuration: {
        100: "100ms",
        150: "150ms",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      fontFamily: {
        Raleway: ["Raleway", "San-serif"],
      },
      borderRadius: {
        sm: "2px",
        md: "6px",
        lg: "8px",
        xl: "12px",
      },

      boxShadow: {
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
      rotate: {
        "-90": "-90deg",
        "-45": "-45deg",
      },

      fontSize: {
        text: {
          sm: ["14px", "20px"],
          md: ["20px", "26px"],
          lg: ["18px", "28px"],
          xl: ["20px", "28px"],
          "2xl": ["24px", "32px"],
          "3xl": ["30px", "36px"],
          "4xl": ["36px", "40px"],
          "5xl": ["48px", "1"],
          "6xl": ["60px", "1"],
          "7xl": ["80px", "1"],
        },
      },

      width: {
        64: "256px",
      },
    },
  },
  plugins: [],
};
