import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '~/utils';

import SCSS from './z-text-input.scss?inline';
import type { ZTextInputProps } from './z-text-input.props';
import { FormElement } from '../_shared/FormElement';


/** */
@customElement('z-text-input')
export class ZTextInput extends FormElement implements ZTextInputProps {
  @property({ type: String, attribute: 'text' })
  value!: string;

  render () {
    return html`
      <input 
        type="text" 
        .value=${this.value}
        @input=${(e: Event) => emitEvent(this, e, 'text')} 
      />
    `;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-text-input': ZTextInput;
  }
}
