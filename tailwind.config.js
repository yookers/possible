/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif', 'system-ui']
            },
            colors: {
                background: 'hsl(var(--background) / <alpha-value>)',
                surface: 'hsl(var(--surface) / <alpha-value>)'
            }
        }
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('theme-dark', '[data-theme="dark"] &');
        }
    ]
};
