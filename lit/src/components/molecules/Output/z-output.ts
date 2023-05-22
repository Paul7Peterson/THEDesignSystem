

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-output.scss?inline';

export interface ZOutputProps {

}

/** */
@customElement('z-output')
export class ZOutput extends LitElement {

  render () {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-output': ZOutput;
  }
}
