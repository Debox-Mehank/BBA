const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EACB7D",
        pri_green: "#313628",
        pri_white: "#f2eee1",
        bg1: "#1E212D",
        bg2: "#FAF3E0",
        bg3: "#F8F8F8",
      },
      fontFamily: {
        rubik: ['var(--font-rubik)', 'serif'],
        bebas: ['var(--font-bebas)', 'serif']
      },

      boxShadow: {
        specialities: "10px 10px #EACB7D;",
      },
      dropShadow: {
        gallery: "0 35px 35px #EACB7D;",
      },
      screens: {
        'xsm': '485px',
        'custom-lg': '980px',
        'custom-lg2': '1150px',
        'custom-sm': '600px',
        
      },
    },
  },
  plugins: [],
};
