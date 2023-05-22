

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-checkbox.scss?inline';

export interface ZCheckboxProps {
  value: boolean;
  disabled?: boolean;
}

/** */
@customElement('z-checkbox')
export class ZCheckbox extends LitElement implements ZCheckboxProps {
  @property({ type: Boolean, attribute: 'value' })
  value!: boolean;
  @property({ type: Boolean, attribute: 'disabled' })
  disabled?: boolean;

  render () {
    return html`
    <div class="app-checkbox__input">
      <input
        :id="id"
        type="checkbox"
        ?disabled="${this.disabled}"
        @change="onChange"
      >
      <span class="app-checkbox__checkmark bevel" />
    </div>
    `;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-checkbox': ZCheckbox;
  }
}
