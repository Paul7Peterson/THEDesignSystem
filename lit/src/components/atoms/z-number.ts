

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-number.scss?inline';

export interface ZNumberProps {

}

/** */
@customElement('z-number')
export class ZNumber extends LitElement {

  render () {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-number': ZNumber;
  }
}
