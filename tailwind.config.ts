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
        primarySky: "#C3EBFA",
        secondarySkyLight: "#EDF9FD",
        tertiaryPurple: "#CFCEFF",
        PurpleLight: "#FAE27C",
        YellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
export default config;
