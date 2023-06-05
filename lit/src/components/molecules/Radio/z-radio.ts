

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
  @property()
  value!: string;

  @property()
  name!: string;

  @property({ converter: ArrayConverter })
  options!: ZRadioProps['options'];

  render () {
    return html`
      <z-label 
        class="z-switch" 
        .label=${this.label}
      >
        <div slot="default">
          ${this.options.map((option) => html`
          <div class="z-radio__input">
            <input
              type="radio"
              .name="${this.name}"
              .value="${option.value}"
              ?disabled="${option.disabled}"
              @input="onChange"
            >
            <span class="z-radio__checkmark" />
          </div>`)}
        </div>
      </z-label>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-radio': ZRadio;
  }
}
