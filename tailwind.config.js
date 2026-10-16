/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './projetos/**/*.html'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
            colors: {
                gpurple: {
                    dark: 'var(--color-surface-dark)',
                    card: 'var(--color-surface-card)',
                    deep: 'var(--color-surface-deep)',
                    primary: 'var(--color-brand-primary)',
                    accent: 'var(--color-brand-accent)',
                    danger: 'var(--color-feedback-danger)'
                }
            }
        }
    }
};
