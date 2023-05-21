

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-spinner.scss?inline';

export interface ZSpinnerProps {

}

/** */
@customElement('z-spinner')
export class ZSpinner extends LitElement {

  render () {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-spinner': ZSpinner;
  }
}
