

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-date.scss?inline';

export interface ZDateProps {

}

/** */
@customElement('z-date')
export class ZDate extends LitElement {

  render () {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-date': ZDate;
  }
}
