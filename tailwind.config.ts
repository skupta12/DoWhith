import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabintetGrotesk: ['CabinetGrotesk', 'sans-serif'],
      },
      colors: {
        "primary": {
          100: "#050419", // main bg color
          200: "#0b091f",
          300: "#574AFF", // light blue
        },
        "neutral": {
          100: "#dcbae0", // light purple
          200: "#322d9c",
          300: "#FBFBFB",
        },
        "non-neutral": {
          100: "#FAFAFA",
          200: "rgba(255, 255, 255, 0.5)", // semi transparent color for header
          500: "rgba(255, 255, 255, 0.3)", // semi transparent color for header
          300: "#282347",
          400: "#160b5e",

        }
      },
    },
    screens: {
      "xs": "400px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px"
    }
  },
  plugins: [],
};
export default config;
