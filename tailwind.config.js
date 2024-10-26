/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "picton-blue": {
          50: "#f2f9fd",
          100: "#e4f1fa",
          200: "#c3e3f4",
          300: "#8ecdeb",
          400: "#3eaadb",
          500: "#2b99cc",
          600: "#1c7bad",
          700: "#18628c",
          800: "#185474",
          900: "#194761",
          950: "#112d40",
        },
      },
      keyframes: {
        shakeIT: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
        bounceIT: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        fadeInIT: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOutIT: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        shakeIT: "shakeIT 0.5s ease-in-out",
        bounceIT: "bounceIT 1s ease-in-out",
        fadeInIT: "fadeInIT 0.3s ease-in-out",
        fadeOutIT: "fadeOutIT 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
