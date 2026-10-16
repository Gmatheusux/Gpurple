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
                    soft: 'var(--color-brand-primary-soft)',
                    accent: 'var(--color-brand-accent)',
                    'accent-hover': 'var(--color-brand-accent-hover)',
                    volt: 'var(--color-brand-volt)',
                    light: 'var(--color-surface-light)',
                    ink: 'var(--color-text-ink)',
                    body: 'var(--color-text-secondary)',
                    danger: 'var(--color-feedback-danger)'
                }
            }
        }
    }
};
