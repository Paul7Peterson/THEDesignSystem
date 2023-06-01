import { LitElement, unsafeCSS, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-button.scss?inline';
import { emitEvent } from '~/utils';

export interface ZButtonProps {
  /** Text of the button */
  text?: string;
}

/** */
@customElement('z-button')
export class ZButton extends LitElement {
  @property({ type: String, attribute: 'text' })
  text!: string;

  render () {
    return html`
      <button 
        class="base-btn"
        @click=${(e: Event) => emitEvent(this, e, 'click')} 
      >
        ${this.text}
      </button>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-button': ZButton;
  }
}
