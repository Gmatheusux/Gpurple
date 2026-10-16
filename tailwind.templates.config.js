/** Config do Tailwind só para materiais/templates-email.html */
module.exports = Object.assign({
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "on-surface-variant": "#cbc3d7",
            "outline-variant": "#494454",
            "inverse-on-surface": "#322f39",
            "on-secondary-fixed-variant": "#3f4c00",
            "on-error-container": "#ffdad6",
            "surface-tint": "#d0bcff",
            "on-surface": "#e7e0ed",
            "on-tertiary-fixed-variant": "#673d00",
            "primary": "#d0bcff",
            "primary-fixed-dim": "#d0bcff",
            "surface-container": "#211e27",
            "surface-bright": "#3b3742",
            "on-secondary-container": "#333e00",
            "secondary": "#b5d332",
            "tertiary": "#ffb869",
            "surface-variant": "#37333d",
            "on-tertiary-fixed": "#2c1700",
            "on-tertiary": "#482900",
            "inverse-primary": "#6d3bd7",
            "surface-container-low": "#1d1a23",
            "tertiary-fixed-dim": "#ffb869",
            "secondary-container": "#92af00",
            "primary-fixed": "#e9ddff",
            "on-tertiary-container": "#3f2300",
            "on-background": "#e7e0ed",
            "on-primary-container": "#340080",
            "error": "#ffb4ab",
            "on-secondary-fixed": "#181e00",
            "outline": "#958ea0",
            "tertiary-fixed": "#ffdcbb",
            "on-primary-fixed-variant": "#5516be",
            "error-container": "#93000a",
            "surface-container-high": "#2c2832",
            "secondary-fixed-dim": "#b5d332",
            "tertiary-container": "#ca801e",
            "surface": "#15121b",
            "primary-container": "#a078ff",
            "surface-container-lowest": "#0f0d15",
            "on-secondary": "#2b3400",
            "background": "#15121b",
            "on-primary": "#3c0091",
            "inverse-surface": "#e7e0ed",
            "surface-dim": "#15121b",
            "on-error": "#690005",
            "secondary-fixed": "#d0f04e",
            "on-primary-fixed": "#23005c",
            "surface-container-highest": "#37333d",
            "deep-onyx": "#0d0d11",
            "canvas-base": "#050505"
          },
          borderRadius: {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "2xl": "1rem",
            "full": "9999px"
          },
          fontFamily: {
            headline: ["Space Grotesk", "sans-serif"],
            display: ["Space Grotesk", "sans-serif"],
            body: ["Inter", "sans-serif"],
            label: ["Public Sans", "sans-serif"],
            mono: ["JetBrains Mono", "monospace"]
          }
        },
      }
    }, {
    content: ['./materiais/templates-email.html'],
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')]
});
