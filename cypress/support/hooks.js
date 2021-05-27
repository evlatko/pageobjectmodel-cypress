before(() => {
    cy.log('Global Before Hook #########################');
});

after(() => {
    cy.log('Global After Hook ##########################');
});

beforeEach(() => {
    cy.log('Run before every test in every spec file*******')
});

afterEach(() => {
    cy.log('Run after each every test in every spec file-------')
});
