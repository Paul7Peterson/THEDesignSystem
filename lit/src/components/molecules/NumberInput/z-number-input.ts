

import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-number-input.scss?inline';
import type { ZNumberInputProps } from './z-number-input.props';
import { FormElement } from '../_shared/FormElement';

import '../Label/z-label';

/** */
@customElement('z-number-input')
export class ZNumberInput extends FormElement implements ZNumberInputProps {
  @property({ type: Number, reflect: true })
  value!: number;

  @property({ type: Number })
  step?: number;

  render () {
    return html`
      <z-label 
        class="z-number-input" 
        .label=${this.label}
      >
        <input 
          type="number" 
          .value=${this.value}
          .step="${this.step}"
          ?disabled="${this.disabled}"
          @input=${this.#onInput} 
        />
      </z-label>`;
  }

  #onInput (e: InputEvent): void {
    const { valueAsNumber } = (e.target as HTMLInputElement);
    this.value = isNaN(valueAsNumber) ? 0 : valueAsNumber;

    this.onChange();
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-number-input': ZNumberInput;
  }
}
