import { When } from 'cucumber';
import * as chai from 'chai';
const expect = chai.expect;
import { AppPage } from '../../../app.po';

const page = new AppPage();

When('I open the site', () => {
  return expect(page.text()).to.eventually.contain('Welcome');
});
