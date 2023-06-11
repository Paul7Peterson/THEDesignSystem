

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-chip.scss?inline';
import type { ZChipProps } from './z-chip.props';


/** */
@customElement('z-chip')
export class ZChip extends LitElement implements ZChipProps {
  @property()
  text?: string;

  render () {
    return html`
      ${this.text}
    `;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-chip': ZChip;
  }
}
