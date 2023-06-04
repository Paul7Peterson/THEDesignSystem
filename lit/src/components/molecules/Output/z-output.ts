

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-output.scss?inline';
import type { ZOutputProps } from './z-output.props';

/** */
@customElement('z-output')
export class ZOutput extends LitElement implements ZOutputProps {
  @property()
  value!: string;

  render () {
    return html`<output .value="${this.value}"/>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-output': ZOutput;
  }
}
