import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('character-section')
export class CharacterSection extends LitElement {

  render() {
    return html`<p>This is the character section!</p>`;
  }
}
