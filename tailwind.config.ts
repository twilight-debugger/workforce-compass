import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        "muted-2": {
          DEFAULT: "hsl(var(--muted-2))",
          foreground: "hsl(var(--muted-2-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Roboto Serif", "serif"],
        mono: ["var(--font-mono)", "Roboto Mono", "monospace"],
        cursive: ["var(--font-cursive)", "Caveat", "cursive"],
        playfair: ["Playfair Display", "serif"],
        caveat: ["Caveat", "cursive"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "fade-in-out": {
          "0%": { opacity: "0" },
          "20%, 80%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        progress: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 5))" },
        },
        infiniteSliderReverse: {
          "0%": { transform: "translateX(calc(-250px * 5))" },
          "100%": { transform: "translateX(0)" },
        },
        "shadow-ping": {
          "0%": { boxShadow: "0 0 0 0px hsl(var(--muted))" },
          "50%": { boxShadow: "0 0 0 12px hsl(var(--muted))" },
          "100%": { boxShadow: "0 0 0 12px transparent" },
        },
        "flip-btn": {
          to: { transform: "rotate(360deg)" },
        },
        "rotate-btn": {
          to: { transform: "rotate(90deg)" },
        },
        "light-to-right": {
          "0%": { transform: "translate(0%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translate(100%)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-to-right": {
          "0%": { opacity: "0", left: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", left: "80%" },
        },
        "slide-to-top": {
          "0%": { opacity: "0", bottom: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0", bottom: "80%" },
        },
        "shimmer-slide": {
          to: { transform: "translate(calc(100cqw - 100%), 0)" },
        },
        "spin-around": {
          "0%": { transform: "translateZ(0) rotate(0)" },
          "15%, 35%": { transform: "translateZ(0) rotate(90deg)" },
          "65%, 85%": { transform: "translateZ(0) rotate(270deg)" },
          "100%": { transform: "translateZ(0) rotate(360deg)" },
        },
        shine: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          to: { backgroundPosition: "0% 0%" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
        "fade-in-out": "fade-in-out 4s ease-in-out",
        "fade-in": "fade-in 0.7s ease-out forwards",
        progress: "progress 8s linear",
        "infinite-slider": "infiniteSlider 20s linear infinite",
        "infinite-slider-reverse": "infiniteSliderReverse 20s linear infinite",
        "shadow-ping": "shadow-ping 1.5s ease-in-out infinite",
        "flip-btn": "flip-btn 6s infinite steps(2, end)",
        "rotate-btn": "rotate-btn 3s linear infinite both",
        "light-to-right-top": "light-to-right 4s linear infinite",
        "light-to-right-bottom": "light-to-right 4s linear infinite",
        marquee: "marquee 25s linear infinite",
        "slide-to-right": "slide-to-right 3s linear infinite",
        "slide-to-top": "slide-to-top 3s linear infinite",
        "shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        shine: "shine var(--duration) infinite linear",
        "border-beam": "border-beam var(--duration) infinite linear",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
  ],
} satisfies Config;
