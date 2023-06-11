

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ICON } from './IconList';

import SCSS from './z-icon.scss?inline';
import type { ZIconProps } from './z-icon.props';


/** ... */
@customElement('z-icon')
export class ZIcon extends LitElement implements ZIconProps {
  /** Icon */
  @property({ type: String, attribute: 'icon' })
  icon!: ZIconProps['icon'];

  render () {
    const icon = ICON[this.icon];

    return html`<i class="z-icon">${icon}</i>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-icon': ZIcon;
  }
}
