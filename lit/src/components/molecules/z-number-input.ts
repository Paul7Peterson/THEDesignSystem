

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-number-input.scss?inline';

export interface ZNumberInputProps {

}

/** */
@customElement('z-number-input')
export class ZNumberInput extends LitElement {

  render () {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-number-input': ZNumberInput;
  }
}
