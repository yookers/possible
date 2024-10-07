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
                surface: {
                    DEFAULT: 'hsl(var(--surface) / <alpha-value>)',
                    hover: 'hsl(var(--surface-hover) / <alpha-value>)'
                },
                text: {
                    DEFAULT: 'hsl(var(--text) / <alpha-value>)',
                    muted: 'hsl(var(--text-muted) / <alpha-value>)'
                }
            }
        }
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('theme-dark', '[data-theme="dark"] &');
        }
    ]
};
