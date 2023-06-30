const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    testIsolation: false, //was used for testing different features that were separated in test-cases apart while writting the code, but it's a bad practice
    baseUrl: 'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
