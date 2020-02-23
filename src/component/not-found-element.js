import { LitElement, html } from 'lit-element';

class NotFoundElement extends LitElement {
  render() {
    return html`404 Page Not Found!</p>`;
  }
}

customElements.define('not-found-element', NotFoundElement);
