// eslint-disable-next-line no-undef
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Ensure your JSX/TSX files are included
    ],
    theme: {
        extend: {
            spacing: {
                'default-padding': '30px',
                'md-padding': '60px'
            }
        },
    },
    plugins: [],
};