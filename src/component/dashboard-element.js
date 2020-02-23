import { LitElement, html } from 'lit-element';

import { connect, store, } from '../redux/index.js';

class DashboardElement extends connect(store)(LitElement) {
  static get properties() {
    return { name: { type: String } };
  }

  stateChanged(state) {
    this.userInfo = state.userInfo;
  }


  render() {
    const {firstname, lastname} = this.userInfo
    return html `<p>Hello, ${firstname} ${lastname}!</p>`;
  }
}

customElements.define('dashboard-element', DashboardElement);
