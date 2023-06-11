

import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-checkbox.scss?inline';
import type { ZCheckboxProps } from './z-checkbox.props';
import { FormElement } from '../_shared/FormElement';

import '../Label/z-label';


/** */
@customElement('z-checkbox')
export class ZCheckbox extends FormElement implements ZCheckboxProps {
  @property({ type: Boolean })
  value!: boolean;

  render () {
    return html`
      <z-label 
        class="z-checkbox" 
        .label=${this.label}
      >
        <div class="z-checkbox__input">
          <input
            .id="${this.id}"
            type="checkbox"
            ?disabled="${this.disabled}"
            @change=${this.#onInput} 
          >
          <span class="z-checkbox__checkmark bevel" />
        </div>
      </z-label>
    `;
  }

  #onInput (e: InputEvent): void {
    const { checked } = (e.target as HTMLInputElement);
    this.value = checked;

    this.onChange();
  }


  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-checkbox': ZCheckbox;
  }
}
