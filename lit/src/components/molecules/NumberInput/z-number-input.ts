

import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-number-input.scss?inline';
import { emitEvent } from '~/utils';
import type { ZNumberInputProps } from './z-number-input.props';
import { FormElement } from '../_shared/FormElement';


/** */
@customElement('z-number-input')
export class ZNumberInput extends FormElement implements ZNumberInputProps {
  @property({ type: Number, attribute: 'number' })
  value!: number;

  render () {
    return html`
    <input 
      type="number" 
      .value=${this.value}
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
