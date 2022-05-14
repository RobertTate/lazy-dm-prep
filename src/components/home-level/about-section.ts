import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('about-section')
export class AboutSection extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`<p>This is an about Section!</p>`;
  }
}
