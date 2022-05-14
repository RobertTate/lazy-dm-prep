import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-container')
export class HomeContainer extends LitElement {
  
  render() {
    return html`
      <campaign-creator></campaign-creator>
      <campaign-selection></campaign-selection>
      <about-section></about-section>
    `;
  }
}
