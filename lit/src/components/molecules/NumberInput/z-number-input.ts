

import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-number-input.scss?inline';
import { emitEvent } from '~/utils';
import type { ZNumberInputProps } from './z-number-input.props';
import { FormElement } from '../_shared/FormElement';

import '../Label/z-label';

/** */
@customElement('z-number-input')
export class ZNumberInput extends FormElement implements ZNumberInputProps {
  @property({ type: Number })
  value!: number;

  render () {
    return html`
      <z-label 
        class="z-number-input" 
        .label=${this.label}
      >
        <input 
          type="number" 
          slot="default"
          .value=${this.value}
          @input=${(e: Event) => emitEvent(this, e, 'number')} 
        />
      </z-label>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-number-input': ZNumberInput;
  }
}
