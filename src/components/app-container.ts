import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { connect } from 'pwa-helpers'

import { store, RootState } from '../redux/store';
import { APP_CONTAINER_ACTIONS as ACA } from '../redux/actions'

@customElement('app-container')
export class AppContainer extends connect(store)(LitElement) {
  static styles = css`
    .app-container {
      height: 100vh;
      border: 2px solid blue;
      box-sizing: border-box;
    }
  `

  @property()
  view: string = '';
  campaignName: string = '';

  constructor() {
    super();
    store.dispatch(ACA.getAppView());
  }

  stateChanged(state: RootState) {
    this.view = state.appView;
    this.campaignName = state.campaignName;
  }

  getViewContents() {
    switch (this.view) {
      case 'Error':
        return html`
          <p>This browser doesn't support the features of this app. Or you're blocking browser feature. Or you're in private browsing mode.</p>
        `;
      case 'Loading':
        return html`
        <h1>LOADING...</h1>
        `
      case 'Campaign':
        return html`
          <campaign-container></campaign-container>
        `;
      case 'Session':
        return html`
          <p>Session Section..</p>
        `;
      default:
        return html`
          <home-container></home-container>
        `;
    }
  }

  render() {
    return html`
      <div class="app-container">
        <p>${this.view} - ${this.campaignName}</p>
        <h1>Lazy DM Prep</h1>
        ${this.getViewContents()}
      </div>
    `;
  }
}
