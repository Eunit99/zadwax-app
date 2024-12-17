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
      },
      fontFamily: {
        // 👇 Add CSS variables
        sans: ["var(--font-opensans)"],
        mono: ["var(--font-roboto-mono)"],
        display: ["var(--font-display)"],
        aeonikPro: ["var(--font-aeonikPro)"],
        brFirma: ["var(--font-brFirma)"],
      },
      backgroundImage: {
        'top-content-bg': "url('/background/vector.svg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
