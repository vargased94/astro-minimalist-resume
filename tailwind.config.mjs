/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addBase, config }) {
			addBase({
				'h1': { fontSize: config('theme.fontSize.2xl') },
				'h2': { fontSize: config('theme.fontSize.xl') },
				'h3': { fontSize: config('theme.fontSize.lg') },
				'h4': { fontSize: config('theme.fontSize.base') },
				'h5': { fontSize: config('theme.fontSize.sm') },
				'h6': { fontSize: config('theme.fontSize.xs') },
				'p': { fontSize: config('theme.fontSize.sm') },
				'a': { fontSize: config('theme.fontSize.sm') },
				'li': { fontSize: config('theme.fontSize.sm') },
			})
		}),
	],
}
