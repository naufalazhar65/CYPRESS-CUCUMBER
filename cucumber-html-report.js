// *** Let name it cucumber-html-report.js **
const report = require('multiple-cucumber-html-reporter')
report.generate({
	jsonDir: 'cypress/cucumber-json', // ** Path of .json file **//
	reportPath: './reports/cucumber-html-report',
	metadata: {
		browser: {
			name: 'chrome',
			version: '119',
		},
		device: 'Local test machine',
		platform: {
			name: 'mac',
			version: 'Sonoma',
		},
	},
})
