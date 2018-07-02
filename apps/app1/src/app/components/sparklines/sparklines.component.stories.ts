import { storiesOf } from '@storybook/angular';
import { SparklinesComponent } from './sparklines.component';

// tslint:disable
storiesOf('App1|Components/Sparklines', module).add('basic', () => ({
  moduleMetadata: {
    imports: [],
    declarations: []
  },
  component: SparklinesComponent,
  props: {
    mySvgBase64: `CiAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPgogIDxwb2x5bGluZQogICAgIGZpbGw9Im5vbmUiCiAgICAgc3Ryb2tlPSIjMDA3NGQ5IgogICAgIHN0cm9rZS13aWR0aD0iMiIKICAgICBwb2ludHM9IgogICAgICAgMDAsMTIwCiAgICAgICAyMCw2MAogICAgICAgNDAsODAKICAgICAgIDYwLDIwCiAgICAgICA4MCw4MAogICAgICAgMTAwLDgwCiAgICAgICAxMjAsNjAKICAgICAgIDE0MCwxMDAKICAgICAgIDE2MCw5MAogICAgICAgMTgwLDgwCiAgICAgICAyMDAsIDExMAogICAgICAgMjIwLCAxMAogICAgICAgMjQwLCA3MAogICAgICAgMjYwLCAxMDAKICAgICAgIDI4MCwgMTAwCiAgICAgICAzMDAsIDQwCiAgICAgICAzMjAsIDAKICAgICAgIDM0MCwgMTAwCiAgICAgICAzNjAsIDEwMAogICAgICAgMzgwLCAxMjAKICAgICAgIDQwMCwgNjAKICAgICAgIDQyMCwgNzAKICAgICAgIDQ0MCwgODAKICAgICAiCiAgIC8+Cjwvc3ZnPgogIA==`
  }
}));
