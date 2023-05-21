

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-switch.scss?inline';

export interface ZSwitchProps {

}

/** */
@customElement('z-switch')
export class ZSwitch extends LitElement {

  render () {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-switch': ZSwitch;
  }
}
