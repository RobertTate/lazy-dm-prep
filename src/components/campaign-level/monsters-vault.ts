import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('monsters-vault')
export class MonstersVault extends LitElement {

  render() {
    return html`<p>This is the monsters vault!</p>`;
  }
}
