

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-checkbox.scss?inline';
import { emitEvent } from '~/utils';
import type { ZCheckboxProps } from './z-checkbox.props';


/** */
@customElement('z-checkbox')
export class ZCheckbox extends LitElement implements ZCheckboxProps {
  @property({ type: Boolean, attribute: 'value' })
  value!: boolean;
  @property({ type: Boolean, attribute: 'disabled' })
  disabled?: boolean;

  render () {
    return html`
    <div class="z-checkbox">
      <div class="z-checkbox__input">
        <input
          .id="${this.id}"
          type="checkbox"
          ?disabled="${this.disabled}"
          @change=${(e: Event) => emitEvent(this, e, 'value')} 
        >
        <span class="z-checkbox__checkmark bevel" />
      </div>
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
