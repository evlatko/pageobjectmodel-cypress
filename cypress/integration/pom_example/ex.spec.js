import ActionsLocator from '../../locators/actions.locator';

describe("Ny second test", () => {
  
    before('Open url', ()=> {
      cy.visit('https://github.com/login');
    });

    it("Test login form", ()=> {
        cy.get(ActionsLocator.username()).type('email@assd.com').should("have.value", 'email@assd.com');
        cy.get('#password').type('asasas').should("have.value", 'asasas');
        cy.contains('Forgot password?').click();
        cy.go('back');
        cy.get('.btn').click().should('');
    });
});
