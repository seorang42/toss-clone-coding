import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1023px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "toss-gray-100": "rgb(249, 250, 251)",
        "toss-gray-300": "rgb(209, 214, 219)",
        "toss-gray-400": "rgb(176, 184, 193)",
        "toss-gray-500": "rgb(139, 149, 161)",
        "toss-gray-600": "rgb(107, 118, 132)",
        "toss-gray-700": "rgb(78, 89, 104)",
        "toss-gray-800": "rgb(51, 61, 75)",
        "toss-gray-900": "rgb(25, 31, 40)",
        "toss-blue-1": "rgb(49, 130, 246)",
        "toss-blue-2": "rgb(27, 100, 218)",
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [],
};
export default config;
