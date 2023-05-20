import { LitElement, unsafeCSS, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import CSS from './z-button.css?inline';

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

  static styles = unsafeCSS(CSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-button': ZButton;
  }
}
