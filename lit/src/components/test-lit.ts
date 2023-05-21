import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './test-lit.scss?inline';

export interface TestLitProps {
  /** Text input */
  text: string;
  /** Able logo */
  hasLogo?: boolean;
}

/** */
@customElement('test-lit')
export class TestLit extends LitElement implements TestLitProps {
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
    'test-lit': TestLit;
  }
}
