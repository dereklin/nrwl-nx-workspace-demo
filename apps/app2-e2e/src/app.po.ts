import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('nrwl-nx-workspace-demo-root h1')).getText();
  }
}
