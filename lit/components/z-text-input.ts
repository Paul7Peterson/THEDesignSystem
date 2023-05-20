import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { emitEvent } from '../utils';

export interface ZTextInputProps {
  /** Text model */
  text: string;
}

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
        @input=${(e: Event) => emitEvent(this, e)} 
      />
    `;
  }

  static styles = css`
    input {
      color: var(--text-color, yellow);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'z-text-input': ZTextInput;
  }
}
