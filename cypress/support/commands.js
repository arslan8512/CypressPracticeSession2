// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress"/> 

  Cypress.Commands.add("login", () => {
   cy.session(["", ""], () => {
   cy.visit("/login");
   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin");
   //cy.get('.mat-secondary > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("admin")
    //cy.get('.mat-form-field.ng-tns-c56-1 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type("12345678")
    //cy.get('.btn-primary').click()
   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");
    cy.get('.oxd-button').click();
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible').and('contain.text', 'Dashboard'); // Assertion added for clear results 
   // cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
});
  })
  Cypress.Commands.add("AddAdmin", ()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser")
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click().trigger('mouseenter')
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click().trigger('mouseenter')
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get('.oxd-autocomplete-text-input > input').click().type("John  Smith").wait(5000).type('{downarrow}').type('{enter}')
    cy.wait(5000)
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("JhonUser")
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("Codes@123")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type("Codes@123")
    cy.wait(50000)
    cy.get('.oxd-button--secondary').click()
  })