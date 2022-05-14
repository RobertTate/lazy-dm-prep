import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('magic-items-vault')
export class MagicItemsVault extends LitElement {

  render() {
    return html`<p>This is the magic items vault!</p>`;
  }
}
