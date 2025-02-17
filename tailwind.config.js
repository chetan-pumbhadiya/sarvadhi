/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                fade: "fadeIn 1s ease-in-out",
            },
            keyframes: {
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
            },
        },
    },
    plugins: [],
};
