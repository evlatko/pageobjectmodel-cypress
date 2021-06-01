context('Amazon tests', () => {
  
    it('should open home page', () => {
      cy.visit("https://www.amazon.com/");
      cy.compareSnapshot('login', {
        capture: 'fullPage',
        errorThreshold: 0.1
      });
    });
    
  });