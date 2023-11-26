import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('the user is on the login page', () => {
	cy.visit('https://www.saucedemo.com/')
	cy.title().should('eq', 'Swag Labs')
	cy.wait(2000)
})

When('the user logs in with {string} and {string}', (username, password) => {
	cy.get('[data-test="username"]').type(username)
	cy.get('[data-test="password"]').type(password)
	cy.get('[data-test="login-button"]').click()
	cy.wait(2000)
})

Then('the user should be redirected to the Products page', () => {
	cy.contains('Products').should('be.visible')
})

Then('an error message should be displayed', () => {
	cy.get('[data-test="error"]').should(
		'have.text',
		'Epic sadface: Username and password do not match any user in this service',
	)
})

And('the user logs out', () => {
	cy.get('#react-burger-menu-btn').click()
	cy.get('#logout_sidebar_link').click()
	cy.wait(2000)
})

Then('the user should be redirected to the Swag Labs homepage', () => {
	cy.url().should('include', '/')
	cy.contains('Swag Labs').should('be.visible')
})
