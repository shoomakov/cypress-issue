/// <reference types="cypress" />

describe('Homepage', () => {
  it('should equals "Homepage"', function () {
    cy.visit('http://localhost:8080');
    cy.get('.app-layout-default');
  });
});
