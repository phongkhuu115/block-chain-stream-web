const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "0",
        },
        extend: {
            transitionProperty: {
                'height': 'height',
            },
            fontFamily: {
                sans: ["Poppins", ...fontFamily.sans],
            },
            screens: {
                "small": "320px",
                "medium": "768px",
                "large": "1024px",
                "xlarge": "1280px",
            },
            fontSize: {
                "navigate": "12px",
                "banner": "2vw",

            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: {
                    DEFAULT: "#232D3F",
                    100: "#384865",
                    200: "#4d638b",
                },
                secondary: {
                    DEFAULT: "#0F0F0F",
                },
                thirdary: {
                    DEFAULT: "#005B41",
                },
                alpha: {
                    DEFAULT: "#008170",
                },
                beta: {
                    DEFAULT: "#D9D9D966",
                },
                "papaya-whip": {
                    DEFAULT: "#FFEFD5",
                },
                "ash-gray": {
                    DEFAULT: "#C6D8D3",
                },
                "feldgrau": {
                    DEFAULT: "#466060",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            variants: {
                transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
            },

        },
    },
    plugins: [require("tailwindcss-animate")],
}