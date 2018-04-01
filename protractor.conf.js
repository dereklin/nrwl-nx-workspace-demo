// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const Proxy = require('browsermob-proxy').Proxy,
  Q = require('q');
const fs = require('fs');
const mkdirp = require('mkdirp');
const reporter = require('cucumber-html-reporter');
const { getAppDirectoryUsingCliConfig } = require('@nrwl/schematics/src/utils/cli-config-utils');
const appDir = getAppDirectoryUsingCliConfig();

const e2eReportsFolder = appDir + '/e2e-reports';

function createDirectory(dir) {
  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir);
  }
}

const options = {
  theme: 'bootstrap',
  jsonFile: `${appDir}/e2e-reports/results.json`,
  output: `${appDir}/e2e-reports/cucumber_report.html`,
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {}
};

const useBrowsermobProxy = false;

exports.config = {
  allScriptsTimeout: 11000,
  specs: [appDir + '/e2e/features/**/*.feature'],
  capabilities: {
    browserName: 'chrome',
    proxy: useBrowsermobProxy
      ? {
          proxyType: 'manual',
          httpProxy: 'localhost:8888',
          sslProxy: 'localhost:8888'
        }
      : {
          proxyType: 'direct'
        },
    chromeOptions: {
      // binary: 'C:/Program Files (x86)/Google Chrome (Local)/chrome.exe',
      args: [
        '--window-size=1920,1080',
        '--disable-gpu'
        // '--headless'
      ]
    }
  },
  directConnect: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [appDir + '/e2e/features/step_definitions/**/*.ts', appDir + '/e2e/features/support/*.ts'],
    compiler: 'ts:ts-node/register',
    format: `json:${appDir}/e2e-reports/results.json`,
    dryRun: false,
    tags: '@TestScenario',
    keepAlive: false
  },
  onPrepare() {
    createDirectory(e2eReportsFolder);
    if (useBrowsermobProxy) {
      var proxy = new Proxy();

      return Q.ninvoke(proxy, 'start', 8888).then(
        function(data) {
          console.log('data', data);
          console.log('arguments', arguments);
          browser.params.proxy = proxy;
          browser.params.proxyData = data;
          return data;
        },
        function() {
          console.log('start failed');
        }
      );
    }
  },
  beforeLaunch: () => {
    require('ts-node').register({
      project: appDir + '/e2e/tsconfig.e2e.json'
    });
  },
  onComplete() {
    reporter.generate(options);
    // return Q.ninvoke(browser.params.proxy, 'stop', browser.params.proxy);
  }
};
