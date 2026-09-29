import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#141412",
        body: "#4A4843",
        muted: "#5E5B55",
        bg: "#F3F1EC",
        card: "#FFFFFF",
        line: "#E6E2DA",
        lime: "#D8F07A", // main accent
        limeDeep: "#A8CC2E",
        sky: "#C4E1F6",
        peach: "#F2A27C",
        lilac: "#D6CCFA",
        butter: "#F5E49C",
        night2: "#3A3935",
        // Deeper art shades used in the designs.
        butterDeep: "#E3C443",
        lilacDeep: "#9D8CF0",
        skyDeep: "#6FB3E3",
        faint: "#B9B4AA",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "Helvetica Neue", "sans-serif"],
        sans: ["var(--font-geist)", "-apple-system", "Helvetica Neue", "sans-serif"],
      },
      borderRadius: {
        card: "32px",
      },
      screens: {
        // Mobile design below this width, desktop design above it.
        desk: "900px",
      },
    },
  },
};

export default config;
