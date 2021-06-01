class ExamplePage {

    navigateTo(url){
        cy.visit(url)
        return this;
    }

    clickOnBtn(btn){
        cy.get(btn).click();
        return this;
    }
}

export default ExamplePage;