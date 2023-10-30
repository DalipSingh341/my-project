/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "12px",
        xm: "14px",
        xs: "16px",
        md: "18px",
        lg: "22px",
        "2lg": "22px",
        xl: "46px",
        "2xl": "52px",
        "3xl": "85px",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Machine: [" Neue Machine", "sans-serif"],
        Jakarta: [" Plus+Jakarta+Sans", "sans-serif"],
      },
      colors: {
        "light-blue": "#1643C3",
        "light-green2": "#00999E",
        "light-green3": "#097980",
        purple: "#81488e",
      },
    },
  },
  plugins: [],
};
