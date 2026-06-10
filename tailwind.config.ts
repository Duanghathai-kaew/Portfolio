import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        graphite: {
          DEFAULT: "var(--graphite)",
          dark: "var(--graphite-dark)",
          light: "var(--graphite-light)"
        },
        lilac: {
          DEFAULT: "var(--lilac)",
          light: "var(--lilac-light)",
          dark: "var(--lilac-dark)"
        },
        card: "var(--card)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        border: "var(--border)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)"
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)"
        }
      },
      boxShadow: {
        soft: "0 20px 70px -35px rgba(63, 63, 61, 0.35)"
      },
      fontFamily: {
        heading: [
          "var(--font-heading)",
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui"
        ],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "monospace"
        ]
      }
    }
  },
  plugins: [forms]
};

export default config;
