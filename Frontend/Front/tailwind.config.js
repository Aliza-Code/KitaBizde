/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      //breakpoints
      xs: "415px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      screens: {
        //container max-widths at given breakpoint
        xs: "400",
        sm: "535px",
        md: "720px",
        lg: "940px",
        xl: "1160px",
      },
    },
    extend: {
      fontFamily: {
        ray: "Anjoman-FaNum-Medium",
        raylight: "Anjoman-FaNum-Light",
        rayblack: "Anjoman-FaNum-Black",
        raybold: "Anjoman-FaNum-Bold",
        inder: "Inder-Regular",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-clip-path'),
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
