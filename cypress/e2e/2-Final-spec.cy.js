const routes = {
  homepage: '/',
  login: '/login',
};

const dataValues = {
  name: 'Andre',
  lastName: 'Boza',
  email: 'andre@email.com',
};

describe('Visiting site and scrolling down ', { browser: 'chrome' }, () => {
  const loginFunc = function () {
    it('logging in', () => {
      cy.get('[data-qa="login-email"]').type(dataValues.email);
      cy.get('[data-qa="login-password"]').type(dataValues.lastName);
      //   cy.get('[data-qa="login-button"]').click();
    });
  };

  it.only('Visiting site and first interactions', () => {
    // 1. Visit the exercise site using the base url set in the config
    cy.visit(routes.homepage);

    // 2. Scrolls down to the center of the page is a lapse of 3 seconds
    cy.scrollTo('center', { duration: 3000 });
    cy.get('a[href="/product_details/28"]').click();

    // 3. Changing amount of products
    cy.get('#quantity').type('{selectAll}{backspace}');
    cy.get('#quantity').type('30');

    // 4. Adding to cart and viewing cart products
    cy.contains('Add to cart').click(); // add to cart incredibly long space 🪲
    cy.contains('View Cart').click();

    // 5. Proceeding to check out
    // cy.get('.col-sm-6 > .btn').scrollIntoView().should('be.visible');
    cy.get('.col-sm-6 > .btn').click();

    // 6. Going to the Register / Login page
    cy.get('.modal-body > :nth-child(2) > a > u').click();

    // 7. Filling sign up Email and Name fields
    cy.get('[data-qa="signup-name"]').type(dataValues.name);
    cy.get('[data-qa="signup-email"]').type(dataValues.email);
    cy.get('[data-qa="signup-button"]').click();

    //8. Form filling and account creation
  });
  //7. First login
  //   loginFunc();
});
