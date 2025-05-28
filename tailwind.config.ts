import containerQueries from "@tailwindcss/container-queries";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		colors: {
			neutral900: "hsl(227, 75%, 14%)",
			neutral800: "hsl(226, 25%, 17%)",
			neutral700: "hsl(225, 23%, 24%)",
			neutral600: "hsl(226, 11%, 37%)",
			neutral300: "hsl(0, 0%, 78%)",
			neutral200: "hsl(217, 61%, 90%)",
			neutral100: "hsl(0, 0%, 93%)",
			neutral0: "hsl(200, 60%, 99%)",

			// ### Red

			red400: "hsl(3, 86%, 64%)",
			red500: "hsl(3, 71%, 56%)",
			red700: "hsl(3, 77%, 44%)",

			// ### Gradient

			lightGradient: "linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)",
			darkGradient: "linear-gradient(180deg, #040918 0%, #091540 100%)"
		},
		extend: {}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;
