import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabintetGrotesk: ['CabinetGrotesk', 'sans-serif'],
      },
      colors: {
        "background-100": "#050419", // dark
        "primary-100": "#574AFF", // blue badge
        "primary-200": "#322d9c",
        "primary-300": "#FBFBFB",
        "header": "rgb(120, 120, 120, 0.1)"
      },
    },
  },
  plugins: [],
};
export default config;
