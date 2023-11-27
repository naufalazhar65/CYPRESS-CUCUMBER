const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require('cypress')

module.exports = defineConfig({
	defaultCommandTimeout: 10000,
	pageLoadTimeout: 10000,
	watchForFileChanges: false,
	chromeWebSecurity: false,
	video: false,

	e2e: {
		baseUrl : "https://ecommerce-playground.lambdatest.io",
		setupNodeEvents(on, config) {
			on('file:preprocessor', cucumber())
		},
		specPattern: 'cypress/e2e/*.feature',
	},
})
