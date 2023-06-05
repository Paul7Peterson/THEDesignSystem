

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-radio.scss?inline';
import type { ZRadioProps } from './z-radio.props';
import { ArrayConverter } from '~/utils/converters';

/** */
@customElement('z-radio')
export class ZRadio extends LitElement implements ZRadioProps {
  @property()
  value!: string;

  @property()
  name!: string;

  @property({ converter: ArrayConverter })
  options!: ZRadioProps['options'];

  render () {
    return html`
      <div class="z-radio">
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
      </div>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-radio': ZRadio;
  }
}
