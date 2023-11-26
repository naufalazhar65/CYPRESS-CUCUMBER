import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I open google', () => {
    cy.visit('https://www.google.com/');
    cy.wait(2000);
  });

When('I submit login', () => {
    cy.title().should('eq', 'Google')
  });

Then('Should see homepage', () => {
    cy.title().should('eq', 'Google')
  });