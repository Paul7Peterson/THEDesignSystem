

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-label.scss?inline';
import type { ZLabelProps } from './z-label.props';



/** Label */
@customElement('z-label')
export class ZLabel extends LitElement implements ZLabelProps {
  @property()
  label!: string;

  render () {
    return html`
      <label class="z-label">
        <span 
          class="z-label__text"
          style="grid-area: label"
        >
          <slot name="label">${this.label}</slot>
        </span>

        <div style="grid-area: input">
          <slot/>
        </div>
      </label>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-label': ZLabel;
  }
}
