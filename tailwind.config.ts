import type { Config } from "tailwindcss";

// Configuration for Tailwind CSS v4.1
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sansita: ["var(--font-sansita)"],
        oleoScript: ["var(--font-oleo_script)"],
      },
    },
  },
  // Important change for v4: darkMode is now handled differently
  // In v4, dark mode is enabled by default and uses the 'media' strategy
  // To use class strategy with next-themes, we specify it here:
  darkMode: "class",
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
