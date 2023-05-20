import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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

  static styles = css`
    button.base-btn {
      color: white;
      background: #2a63bf;
      border: 0px transparent;
      border-radius: 0.5rem;
      padding: 0.5rem 1rem;
      box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.125);
      transition: background 250ms ease-in-out;
    }
    button.base-btn:hover {
      cursor: pointer;
      background: #204b91;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'z-button': ZButton;
  }
}
