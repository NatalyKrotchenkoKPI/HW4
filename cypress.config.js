const { defineConfig } = require("cypress");
const cucumber = require("@badeball/cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: 'c9zkvb',
  e2e: {
    baseUrl: "https://conduit.realworld.how",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    html: true,
    json: true
  }
});
