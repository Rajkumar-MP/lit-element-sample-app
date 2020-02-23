import { LitElement, html } from 'lit-element';
import { Router } from '@vaadin/router';

import { connect, store, updateStore } from '../redux/index.js';

class LoginElement extends connect(store)(LitElement) {
  static get properties() {
    return { 
      name: { type: String },
    };
  }
  constructor() {
    super();
    this.name = 'World';
  }

  render() {
    return html`
      <form onsubmit = "event.preventDefault();">
          First name:<br><input type="text" name="firstname"><br>
          Last name:<br><input type="text" name="lastname"><br>
          <br><input type="submit" value="Submit" @click=${this.submitLogin}>
      </form>
    `;
  }

  submitLogin(evt) {
    console.log('test');
    this.updateData();
    Router.go('/dasbhboard');
  }

  updateData() {
    const firstname = this.shadowRoot.querySelector("[name='firstname']").value;
    const lastname = this.shadowRoot.querySelector("[name='lastname']").value;
    store.dispatch(updateStore.addUserInfo({
      firstname, lastname
    }));
  }
}

customElements.define('login-element', LoginElement);
