import { LitElement, unsafeCSS, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-button.scss?inline';
import { emitFromInput } from '~/utils';
import type { ZButtonProps } from './z-button.props';

/** */
@customElement('z-button')
export class ZButton extends LitElement implements ZButtonProps {
  @property()
  text!: string;

  @property({ type: Boolean })
  disabled?: boolean;

  render () {
    return html`
      <button 
        .id="${this.id}"
        class="base-btn"
        ?disabled="${this.disabled}"
        @click=${(e: Event) => emitFromInput(this, e, 'click')} 
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
