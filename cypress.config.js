
const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://maax.ca/',
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      allureCypress(on);
    },
  },
});
