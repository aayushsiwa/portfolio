/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class", // Enable dark mode by class
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Bricolage Grotesque", "sans-serif"],
        },
        extend: {
            colors: {
                // lightBg1: '#f9f9f9', // Light background
                // lightBg2: 'white', // Light background
                // darkBg: 'black', // Dark background
                // lightTxt: '#2d2e32', // Light text
                // darkTxt: 'white', // Dark text
                // darkTxtS: 'wheat', // Dark text
                darkTxt: "#e4ebe1", // Dark text
                darkBg: "#070b05", // Dark background
                darkP: "#b0dc99", // Dark paragraph
                darkS: "#3e7f1c", // Dark heading
                darkA: "#63e520", // Dark anchor
                lightTxt: "#171f14", // Light text
                lightBg: "#f6faf4", // Light background
                lightP: "#3b6723", // Light paragraph
                lightS: "#a4e382", // Light heading
                lightA: "#5ce01a", // Light anchor
            },
            animation: {
                morph: "morph 8s ease-in-out infinite",
            },
            keyframes: {
                morph: {
                    "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
                    "50%": {
                        borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
                    },
                    "100%": {
                        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                    },
                },
            },
        },
    },
    plugins: [],
};
