

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-label.scss?inline';
import type { ZLabelProps } from './z-label.props';



/** Label */
@customElement('z-label')
export class ZLabel extends LitElement implements ZLabelProps {
  @property({ type: String, attribute: 'label' })
  label!: string;

  render () {
    return html`<label>${this.label}</label>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-label': ZLabel;
  }
}
