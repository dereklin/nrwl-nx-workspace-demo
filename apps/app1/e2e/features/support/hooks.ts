import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { After, Before, BeforeAll, setDefaultTimeout, Status } from 'cucumber';
import { browser, by, element, ExpectedConditions as until } from 'protractor';

chai.use(chaiAsPromised);

const expect = chai.expect;

/* tslint:disable */
const { config } = require('../../../../../protractor.conf.js');
/* tslint:ensable */

BeforeAll({ timeout: 20 * 1000 } /* this timeout is for this hook */, callback => {
  setDefaultTimeout(30 * 1000); /* this timeout is for the steps*/
  callback();
});

Before({ timeout: 60 * 1000 } /* this timeout is for this hook */, () => {
  browser.get('');
  expect(browser.getTitle()).to.eventually.equal('App1');
  return browser.wait(until.invisibilityOf(element(by.css('.initialization'))), 5000);
});

After(async function(scenario) {
  // not using arrow function because this is needed
  if (scenario.result.status === Status.FAILED) {
    // screenShot is a base-64 encoded PNG
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, 'image/png');
  }
});
