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
        "primary-100": "#050419", // dark
        "primary-200": "#574AFF", // blue badge
        "primary-300": "#dcbae0", // purple
        "primary-400": "#322d9c",
        "primary-500": "#FBFBFB",
        "primary-600": "#FAFAFA",
        "header": "rgba(255, 255, 255, 0.3)",
        "primary-800": "#282347",
        "primary-900": "#160b5e",
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
