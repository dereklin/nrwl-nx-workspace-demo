// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const Proxy = require('browsermob-proxy').Proxy,
  Q = require('q');

const { SpecReporter } = require('jasmine-spec-reporter');
const { getAppDirectoryUsingCliConfig } = require('@nrwl/schematics/src/utils/cli-config-utils');
const appDir = getAppDirectoryUsingCliConfig();

const useBrowsermobProxy = false;

exports.config = {
  allScriptsTimeout: 11000,
  specs: [appDir + '/e2e/**/*.e2e-spec.ts'],
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
      args: ['--window-size=1920,1080', '--disable-gpu']
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: appDir + '/e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

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
  }
};
