const routes = {
  homepage: '/',
  login: '/login',
};

const route = [{ homepage: '/' }, { login: '/login' }];
const tryin = { ...route };

// console.log(route.length);
// console.log(tryin.length);
// console.log({ ...route });
// console.log(...route);
// console.log(routes);

const dataValues = {
  name: 'Andre',
  email: 'andre@email.com',
};

const dataVal = {
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

// console.log(routes.homepage);
describe('mmmmmm ', { browser: 'chrome' }, () => {
  it('mmmmmmmmmmm', () => {
    cy.visit(routes.homepage);
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    for (const key in dataValues) {
      console.log(`${key}:  ${dataValues[key]}`);
      cy.get(`[data-qa="signup-${key}"`).type(dataValues[key]);
    }

    cy.get('[data-qa="signup-button"]').click();

    cy.get('#id_gender1').check();

    cy.contains('newsletter!').click();

    cy.contains('partners!').click();

    for (const key in dateVal) {
      console.log(`${key}:  ${dateVal[key]}`);
      cy.get(`[data-qa="${key}"]`).select(dateVal[key]);
    }

    for (const key in dataVal) {
      cy.get(`[data-qa="${key}"]`).then((ele) => {
        if (!ele[0].hasAttribute('disabled')) cy.get(`[data-qa="${key}"]`).type(dataVal[key]);
      });
    }
  });
});
