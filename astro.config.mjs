// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import starlightBlog from 'starlight-blog'

// https://astro.build/config
export default defineConfig({
	site: 'https://kozhaakhmet.github.io',
	base: 'https://github.com/KozhaAkhmet/kozhaakhmet.github.io',
	integrations: [
		starlight({
			plugins: [starlightThemeRapide()],
			plugins: [starlightBlog({
				authors: {
					hideoo: {
						name: 'Kozha Akhmet',
						title: 'Workshop Owner',
					},
				},
			})],
			title: "Workshop",
			favicon: './src/assets/wrench icon.png',
			logo: {
				src: './src/assets/logo/toolbox_color_64.png',
			},
			social: {
				github: 'https://github.com/KozhaAkhmet',
				linkedin: 'https://www.linkedin.com/in/kozha-akhmet-abdramanov/'
			},
			sidebar: [
			],
		}),
	],
});
