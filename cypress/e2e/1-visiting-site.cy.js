describe('Visiting site and scrolling down ', () => {
  it('visiting site', () => {
    // 1. Visit the exercise site using the base url set in the config
    cy.visit('/');
    // 2. Scrolls down to the center of the page is a lapse of 3 seconds
    cy.scrollTo('center', { duration: 3000 });
    // 3. Selecting a product and clincking on it
    cy.get('a[href="/product_details/28"]').click();
    // 4.
    cy.get('#quantity').type('{selectAll}{backspace}');

    cy.get('#quantity').type('30');

    cy.get('.btn.btn-default.cart').click();

    cy.contains('View Cart').click();

    cy.get('.col-sm-6 > .btn').scrollIntoView().should('be.visible');

    cy.get('.col-sm-6 > .btn').click();

    // cy.get('btn.btn-default.check_out').click();
  });
});
