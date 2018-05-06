/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure } from '@storybook/angular';
import { setOptions } from '@storybook/addon-options';

const req = require.context('../', true, /libs\/.*\.stories.ts$|apps\/.*\.stories.ts$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

setOptions({
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/
});

configure(loadStories, module);
