before(() => {
    cy.log('Run before all tests #########################');
});

after(() => {
    cy.log('Run after all tests ##########################');
});

beforeEach(() => {
    cy.log('Run before every test in every spec file*******')
});

afterEach(() => {
    cy.log('Run after each every test in every spec file*******')
});
