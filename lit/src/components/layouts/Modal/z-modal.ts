

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-modal.scss?inline';
import type { ZModalProps } from './z-modal.props';

/** */
@customElement('z-modal')
export class ZModal extends LitElement implements ZModalProps {

  render () {
    return html``;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-modal': ZModal;
  }
}
