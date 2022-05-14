import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';

import { store } from '../../redux/store';
import { APP_CONTAINER_ACTIONS as ACA } from '../../redux/actions';

@customElement('campaign-creator')
export class CampaignCreator extends LitElement {
  static styles = css`
    .campaign-creator {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border: 2px solid blue;
    }
    .campaign-creator-form-input {
      margin-bottom: 1rem;
    }
  `;

  @query('#campaignName')
  campaignName!: HTMLInputElement;

  addCampaign(event: Event) {
    event.preventDefault();
    console.dir(this.campaignName.value)
    console.log('Adding a campaign...')
    store.dispatch(ACA.addCampaign(event));
  }

  render() {
    return html`
      <form class="campaign-creator" @submit=${this.addCampaign}>
        <div class="campaign-creator-form-input">
          <label for="campaignName">Enter your campaign name: </label>
          <input type="text" name="campaignName" id="campaignName" required>
        </div>
        <input type="submit" value="Add Campaign">
      </form>
    `;
  }
}
