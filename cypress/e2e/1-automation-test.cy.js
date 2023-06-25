const routes = {
  homepage: '/',
};

describe('Visiting site and scrolling down ', { browser: 'chrome' }, () => {
  it('visiting site', () => {
    // 1. Visit the exercise site using the base url set in the config
    cy.visit(routes.homepage);

    // 2. Scrolls down to the center of the page is a lapse of 3 seconds
    cy.scrollTo('center', { duration: 3000 });
    cy.get('a[href="/product_details/28"]').click();

    // 3. Changing amount of products
    cy.get('#quantity').type('{selectAll}{backspace}');
    cy.get('#quantity').type('30');

    // 4. Adding to cart and viewing cart products
    cy.get('.btn.btn-default.cart').click();
    cy.contains('View Cart').click();

    // 5.
    // cy.get('.col-sm-6 > .btn').scrollIntoView().should('be.visible');
    cy.get('.col-sm-6 > .btn').click();

    // 6.
    cy.get('.modal-body > :nth-child(2) > a > u').click();

    // 7. Filling sign up Email and Name fields
    cy.get('[placeholder="Name"]').type('andre');
    cy.get('[data-qa="signup-email"]').type('email@ad.com');
    cy.get('[data-qa="signup-button"]').click();

    //8. 😈 complicated version xdd
    // cy.get('form').then((ele) => {
    //   console.log(ele);
    //   const radioBtns = ele.find('radio');
    //   console.log(radioBtns.find(''));
    // cy.get(radioBtns);
    // });

    //8. 😔 normal version :(
  });
});
