import { defineConfig } from 'cypress';
import dotenv from 'dotenv';

const env = dotenv.config({
	path: '.env',
}).parsed;

export default defineConfig({
	component: {
		specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
		devServer: {
			framework: 'react',
			bundler: 'vite',
		},
	},
	e2e: {
		baseUrl: `${env?.VITE_BASE_URL}`,
		setupNodeEvents(on, config) {
			console.log(config);

			// implement node event listeners here
		},
	},
	env: {
		BASE_URL: `${env?.VITE_BASE_URL}`,
		SERVER_URL: env?.VITE_SERVER_URL,
	},
});
