import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-test-lit.scss?inline';

export interface ZTestLitProps {
  /** Text input */
  text: string;
  /** Able logo */
  hasLogo?: boolean;
}

/** */
@customElement('z-test-lit')
export class ZTestLit extends LitElement implements ZTestLitProps {
  @property()
  header: string = 'Hello';

  @property({ type: String, attribute: 'sub-header' })
  subHeader = 'My name is:';

  @property({ type: Boolean, attribute: 'has-logo' })
  hasLogo = false;

  @property({ type: String, attribute: 'text' })
  text!: string;

  render () {
    return html`
      <header>
        <h1>${this.header}</h1>
        <h2>${this.subHeader}</h2>
      </header>
      ${this.hasLogo
        ? html`<slot name="default" part="logo-bg"/>`
        : ''
      }
      <main>
        <p class="text">${this.text}</p>
      </main>
    `;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-test-lit': ZTestLit;
  }
}
