/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { lighthouse, pa11y, prepareAudit } = require('cypress-audit');
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');


module.exports = (on, config) => {

  getCompareSnapshotsPlugin(on);

  on('before:browser:launch', (browser = {}, launchOptions) => {
    prepareAudit(launchOptions);
  });
  on('task', {
    lighthouse: lighthouse(),
  });
  
  // on("task", {
  //   lighthouse: lighthouse((lighthouseReport) => {
  //     console.log(lighthouseReport); // raw lighthouse reports
  //   }),
  //   pa11y: pa11y((pa11yReport) => {
  //     console.log(pa11yReport); // raw pa11y reports
  //   }),
  // });

  on('task', {downloadFile})
  on('task', { log (message) { console.log("        ->".concat(message)); return null } });
  allureWriter(on, config);
}

