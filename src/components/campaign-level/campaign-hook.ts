import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('campaign-hook')
export class CampaignHook extends LitElement {

constructor() {
  super();
}

  render() {    
    return html`<p>This is the campaign hook section!</p>`;
  }
}
