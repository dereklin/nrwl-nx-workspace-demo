import { Given, When, Then } from 'cucumber';
import { AppPage } from '../../../app.po';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { browser, by, element, ExpectedConditions as until } from 'protractor';

chai.use(chaiAsPromised);

const expect = chai.expect;

let page: AppPage;
page = new AppPage();

Given(/^I am on the main tab$/, () => {
  expect(browser.getTitle()).to.eventually.equal('App1');
  // browser.wait(
  //   until.elementToBeClickable(
  //     element(by.xpath(".//a[contains(@href, '/main') and contains(text(), 'Main') and @routerlinkactive=\"active\"]"))
  //   ),
  //   20000
  // );
  return expect(page.text()).to.eventually.contain('Nrwl');
});
