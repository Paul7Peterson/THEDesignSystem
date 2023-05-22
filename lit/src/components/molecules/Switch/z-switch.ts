

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-switch.scss?inline';

export interface ZSwitchProps {
  /** */
  value: boolean;
  /** */
  disable?: boolean;
}

/** */
@customElement('z-switch')
export class ZSwitch extends LitElement {
  @property()
  value!: boolean;
  @property()
  disable?: boolean;

  render () {
    return html`
      <div class="z-switch__input">
        <input
          .id="${this.id}"
          type="checkbox"
          ?disabled="${this.disable}"
        >
        <span class="z-switch__slider" />
      </div>
    `;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-switch': ZSwitch;
  }
}
