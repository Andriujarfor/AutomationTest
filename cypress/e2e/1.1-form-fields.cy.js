const dataBank = {
  name_on_card: 'BOFA',
  card_number: '123123',
  cvc: '1087',
  expiry_month: '08',
  expiry_year: '2025',
};

describe('form fields filling', () => {
  it('filling inputs', function () {
    cy.visit('/login');
    cy.get('[data-qa="signup-name"]').type('Andre').as('name');
    cy.get('@name').invoke('val').as('GlobalName');
    cy.get('[data-qa="signup-email"]').type('email@address.com').as('EmailA');
    cy.get('@EmailA').invoke('val').as('GlobalEmail');
    cy.get('[data-qa="signup-button"]').click();

    // cy.get('[action="/signup"]').then((formElements) => {
    //   console.log(formElements);
    // });
  });
  it('globalName', function () {
    // report hidden inputs and all bad practices
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
    //9
    cy.get('[data-qa="continue-button"]').click();
  });

  it('adding to cart', () => {
    //10
    cy.visit('/');

    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    //11
    cy.get('.col-sm-6 > .btn').click();
    //12
    cy.get('.form-control').type('Buying some clothes for summer time');
    cy.contains('Place Order').click();
    // //13
    // cy.get('[data-qa="name-on-card"]').type('BANCO DE DINERO');
    // cy.get('[data-qa="card-number"]').type('cardNumber');
    // cy.get('[data-qa="cvc"]').type('number122');
    // cy.get('[data-qa="expiry-month"]').type('08');
    // cy.get('[data-qa="expiry-year"]').type('2025');

    for (const key in dataBank) {
      cy.get(`[data-qa="${key.replaceAll('_', '-')}"]`).type(dataBank[key]);
    }
  });
  //15
  const logOutFunc = function () {
    it.only('logging out', () => {
      cy.visit('/');

      cy.contains('Logout').click();
    });
  };
  // logOutFunc();

  it('loggin in xdd when I need to reset', () => {
    cy.visit('/login');
    //16
    cy.get('[data-qa="login-email"]').type('email@address.com');
    cy.get('[data-qa="login-password"]').type('andre123');
    cy.get('[data-qa="login-button"]').click();
  });

  it.only('Contact us', function () {
    //17
    cy.visit('/');
    cy.contains('Contact us').click();

    //18
    cy.get('[data-qa="name"]').type('Andre');
    cy.get('[data-qa="email"]').type('email@address.com'); // do it with the global variable or in other case use objects
    cy.get('[data-qa="subject"]').type('Contacting');
    cy.get('[data-qa="message"]').type('messaging');
    cy.get(':nth-child(6) > .form-control').selectFile('SuperSmashBrosUltimate.jpg');
    // cy.get('[data-qa="submit-button"]').click();
    // cy.get('#form-section > .btn').click();
    //20
  });
  // logOutFunc();
});
