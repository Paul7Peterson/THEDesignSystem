

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-card.scss?inline';

export interface ZCardProps {

}

/** */
@customElement('z-card')
export class ZCard extends LitElement {

  render () {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-card': ZCard;
  }
}
