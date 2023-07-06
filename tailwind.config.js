/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                sideNavBar: "#101828",
            },
            containers: {
                "2xs": "15rem",
                "3xs": "10rem",
            },
        },
    },
    plugins: [require("@tailwindcss/container-queries")],
};
