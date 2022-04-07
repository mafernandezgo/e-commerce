module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#fb923c",
  //       },
  //     },
  //   ],
  // },
  plugins: [require("daisyui")],
}
