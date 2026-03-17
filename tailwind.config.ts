import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#111010",
                foreground: "#fafafa",
                primary: {
                    DEFAULT: "#FF7F50", // Action Orange
                    foreground: "#000000",
                },
                secondary: {
                    DEFAULT: "#1E3A8A", // Dark Blue
                    foreground: "#ffffff",
                },
                accent: {
                    amber: "#FF7F50",
                    steel: "#8B9699",
                },
                border: "rgba(255,255,255,0.08)",
            },
            fontFamily: {
                sans: ["Roboto", "sans-serif"],
                display: ["Oswald", "sans-serif"],
            },
        },
    },
    plugins: [],
}

export default config