/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                rubik: ['"Rubik"', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                primary: '#343540',
                secondary: '#00C28C',
            }
        },
    },
    plugins: [],
}
