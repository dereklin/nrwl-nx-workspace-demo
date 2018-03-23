// https://github.com/zzo/browsermob-node

import { Given } from 'cucumber';
import { browser, element, by } from 'protractor';
import * as chai from 'chai';

const expect = chai.expect;

Given('I am on {string}',url => {
  // console.log('beforeEach');
  // console.log('browser.params.proxy', browser.params.proxy);
  // console.log('browser.params.proxyData', browser.params.proxyData);
  // browser.params.proxy.doHAR(browser.params.proxyData.port, 'test');

  console.log('it');

  // browser.get('https://angularjs.org');

  // element(by.model('yourName')).sendKeys('Julie');

  // var greeting = element(by.binding('yourName'));

  // expect(greeting.getText()).toEqual('Hello Julie!');
  browser.get('http://juliemr.github.io/protractor-demo/');
  element(by.model('first')).sendKeys(1);
  element(by.model('second')).sendKeys(2);

  element(by.id('gobutton')).click();
  // browser.params.proxy.getHAR(browser.params.proxyData.port, (err, harData) => {
  //   console.log('harData', harData);
  // });

  return expect<any>(element(by.binding('latest')).getText()).
      to.eventually.equal('3');
});
