import { defineConfig } from 'vite-plugin-windicss'
import plugin from 'windicss/plugin'

import { OhMyProject } from '@mioe/packages'
const {
	components,
} = OhMyProject

export default defineConfig({
	darkMode: 'class', // or 'media' or 'class'
	plugins: [
		plugin(({ addComponents }) => {
			components.forEach((component) => {
				addComponents(component)
			})
		}),
	],
})
