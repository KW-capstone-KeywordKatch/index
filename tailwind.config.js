/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        maxwidth: "1440px",
      },
      fontFamily: {
        pretendard: "Pretendard-Regular",
        pretendardThin: "Pretendard-Thin",
      },
      screens: {
        maxwidth: "1440px",
      },
    },
  },
  plugins: [],
};
