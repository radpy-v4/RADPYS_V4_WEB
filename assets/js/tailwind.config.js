/* Tailwind Play CDN configuration — must load AFTER the CDN <script> */
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Manrope", "system-ui", "sans-serif"],
                display: ["Clash Display", "Manrope", "sans-serif"],
                mono: ["JetBrains Mono", "ui-monospace", "monospace"],
            },
            colors: {
                neon: {
                    teal: "#14b8a6",
                    cyan: "#22d3ee",
                    purple: "#8b5cf6",
                },
            },
        },
    },
};
