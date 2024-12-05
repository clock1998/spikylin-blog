import type { Config } from 'tailwindcss';
import daisyui from "daisyui"
import typography from "@tailwindcss/typography"
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [
		typography,
		daisyui
	],
	daisyui:{
		themes: [
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
		  ],
	}
} satisfies Config;
