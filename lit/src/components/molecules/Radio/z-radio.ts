

import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-radio.scss?inline';
import type { ZRadioProps } from './z-radio.props';
import { ArrayConverter } from '~/utils/converters';

import '../Label/z-label';
import { FormElement } from '../_shared/FormElement';

/** */
@customElement('z-radio')
export class ZRadio extends FormElement implements ZRadioProps {
  @property({ reflect: true })
  value!: string;

  @property()
  name!: string;

  @property({ converter: ArrayConverter })
  options!: ZRadioProps['options'];

  render () {
    const options = this.options.map((option) => html`
      <div class="z-radio__input">
        <input
          type="radio"
          .name="${this.name}"
          .value="${option.value}"
          ?disabled="${this.disabled || option.disabled}"
          @input=${this.#onInput}
        >
        <span class="z-radio__checkmark" />
      </div>`);

    return html`
      <z-label 
        class="z-radio" 
        .label=${this.label}
      >
        <div>
          ${options}
        </div>
      </z-label>`;
  }

  #onInput (e: InputEvent): void {
    const { value } = (e.target as HTMLInputElement);
    this.value = value;

    this.onChange();
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-radio': ZRadio;
  }
}
