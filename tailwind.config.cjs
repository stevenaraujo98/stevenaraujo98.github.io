/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: '#f52e26',
			secondary: '#026873',
			yellow: '#f29f05',
			semiWhite: '#fef2c7',
			bgColor: '#e97f4c',
			blue: '#273c7a',
			skyBlue: '#00bff3',
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			slate: colors.slate,
			green: colors.emerald,
			pink: colors.fuchsia,
			'purple': '#3f3cbb',
			'midnight': '#121063',
			'metal': '#565584',
			'tahiti': {
				light: '#67e8f9',
				DEFAULT: '#06b6d4',
				dark: '#0e7490',
				100: '#cffafe',
				200: '#a5f3fc',
				300: '#67e8f9',
				400: '#22d3ee',
				500: '#06b6d4',
				600: '#0891b2',
				700: '#0e7490',
				800: '#155e75',
				900: '#164e63',
			},
			'silver': '#ecebff',
			'bubble-gum': '#ff77e9',
			'bermuda': '#78dcca',
		  },
		extend: {
			colors: {
				brown: {
					50: '#fdf8f6',
					100: '#f2e8e5',
					200: '#eaddd7',
					300: '#e0cec7',
					400: '#d2bab0',
					500: '#bfa094',
					600: '#a18072',
					700: '#977669',
					800: '#846358',
					900: '#43302b',
				  },
			}
		},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
