module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#fde047",

          secondary: "#fbbf24",

          accent: "#fb923c",

          neutral: "#e5e7eb",

          "base-100": "#f3f4f6",

          info: "#bfdbfe",

          success: "#34d399",

          warning: "#fde68a",

          error: "#ef4444",
        },
      },
    ],
    base: false,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "dark",
  },
}
