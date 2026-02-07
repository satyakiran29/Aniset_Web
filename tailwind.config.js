/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            colors: {
                // We'll keep using CSS variables for dynamic theming, 
                // but can extend tailwind here if needed.
                // For now, rely on standard utilities + css variables in index.css
            },
            animation: {
                'fade-in': 'fadeIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
