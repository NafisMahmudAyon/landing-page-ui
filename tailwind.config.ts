import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
				dark: "#1b1b1b",
				light: "#f5f5f5",
				textColor: "#334155",
				textHoverColor: "#0f172a",
				darkTextColor: "#e2e8f0",
				darkTextHoverColor: "#f1f5f9",
				bgColor: "#f1f5f9",
				// bgColor: "#f2f5ff",
				darkBgColor: "#0f172a",
				hoverBgColor: "#1f262e66",
				darkHoverBgColor: "#71829566",
				primary: "#B63E96", // 240,86,199
				primaryDark: "#58E6D9", // 80,230,217
			},
			transitionProperty: {
				color: "color",
				spacing: "margin, padding",
			},
			animation: {
				spinslow: "spin 8s linear infinite",
			},
    },
  },
  plugins: [],
};
export default config;
