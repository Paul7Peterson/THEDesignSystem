

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-spinner.scss?inline';
import type { ZSpinnerProps } from './z-spinner.props';

/** */
@customElement('z-spinner')
export class ZSpinner extends LitElement implements ZSpinnerProps {

  render () {
    return html`<div class="z-spinner" />`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-spinner': ZSpinner;
  }
}
