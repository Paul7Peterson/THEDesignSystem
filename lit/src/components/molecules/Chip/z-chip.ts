

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-chip.scss?inline';

export interface ZChipProps {

}

/** */
@customElement('z-chip')
export class ZChip extends LitElement {

  render () {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-chip': ZChip;
  }
}
