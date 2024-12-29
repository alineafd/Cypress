const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "efvqay",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome', 
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
      timestamp: "mmddyyyy_HHMMss" }
  },
});
