import {
  storiesOf,
  html,
} from '@open-wc/demoing-storybook';

import '../../app.js'
import '../src/component/login-element.js';
import '../src/component/dashboard-element.js';

storiesOf('App', module)
  .add('Home', () => html`<my-app></my-app>`);

storiesOf('Component', module)
  .add('Login', () => html`<login-element></login-element>`)
  .add('Dashboard', () => html`<dashboard-element></dashboard-element>`);
