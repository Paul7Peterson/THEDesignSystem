import { LitElement, unsafeCSS, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-button.scss?inline';
import { emitEvent } from '~/utils';
import type { ZButtonProps } from './z-button.props';

/** */
@customElement('z-button')
export class ZButton extends LitElement implements ZButtonProps {
  @property({ attribute: 'text' })
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
