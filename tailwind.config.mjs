/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				main: '#c4a1ff',
				mainAccent: '#9e66ff', // not needed for shadcn components
				overlay: 'rgba(0,0,0,0.8)',
				// background color overlay for alert dialogs, modals, etc.

				// light mode
				bg: '#daf5f0',
				text: '#000',
				border: '#000',

				// dark mode
				darkBg: '#0f3730',
				darkText: '#eeefe9',
				darkBorder: '#000',
			},
			borderRadius: {
				base: '6px'
			},
			boxShadow: {
				light: '0px 3px 0px 0px #000',
				dark: '0px 3px 0px 0px #000',
			},
			translate: {
				boxShadowX: '0px',
				boxShadowY: '3px',
				reverseBoxShadowX: '0px',
				reverseBoxShadowY: '-3px',
			},
			fontWeight: {
				base: '500',
				heading: '700',
			},
		},
	},
	plugins: [],
}
