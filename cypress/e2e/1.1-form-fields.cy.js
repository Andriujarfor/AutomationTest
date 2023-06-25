describe('form fields filling', () => {
  it('filling inputs', function () {
    cy.visit('/login');
    cy.get('[data-qa="signup-name"]').type('Andre').as('name');
    cy.get('@name').invoke('val').as('GlobalName');
    cy.get('[data-qa="signup-email"]').type('email@address.com');
    cy.get('[data-qa="signup-button"]').click();

    // cy.get('[action="/signup"]').then((formElements) => {
    //   console.log(formElements);
    // });
  });
  it('globalName', function () {
    cy.get('#id_gender1').check();

    cy.get('[data-qa="password"]').type('andre123');

    cy.get('[data-qa="days"]').select(29);

    cy.get('[data-qa="months"]').select(10);

    cy.get('[data-qa="years"]').select(23);

    cy.contains('newsletter!').click();

    cy.contains('partners!').click();

    cy.get('[data-qa="first_name"]').type(this.GlobalName);

    cy.get('[data-qa="last_name"]').type('Boza');

    cy.get('[data-qa="company"]').type('APPLY');

    cy.get('[data-qa="address"]').type('address #1');

    cy.get('[data-qa="address2"]').type('address #2');

    cy.get('[data-qa="country"]').select(2);

    cy.get('[data-qa="state"]').type('state');

    cy.get('[data-qa="city"]').type('city');

    cy.get('[data-qa="zipcode"]').type('12321');

    cy.get('[data-qa="mobile_number"]').type('numbeeeeer');

    cy.get('[data-qa="create-account"]').click();
  });
});
