// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
// const fs = require("fs");
// const mkdirp = require("mkdirp");
// const reporter = require('cucumber-html-reporter');
// const { getAppDirectoryUsingCliConfig } = require('@nrwl/schematics/src/utils/cli-config-utils');
// const appDir = getAppDirectoryUsingCliConfig();

// const e2eReportsFolder = appDir + "/e2e-reports";

// function createDirectory(dir) {
//   if (!fs.existsSync(dir)) {
//       mkdirp.sync(dir);
//   }
// }

const appDir = 'apps/app1/';

// const options = {
//   theme: 'bootstrap',
//   jsonFile: `${appDir}/e2e-reports/results.json`,
//   output: `${appDir}/e2e-reports/cucumber_report.html`,
//   reportSuiteAsScenarios: true,
//   launchReport: true,
//   metadata: {
//   }
// };

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './apps/app1/e2e/features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./apps/app1/e2e/features/step_definitions/**/*.ts', './apps/app1/e2e/features/support/*.ts'],
    tags: [],
    strict: true,
    dryRun: false,
    compiler: [ 'ts:ts-node']
  },
  onPrepare: () => {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  },
  beforeLaunch: () => {
    require('ts-node').register({
      project: 'apps/app1/e2e/tsconfig.e2e.json'
    });
  }
};
