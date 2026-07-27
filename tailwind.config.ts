import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Instrument Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
				display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
				mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
			},
			colors: {
				brand: "rgb(var(--brand) / <alpha-value>)",
				paper: "rgb(var(--paper) / <alpha-value>)",
				line: "rgb(var(--line) / <alpha-value>)",
				subtle: "rgb(var(--subtle) / <alpha-value>)",
				ink: {
					DEFAULT: "rgb(var(--ink) / <alpha-value>)",
					soft: "rgb(var(--ink-soft) / <alpha-value>)",
				},
			},
			maxWidth: {
				shell: "1060px",
			},
			keyframes: {
				"fade-up": {
					"0%": { opacity: "0", transform: "translateY(22px)" },
					"100%": { opacity: "1", transform: "none" },
				},
			},
			animation: {
				"fade-up": "fade-up 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both",
			},
		},
	},
	plugins: [],
} satisfies Config;
