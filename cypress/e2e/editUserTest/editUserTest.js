import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('the user is logged in', () => {
    cy.visit('/index.php?route=account/login');
    cy.get('#input-email').type('naufalazhar65@gmail.com');
    cy.get('#input-password').type('naufal354');
    cy.get('form > .btn').click();
});

// ========================================================================================================================

// Scenario: Navigate to Edit User Page
When('the user navigates to the Edit User page', () => {
    cy.visit('/index.php?route=account/edit');
});

Then('the user should be on the Edit User page', () => {
    cy.url().should('include', 'account/edit');
});

And('the user should see the user details form', () => {
    cy.get('#account-edit').should('be.visible');
    cy.contains('Edit Information').should('be.visible');
});

// ========================================================================================================================

// Scenario: Edit User Profile
When('the user updates the user details with new information', () => {
    cy.get('#input-telephone').clear().type('0212345678').should('have.value', '0212345678');
});

And('the user submits the updated details', () => {
    cy.get('.float-right > .btn').click();
});

Then('a success message for profile update should be displayed', () => {
    cy.get('#account-account > .alert').should('be.visible').and('have.text', ' Success: Your account has been successfully updated.')
});

And('the user details should be updated', () => {
    cy.visit('/index.php?route=account/edit');
    cy.get('#input-telephone').should('have.value', '0212345678');
});

// ========================================================================================================================

// Scenario: Edit User Profile with Invalid Information
When('the user updates the user details with invalid information', () => {
    cy.visit('/index.php?route=account/edit');
    cy.get('#input-firstname').clear();
    cy.get('.float-right > .btn').click();
});

Then('an error message for invalid information should be displayed', () => {
	cy.get('.text-danger').should('be.visible').and('have.text', 'First Name must be between 1 and 32 characters!');
});

And('the user details should not be updated', () => {
	cy.url().should('include','/index.php?route=account/edit');
});

// ========================================================================================================================

// Scenario: Cancel Edit User Profile
When('the user navigates back without saving changes', () => {
    cy.visit('/index.php?route=account/edit');
    cy.get('#input-telephone').clear().type('001111119').should('have.value', '001111119');
    cy.get('.float-left > .btn').click()
});

Then('the user details should remain unchanged', () => {
    cy.visit('/index.php?route=account/edit');
    cy.get('#input-telephone').should('have.value', '0212345678');

});

