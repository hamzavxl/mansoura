import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#741922",
          dark: "#4e0f16",
          light: "#942531",
          subtle: "#fdf2f4",
          border: "#f2c7cc",
        },
        accent: {
          DEFAULT: "#b38a38",
          dark: "#8c6820",
          light: "#cfa856",
          subtle: "#fdf9ee",
          border: "#f3e4b7",
        },
        bg: {
          body: "#faf8f8",
          surface: "#ffffff",
          subtle: "#f8f2f3",
          hover: "#ede3e5",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-cairo)",
          "Cairo",
          "Tajawal",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        mono: ["Consolas", "Courier New", "monospace"],
      },
      boxShadow: {
        brand: "0 4px 14px 0 rgba(116, 25, 34, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
