import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '~/utils';

import SCSS from './z-text-input.scss?inline';

/** Text input props */
export interface ZTextInputProps {
  /** Text model */
  text: string;
}

/** Text input emits */
export interface ZTextInputEmits {
  'change:text'?: (text: CustomEvent<string>) => void;
}

/** */
@customElement('z-text-input')
export class ZTextInput extends LitElement {
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
