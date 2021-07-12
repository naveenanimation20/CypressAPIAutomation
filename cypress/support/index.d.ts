/// <reference types="Cypress" />

declare namespace Cypress {
    interface Chainable {
        myCustomCommandA(selector: string, option: string): Cypress.Chainable<JQuery>;
        myCustomCommandB(param: string, value: any): Cypress.Chainable<JQuery>;
    }
}