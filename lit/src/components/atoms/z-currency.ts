
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-currency.scss?inline';

export interface ZCurrencyProps {

}

/** */
@customElement('z-currency')
export class ZCurrency extends LitElement {

  render () {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-currency': ZCurrency;
  }
}
