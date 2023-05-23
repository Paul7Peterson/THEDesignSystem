
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-currency.scss?inline';

export interface ZCurrencyProps {
  /** */
  value: number;
  /** */
  currency?: 'EUR' | 'USD';
  /** */
  locale?: string;
}

/** */
@customElement('z-currency')
export class ZCurrency extends LitElement implements ZCurrencyProps {

  @property()
  value: number = 0;
  @property()
  currency: Required<ZCurrencyProps['currency']> = 'EUR';
  @property()
  locale: Required<ZCurrencyProps['locale']> = 'en';

  get parsedValue (): string {
    return this.value.toLocaleString(this.locale, {
      currency: this.currency,
      style: 'currency',
    });
  }

  render () {
    return html`
    <data
      class="z-currency"
      .value="${this.value}"
      .content="${this.value}"
      itemprop="price"
    >
      ${this.parsedValue}
    </data>

    <meta
      itemprop="priceCurrency"
      .content="${this.currency}"
    >
    `;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-currency': ZCurrency;
  }
}
