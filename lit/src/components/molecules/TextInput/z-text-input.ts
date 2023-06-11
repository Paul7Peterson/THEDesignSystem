import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitFromInput } from '~/utils';

import SCSS from './z-text-input.scss?inline';
import type { ZTextInputProps } from './z-text-input.props';
import { FormElement } from '../_shared/FormElement';

import '../Label/z-label';

/** */
@customElement('z-text-input')
export class ZTextInput extends FormElement implements ZTextInputProps {
  @property()
  value!: string;

  render () {
    return html`
    <z-label 
      class="z-text-input" 
      .label=${this.label}
    >
      <input 
        type="text" 
        slot="default"
        .value=${this.value}
        ?disabled="${this.disabled}"
        @input=${(e: Event) => emitFromInput(this, e, 'text')} 
      />
    </z-label>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-text-input': ZTextInput;
  }
}
