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
        pri_white: "#f2eee1"
      },
      fontFamily: {
        big_calson: "BigCalson"
      },
      boxShadow: {
        "specialities": "10px 10px #EACB7D;"
      }
    },
  },
  plugins: [],
}
