/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      finn: {
        "50": "#fef5fc",
        "100": "#fee9fc",
        "200": "#fbd3f6",
        "300": "#f7b0e9",
        "400": "#f181db",
        "500": "#e550c8",
        "600": "#c831a6",
        "700": "#a62586",
        "800": "#88206e",
        "900": "#6a1e55",
        "950": "#490937",
      },
      neutral: {
        "50": "#fafafa",
        "100": "#f5f5f5",
        "200": "#e5e5e5",
        "300": "#d4d4d4",
        "400": "#a3a3a3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717",
        "950": "#0a0a0a",
      },
    },
    fontFamily: {
      light: ["Satoshi-Light", "sans-serif"],
      regular: ["Satoshi-Regular", "sans-serif"],
      bold: ["Satoshi-Bold", "sans-serif"],
    },
  },
};
