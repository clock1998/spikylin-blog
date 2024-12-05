import type { Config } from 'tailwindcss';
import daisyui from "daisyui"
import typography from "@tailwindcss/typography"
import { themes } from './src/lib/themes';
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
		themes: themes
	}
} satisfies Config;
