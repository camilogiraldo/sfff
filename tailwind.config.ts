import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#180161",
        purple: "#4F1787",
        pink: "#EB3678",
        orange: "#FB773C",
        gray: "#686D76",
        yellow: "#FFDE4D",
        red: "#FF0000",
        green: "#06D001",
      },
    },
  },
  plugins: [],
};
export default config;
