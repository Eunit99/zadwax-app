import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // 👇 Add CSS variables
        sans: ["var(--font-opensans)"],
        mono: ["var(--font-roboto-mono)"],
        display: ["var(--font-display)"],
        aeonikPro: ["var(--font-aeonik-pro)"],
        brFirma: ["var(--font-br-firma)"],
      },
      backgroundImage: {
        'top-content-bg': "url('/background/vector.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
