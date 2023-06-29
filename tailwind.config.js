/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.{css.scss}",
    "./lib/**/*.{ts,tsx}",
    "./utils/**/*.ts"
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px"
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.white"),
            a: {
              color: theme("colors.white"),
              textDecorationColor: theme("colors.yellow.300"),
              textDecorationThickness: "1.5px",
              textUnderlineOffset: "1px",
              textDecorationLine: "underline"
            },
            h1: {
              color: theme("colors.white"),
              fontWeight: "900"
            },
            h2: {
              color: theme("colors.yellow.300"),
              fontWeight: "900"
            },
            h3: {
              color: theme("colors.white"),
              fontSize: "1.12em"
            },
            blockquote: {
              borderLeftColor: theme("colors.yellow.300")
            },
            "blockquote p:first-of-type::before": false,
            "blockquote p:last-of-type::after": false,
            strong: {
              color: theme("colors.white"),
              fontWeight: "900"
            },
            img: {
              borderRadius: "0.75rem"
            },
            hr: {
              borderColor: theme("colors.gray.600"),
              width: "128px",
              margin: "0 auto"
            }
          }
        }
      })
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp")
  ]
}
