import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#05060f",
        foreground: "#f8fafc",
        accent: {
          DEFAULT: "#38bdf8",
          muted: "#0ea5e9"
        },
        muted: "#1f2937",
        card: "#10121d"
      },
      fontFamily: {
        display: ["'Montserrat'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
