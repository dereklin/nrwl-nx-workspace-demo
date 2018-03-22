import { Then } from 'cucumber';
import { element, by } from 'protractor';
import * as chai from 'chai';
const expect = chai.expect;

Then('I should see {string} in the {string} field', (text, fieldName) => {
  const greeting = element(by.binding(fieldName));

  expect(greeting.getText()).to.eventually.equal(text);
});
