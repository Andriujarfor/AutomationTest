const routes = {
  homepage: '/',
  login: '/login',
};

const dataValues = {
  first_name: 'Andre',
  last_name: 'Boza',
  email: 'andre@email.com',
  password: 'andre123',
  company: 'Apply',
  address: 'Principal avenue',
  address2: 'Secundary avenue',
  state: 'Zulia',
  city: 'Maracaibo',
  zipcode: '12321',
  mobile_number: '041212334567',
};

const dateVal = {
  days: 29,
  months: 10,
  years: 23,
  country: 2,
};

const dataBank = {
  name_on_card: 'BOFA',
  card_number: '123123',
  cvc: '1087',
  expiry_month: '08',
  expiry_year: '2025',
};

const dataContact = {
  subject: 'Need some information',
  message: 'Im contacting to get to know all the variety of products sizes',
  file: 'SuperSmashBrosUltimate.jpg',
};

describe('Automation flow ', { browser: 'chrome' }, () => {
  it('Intereacting adn reproducing a real user behavior', () => {
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
    cy.get('.col-sm-6 > .btn').click();

    // 6. Going to the Register / Login page
    cy.get('.modal-body > :nth-child(2) > a > u').click();

    // 7. Filling sign up Email and Name fields
    cy.get('[data-qa="signup-name"]').type(dataValues.first_name);
    cy.get('[data-qa="signup-email"]').type(dataValues.email);
    cy.get('[data-qa="signup-button"]').click();

    //8. Form filling and account creation

    cy.get('#id_gender1').check();

    cy.contains('newsletter!').click();

    cy.contains('partners!').click();

    for (const key in dateVal) {
      cy.get(`[data-qa="${key}"]`).select(dateVal[key]);
    }

    for (const key in dataValues) {
      cy.get(`[data-qa="${key}"]`).then((ele) => {
        if (!ele[0].hasAttribute('disabled')) cy.get(`[data-qa="${key}"]`).type(dataValues[key]);
      });
    }

    cy.get('[data-qa="create-account"]').click();

    // // //9. Continue buying after creating account

    cy.get('[data-qa="continue-button"]').click();

    // // // 10. Clicking on the cart
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();

    // // 11. Proceeding to checkout
    cy.get('.col-sm-6 > .btn').click();

    // // 12. Commenting and placing an order
    cy.get('.form-control').type('Buying some clothes for summer time');
    cy.contains('Place Order').click();

    // // 13. Card info filling / Paying confirmation

    for (const key in dataBank) {
      cy.get(`[data-qa="${key.replaceAll('_', '-')}"]`).type(dataBank[key]);
    }
    cy.get('[data-qa="pay-button"]').click();

    // //14. Continue
    cy.get('[data-qa="continue-button"]').click();

    // //15. Logging out
    cy.contains('Logout').click();

    // //16. Loggin in
    cy.get('[data-qa="login-email"]').type(dataValues.email);
    cy.get('[data-qa="login-password"]').type(dataValues.password);
    cy.get('[data-qa="login-button"]').click();

    // 17. Contacting

    cy.contains('Contact us').click();

    // 18. Contacting form filling

    cy.get('[data-qa="name"]').type(dataValues.first_name);
    cy.get('[data-qa="email"]').type(dataValues.email);
    cy.get('[data-qa="subject"]').type(dataContact.subject);
    cy.get('[data-qa="message"]').type(dataContact.message);
    cy.get(':nth-child(6) > .form-control').selectFile(dataContact.file);
    cy.get('[data-qa="submit-button"]').click();
    cy.get('#form-section > .btn').click();

    //20. Final log out
    cy.contains('Logout').click();
  });
});
