//// <reference types="Cypress" />

import ActionsLocator from '../../locators/actions.locator';

describe("Ny second test", () => {

    const conf = Cypress.config()
  
    before('Open url', ()=> {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    })

      it("Practice Checkbox", ()=> {
          cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
          cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
          cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked');
      });
  
      it("Practice static dropdown", ()=> {
          cy.get('select').select('Option2').should('have.value','option2');
      });
  
      it("Practice dynamic dropdown", ()=> {
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el,index,$list) =>{
          if($el.text() === 'India') {
            $el.trigger('click');
            cy.get('#autocomplete').should('have.value','India');
          }
        });
      });
  
      it("Practice element displayed", ()=> {
        cy.get('#displayed-text').as('displayTextLocator');
        cy.get('@displayTextLocator').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('@displayTextLocator').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('@displayTextLocator').should('be.visible');
      });
  
      it("Practice radio buttons", ()=> {
        cy.get('[value="radio2"]').scrollIntoView().check().should('be.checked');
      });
  
      it("Practice alerts", ()=> {
       cy.get('#alertbtn').scrollIntoView().click();
       cy.on('window:alert',(str) => {
        expect(str).to.equal('Hello , share this practice page and share your knowledge');
       });
  
       cy.get('#confirmbtn').scrollIntoView().click();
       cy.on('window:confirm',(str) => {
        expect(str).to.equal('Hello , Are you sure you want to confirm?');
       });
      });
  
      it("Practice child tabs", ()=> {
        cy.get('#opentab').invoke('removeAttr', 'target').click();
        cy.url().should('include','https://www.rahulshettyacademy.com/#/index');
        cy.go('back');
      });
  
  });