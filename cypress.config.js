const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: 'https://www.saucedemo.com',
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',
    chromeWebSecurity: false,
  },
  defaultBrowser: 'chrome',
});
