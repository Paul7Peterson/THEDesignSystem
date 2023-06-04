import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '~/utils';

import SCSS from './z-text-input.scss?inline';
import type { ZTextInputProps } from './z-text-input.props';


/** */
@customElement('z-text-input')
export class ZTextInput extends LitElement implements ZTextInputProps {
  @property({ type: String, attribute: 'text' })
  text!: string;

  render () {
    return html`
      <input 
        type="text" 
        .value=${this.text}
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
