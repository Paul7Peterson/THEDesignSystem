import { LitElement, unsafeCSS, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-button.scss?inline';

export interface ZButtonProps {
  /** */
  text?: string;
}

/** */
@customElement('z-button')
export class ZButton extends LitElement {
  @property({ type: String, attribute: 'text' })
  text!: string;

  render () {
    return html`<button class="base-btn">${this.text}</button>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-button': ZButton;
  }
}
