import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      border: 1px solid black;
      width: 500px;
      height: 300px;
      border-radius: 32px;
      overflow: hidden;
      position: relative;
      background-color: white;
    }

    slot {
      display: block;
      position: absolute;
      width: 100px;
      height: 100px;
      background-color: var(--logo-background-color, white);
      border-radius: 50%;
      inset-block-start: 16px;
      inset-inline-start: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
    }

    ::slotted(img[slot="default"]) {
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }

    header {
      background-color: var(--primary-color, #ff0024);
      color: var(--on-primary-color, white);
      padding: 16px;
      text-align: center;
      text-transform: uppercase;
      font-family: sans-serif;
      letter-spacing: 4px;
    }

    h1,
    h2 {
      margin: 0;
    }

    h1 {
      font-size: 2em;
    }

    h2 {
      margin-block-start: 8px;
      font-weight: normal;
    }

    main {
      display: grid;
      color: var(--on-bg-color, black);
      height: 100%;
    }

    .text {
      font-size: 4em;
      font-family: 'Permanent Marker', cursive;
      text-align: center;
      margin: 0;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'test-lit': TestLit;
  }
}
