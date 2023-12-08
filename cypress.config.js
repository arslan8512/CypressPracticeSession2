const { defineConfig } = require("cypress");
/// <reference types="cypress"/>
module.exports = {
  projectId: '8fdw6v',
  viewportHeight:800,
  viewportWidth:1280,
  watchForFileChanges: false,
  defaulttimeout:500,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth",
    //baseUrl: "https://spreadlee-admin.codesorbit.net/",
  },
};
