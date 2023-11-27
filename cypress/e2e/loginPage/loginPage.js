import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

// Background
Given('the user is on the login page', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    cy.title().should('eq', 'Account Login');
    cy.wait(2000);
});

// ========================================================================================================================

// Scenario: Verify Elements on LoginPage
Then('the user should see the username input field', () => {
    cy.get('#input-email').should('be.visible');
});

And('the user should see the password input field', () => {
    cy.get('#input-password').should('be.visible');
});

And('the user should see the login button', () => {
    cy.get('form > .btn').should('be.visible');
});

And('the user should see the "Forgotten Password" link', () => {
    cy.contains('Forgotten Password').scrollIntoView().should('be.visible');
});

// ========================================================================================================================

// Scenario: Login with Valid Credentials
When('the user enters valid login credentials', () => {
    cy.get('#input-email').type('naufalazhar65@gmail.com');
    cy.get('#input-password').type('naufal354');
    cy.wait(2000);
});

And('the user clicks the login button', () => {
    cy.get('form > .btn').click();
    cy.wait(2000);
});

Then('the user should be redirected to the dashboard', () => {
    cy.url().should('include', '/index.php?route=account/account')
    cy.contains('My Account').should('be.visible');
    cy.contains('My Orders').should('be.visible');
    cy.contains('My Affiliate Account').should('be.visible');
});

// ========================================================================================================================

// Scenario: Login with Invalid Credentials
When('the user enters invalid login credentials', () => {
    cy.get('#input-email').type('invalid@example.com');
    cy.get('#input-password').type('invalidpassword');
    cy.wait(2000);
});

Then('an error message should be displayed', () => {
    cy.get('#account-login > .alert').should('be.visible').and('have.text', ' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');
});

// ========================================================================================================================

When("the user should not be redirected", () => {
	cy.url().should('include', '/index.php?route=account/login')
});


// Scenario: Forgot Password Link
When('the user clicks on the "Forgotten Password" link', () => {
    cy.contains('Forgotten Password').click();
});

Then('the user should be on the password recovery page', () => {
    cy.url().should('include', 'account/forgotten');
    cy.get('.page-title').should('have.text', 'Forgot Your Password?');
});

And('the user should see the email input field', () => {
    cy.get('#input-email').should('be.visible');
});

And('the user should see the submit button', () => {
    cy.get('.float-right > .btn').should('be.visible');
});

// ========================================================================================================================

// Scenario: Back to Login from Password Recovery
When('the user navigates back to the login page from the password recovery page', () => {
    cy.go('back');
});

Then('the user should see the username input field', () => {
    cy.get('#input-email').should('be.visible');
});

And('the user should see the password input field', () => {
    cy.get('#input-password').should('be.visible');
});

And('the user should see the login button', () => {
    cy.get('form > .btn').should('be.visible');
});

And('the user should see the "Forgot Password" link', () => {
    cy.contains('Forgotten Password').should('be.visible');
});