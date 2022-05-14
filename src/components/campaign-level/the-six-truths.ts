import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('the-six-truths')
export class TheSixTruths extends LitElement {

  render() {
    return html`<p>This is the six truths section!</p>`;
  }
}
