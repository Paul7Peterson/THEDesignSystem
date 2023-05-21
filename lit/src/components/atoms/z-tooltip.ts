

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-tooltip.scss?inline';

export interface ZTooltipProps {

}

/** */
@customElement('z-tooltip')
export class ZTooltip extends LitElement {

  render () {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-tooltip': ZTooltip;
  }
}
