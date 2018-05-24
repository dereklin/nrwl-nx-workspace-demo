import { When } from 'cucumber';

import { element, by } from 'protractor';

When('I enter {string} in {string} field', (name, fieldName) => {
  return element(by.model('yourName')).sendKeys('Julie');
});
