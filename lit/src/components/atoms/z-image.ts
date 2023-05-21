

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-image.scss?inline';

export interface ZImageProps {

}

/** */
@customElement('z-image')
export class ZImage extends LitElement {

  render () {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-image': ZImage;
  }
}
