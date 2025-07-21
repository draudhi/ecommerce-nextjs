import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class", // Gunakan class .dark untuk mengaktifkan dark mode
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Kamu bisa menambahkan custom color, spacing, font, dsb di sini
      colors: {
        darkColor: "#151515",
        lightColor: "#52525b",
        lightOrange: "#fca99b",
        lightBlue: "#7688DB",
        darkBlue: "#6c7fd8",
        darkText: "#686e7d",
        lightBg: "#F8F8FB",
      },
    },
  },
  plugins: [animate], // Plugin animasi untuk ShadCN UI (Dialog, Tooltip, dsb)
};

export default config;
