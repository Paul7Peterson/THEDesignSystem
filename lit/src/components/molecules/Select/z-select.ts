

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-select.scss?inline';

export interface ZSelectProps {

}

/** */
@customElement('z-select')
export class ZSelect extends LitElement {

  render () {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-select': ZSelect;
  }
}
