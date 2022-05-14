import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('the-fronts')
export class TheFronts extends LitElement {

  render() {
    return html`<p>This is the fronts section!</p>`;
  }
}
