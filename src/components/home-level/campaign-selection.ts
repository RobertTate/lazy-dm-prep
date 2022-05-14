import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('campaign-selection')
export class CampaignSelection extends LitElement {

  render() {
    return html`<p>This is the campagin selection component!</p>`;
  }
}
