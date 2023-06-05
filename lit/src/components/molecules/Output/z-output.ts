

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-output.scss?inline';
import type { ZOutputProps } from './z-output.props';

import '../Label/z-label';

/** */
@customElement('z-output')
export class ZOutput extends LitElement implements ZOutputProps {
  @property()
  value!: string;
  @property()
  label!: string;

  render () {
    return html`
      <z-label 
        class="z-output" 
        .label=${this.label}
      >
        <output .value="${this.value}"/>
      </z-label>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-output': ZOutput;
  }
}
