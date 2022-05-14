import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('secrets-vault')
export class SecretsVault extends LitElement {

  render() {
    return html`<p>This is the secrets vault!</p>`;
  }
}
