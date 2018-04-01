import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { After, Before, BeforeAll, setDefaultTimeout, Status } from 'cucumber';
import { browser, by, element, ExpectedConditions as until } from 'protractor';

const expect = chai.expect;

/* tslint:disable */
const { config } = require('../../../../../protractor.conf.js');
/* tslint:ensable */

BeforeAll({ timeout: 20 * 1000 } /* this timeout is for this hook */, callback => {
  setDefaultTimeout(30 * 1000); /* this timeout is for the steps*/
  chai.use(chaiAsPromised);
  callback();
});

Before({ timeout: 60 * 1000 } /* this timeout is for this hook */, () => {
  if (browser.params.proxy) {
    browser.get('');
    console.log('beforeEach');
    console.log('browser.params.proxy', browser.params.proxy);
    console.log('browser.params.proxyData', browser.params.proxyData);
    return browser.params.proxy.doHAR(browser.params.proxyData.port, 'test');
  }
  return browser.get('');
});

After(async function(scenario) {
  if (browser.params.proxy) {
    browser.params.proxy.getHAR(browser.params.proxyData.port, (err, harData) => {
      console.log('harData', harData);
    });
  }
  // not using arrow function because this is needed
  if (scenario.result.status === Status.FAILED) {
    // screenShot is a base-64 encoded PNG
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, 'image/png');
  }
});
