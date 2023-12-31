import { Before, Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';


Given('the user is on the login page', () => {
    cy.visit('/index.php?route=account/login');
    cy.title().should('eq', 'Account Login');
    cy.wait(2000);
});

// ========================================================================================================================

// Scenario Outline: Successful login
When('the user logs in with {string} and {string}', (email, password) => {
    cy.get('#input-email').type(email);
    cy.get('#input-password').type(password);
});

And('the user clicks the login button', () => {
    cy.get('form > .btn').click();
    cy.wait(2000);
});

Then('the user should be redirected to the dashboard', () => {
    cy.contains('My Account').should('be.visible');
    cy.contains('My Orders').should('be.visible');
    cy.contains('My Affiliate Account').should('be.visible');
});

// ========================================================================================================================

// Scenario Outline: Login with invalid credentials
Then('an error message should be displayed', () => {
    cy.get('#account-login > .alert').should('be.visible').then(($alert) => {
        const alertText = $alert.text();
        
        if (alertText.includes('No match for E-Mail Address and/or Password')) {
            // Assertion untuk pesan error pertama
            expect(alertText).to.equal(' Warning: No match for E-Mail Address and/or Password.');
        } else if (alertText.includes('Your account has exceeded allowed number of login attempts')) {
            // Assertion untuk pesan error kedua
            expect(alertText).to.equal(' Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.');
        } else {
            // Assertion default jika pesan error tidak sesuai dengan yang diharapkan
            throw new Error('Unexpected error message: ' + alertText);
        }
    });
});

// ========================================================================================================================

// Scenario: Forgot password functionality
When('the user clicks on the "Forgotten Password" link', () => {
    cy.contains('Forgotten Password').click();
    cy.get('.page-title').should('have.text', 'Forgot Your Password?');
});

And('provides a valid email for password recovery', () => {
    cy.get('#input-email').type('naufalazhar65@gmail.com');
});

And('submits the password recovery form', () => {
    cy.get('.float-right > .btn').click();
});

Then('a success message for password recovery should be displayed', () => {
    cy.get('#account-login > .alert')
        .should('be.visible')
        .and('have.text', ' An email with a confirmation link has been sent your email address.');
});
