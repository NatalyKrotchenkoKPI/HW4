const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const cucumber = require("@badeball/cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  projectId: 'c9zkvb',
  e2e: {
    baseUrl: "https://conduit.realworld.how",
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      const options = browserify.defaultOptions;

      if (cucumber && cucumber.addCucumberPreprocessorPlugin) {
        await cucumber.addCucumberPreprocessorPlugin(on, config);
      } else {
        throw new Error("Cucumber preprocessor plugin is not available");
      }

      on("file:preprocessor", browserify(options));
      
      return config;
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
