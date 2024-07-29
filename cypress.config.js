const { defineConfig } = require('cypress');
const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  projectId: 'c9zkvb',
  e2e: {
    baseUrl: "https://conduit.realworld.how",
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      try {
        console.log('Setting up cucumber preprocessor...');
        await cucumber.addCucumberPreprocessorPlugin(on, config);
        console.log('Cucumber preprocessor setup completed.');
      } catch (error) {
        console.error('Cucumber preprocessor plugin is not available:', error);
        throw error;
      }

      const options = browserify.defaultOptions;
      on('file:preprocessor', browserify(options));
      return config;
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'mochawesome-report',
    overwrite: false,
    html: true,
    json: true,
  }
});
