

import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-select.scss?inline';
import { ArrayConverter } from '~/utils/converters';
import type { ZSelectProps } from './z-select.props';
import { FormElement } from '../_shared/FormElement';

import '../Label/z-label';

/** */
@customElement('z-select')
export class ZSelect extends FormElement implements ZSelectProps {
  @property()
  value!: ZSelectProps['value'];

  @property({ converter: ArrayConverter })
  options!: ZSelectProps['options'];

  render () {
    return html`
    <z-label 
      class="z-select" 
      .label=${this.label}
    >
      <select 
        slot="default"
        .value="${this.value}"
        ?disabled="${this.disabled}"
      >
        ${this.options.map((option) => html`
          <option 
            .value="${option.value}"
            ?disabled="${option.disabled}"
          >
            ${option.text}
          </option>`)}
      </select>
    </z-label>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-select': ZSelect;
  }
}
