/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary:{
					DEFAULT : "#eda276"
				},
				secondary : {
					DEFAULT : "#1B0C00"
				},
				tertiary:{
					DEFAULT : "#45342f"
				}
			}
		},
	},
	plugins: [],
}
