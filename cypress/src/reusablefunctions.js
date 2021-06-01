export const helper = {
    checkTitle(title) {
        cy.title()
            .should('include', title)
    },
    checkTextExist(string) {
        cy.contains(string)
            .should('be.visible');
    },
    checkTextNotExist(string) {
        cy.xpath('//*[contains(text(),"' + string + '")]')
            .should('not.be.visible');
    },
    clickButton(string) {
        cy.contains(string)
            .click();
    },
}