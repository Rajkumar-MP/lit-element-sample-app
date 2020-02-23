import {
  html, fixture, expect, fixtureCleanup,
} from '@open-wc/testing';

import '../src/component/login-element.js';
import '../src/component/dashboard-element.js';
import '../src/component/not-found-element.js';

describe('main', () => {
  afterEach(() => {
    fixtureCleanup();
  });
  it('loginelement', async () => {
    const el = await fixture(html`<login-element></login-element>`);
    expect(el.tagName).to.equal('LOGIN-ELEMENT');
    console.log('console:');
  });
  it('dashboardElement', async () => {
    const el = await fixture(html`<dashboard-element></dashboard-element>`);
    expect(el.tagName).to.equal('DASHBOARD-ELEMENT');
    console.log('console:');
  });
  it('notfoundelement', async () => {
    const el = await fixture(html`<not-found-element></not-found-element>`);
    expect(el.tagName).to.equal('NOT-FOUND-ELEMENT');
    console.log('console:');
  });
});
