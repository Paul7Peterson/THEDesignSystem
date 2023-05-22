

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-number-input.scss?inline';
import { emitEvent } from '~/utils';

export interface ZNumberInputProps {
  number: number;
}

/** */
@customElement('z-number-input')
export class ZNumberInput extends LitElement implements ZNumberInputProps {
  @property({ type: Number, attribute: 'number' })
  number!: number;

  render () {
    return html`
    <input 
      type="number" 
      .value=${this.number}
      @input=${(e: Event) => emitEvent(this, e, 'number')} 
    />
  `;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-number-input': ZNumberInput;
  }
}
