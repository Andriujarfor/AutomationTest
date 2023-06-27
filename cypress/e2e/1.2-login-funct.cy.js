const routes = {
  home: '/',
  login: '/login',
};

const dataValues = {
  name: 'Andre',
  lastName: 'Boza',
  email: 'andre@email.com',
  password: 'andre123',
};

describe('Visiting site and scrolling down ', { browser: 'chrome' }, () => {
  const loginFunc = function () {
    it('logging in', () => {
      cy.url('login');
      cy.visit(routes.login);
      cy.get('[data-qa="login-email"]').type(dataValues.email);
      cy.get('[data-qa="login-password"]').type(dataValues.password);
      //   cy.get('[data-qa="login-button"]').click();
    });
  };

  it('testing funct login', () => {
    cy.visit(routes.home);
    // cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
  });

  loginFunc();
});
