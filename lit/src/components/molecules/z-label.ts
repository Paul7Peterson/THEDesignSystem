

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-label.scss?inline';

export interface ZLabelProps {

}

/** */
@customElement('z-label')
export class ZLabel extends LitElement {

  render () {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-label': ZLabel;
  }
}
