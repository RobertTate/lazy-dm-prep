import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('campaign-container')
export class CampaignContainer extends LitElement {
  
  render() {
    return html`
      <character-section></character-section>
      <campaign-hook></campaign-hook>
      <the-six-truths></the-six-truths>
      <the-fronts></the-fronts>
      <npc-vault></npc-vault>
      <locations-vault></locations-vault>
      <magic-items-vault></magic-items-vault>
      <monsters-vault></monsters-vault>
      <secrets-vault></secrets-vault>
    `;
  }
}
