

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-icon.scss?inline';

export interface ZIconProps {

}

/** ... */
@customElement('z-icon')
export class ZIcon extends LitElement {
  /** Icon */
  @property()
  icon!: string;

  render () {
    return html`<i class="z-icon"/>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-icon': ZIcon;
  }
}
