/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FACC15",
          black: "#0F0F0F",
          dark: "#0a0a0a",
          mid: "#111111",
          surface: "#161616",
        },
      },
      fontFamily: {
        sans: ["Archivo", "system-ui", "sans-serif"],
        display: ["Archivo Black", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(250, 204, 21, 0.22)",
        "glow-sm": "0 0 20px rgba(250, 204, 21, 0.16)",
        "panel": "0 24px 80px rgba(0, 0, 0, 0.6)",
        "card": "0 8px 32px rgba(0,0,0,0.4)",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
