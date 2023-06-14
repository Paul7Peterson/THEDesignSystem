

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-tab.scss?inline';
import '../../molecules/Button/z-button';

import type { ZTabProps } from './z-tab.props';

/** */
@customElement('z-tab')
export class ZTab extends LitElement implements ZTabProps {
  @property()
  title!: ZTabProps['title'];

  @property({ type: Boolean })
  disabled?: ZTabProps['disabled'];

  render () {
    return html`<slot />`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-tab': ZTab;
  }
}
