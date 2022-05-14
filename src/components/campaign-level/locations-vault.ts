import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('locations-vault')
export class LocationsVault extends LitElement {

  render() {
    return html`<p>This is the locations vault!</p>`;
  }
}
