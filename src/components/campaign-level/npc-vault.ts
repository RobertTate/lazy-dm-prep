import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('npc-vault')
export class NPCVault extends LitElement {

  render() {
    return html`<p>This is the npc vault!</p>`;
  }
}
