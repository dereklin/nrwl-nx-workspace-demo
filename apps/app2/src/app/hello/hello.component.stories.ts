import { NO_ERRORS_SCHEMA } from '@angular/core';
import { storiesOf } from '@storybook/angular';
import { HelloComponent } from './hello.component';

storiesOf('LIBS|FancyBox/HelloComponent', module).add('This one works', () => ({
  moduleMetadata: {
    imports: [],
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [HelloComponent],
    providers: []
  },
  props: {},
  styles: [
    `


    `
  ],
  template: `

    <nrwl-nx-workspace-demo-hello>
              </nrwl-nx-workspace-demo-hello>
              `
}));
