/// <reference types="Cypress" />
//
// **** Kitchen Sink Tests ****
//
// This app was developed to demonstrate
// how to write tests in Cypress utilizing
// all of the available commands
//
// Feel free to modify this spec in your
// own application as a jumping off point

// Please read our "Introduction to Cypress"
// https://on.cypress.io/introduction-to-cypress

describe('Kitchen Sink', () => {
  it('loads', () => {
    cy.visit('http://localhost:4200');
  });
});
