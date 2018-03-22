import { Given } from 'cucumber';
import { browser } from 'protractor';

Given('I am on {string}',url => {
  return browser.get(url);
});
