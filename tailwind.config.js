/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    //ACA SE HIZO MODIFICACION
    extendes: {
      container: {
        center: true,
        padding: "15px",
      },
    },
    themes: [
      "light",
      "dark",
      {
        viandapp: {
          primary: "#FFE26C",

          secondary: "#FFF369",

          accent: "#7CC964",

          neutral: "#383838",

          "base-100": "#F3FAED",

          info: "#a3e635",

          success: "#36d399",

          warning: "#F76353",

          error: "#F76353",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
