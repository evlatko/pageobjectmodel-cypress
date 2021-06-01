const routes = ['badge.html', 'button.html'];

describe('Component accessibility test', () => {
//   routes.forEach((route) => {
    // const componentName = route.replace('.html', '');
    // const testName = `${componentName} has no detectable accessibility violations on load`;

    it('testName', () => {
      cy.visit("https://testautomationu.applitools.com/cypress-tutorial/chapter7.html");
      cy.injectAxe();
      
    //   cy.get('.cypress-wrapper').each((element, index) => {
        cy.checkA11y('',
          {
            runOnly: {
              type: 'tag',
              values: ['wcag2a'],
            },
          }
        );
    //   });
    });
//   });
});