import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('app1 App', () => {
  let page: AppPage;

  beforeEach(done => {
    page = new AppPage();
    console.log('beforeEach');
    console.log('browser.params.proxy', browser.params.proxy);
    console.log('browser.params.proxyData', browser.params.proxyData);
    browser.params.proxy.startHAR(browser.params.proxyData.port, 'test', done);
  });

  afterEach(done => {
    console.log('afterEach');
    browser.params.proxy.getHAR(browser.params.proxyData.port, (err, harData) => {
      console.log('harData', harData);
      done();
    });
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.text()).toContain('Welcome');
  });

  it('should greet the named user', () => {
    console.log('it');

    // browser.get('https://angularjs.org');

    // element(by.model('yourName')).sendKeys('Julie');

    // var greeting = element(by.binding('yourName'));

    // expect(greeting.getText()).toEqual('Hello Julie!');
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();

    expect<any>(element(by.binding('latest')).getText()).
        toEqual('3');
  });

});
