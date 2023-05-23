

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-number.scss?inline';

export interface ZNumberProps {
  /** */
  value: number;
  /** */
  locale?: string;
}

/** */
@customElement('z-number')
export class ZNumber extends LitElement implements ZNumberProps {
  @property()
  value: number = 0;
  @property()
  locale: Required<ZNumberProps>['locale'] = 'en';

  get parsedValue (): string {
    return this.value.toLocaleString(this.locale);
  }

  render () {
    return html`
    <data
      class="z-number"
      .value="${this.value}"
    >
      ${this.parsedValue}
    </data>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-number': ZNumber;
  }
}
