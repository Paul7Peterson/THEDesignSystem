

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ICON } from './IconList';

import SCSS from './z-icon.scss?inline';

export interface ZIconProps {
  /** Icon value */
  icon: keyof typeof ICON;
}

/** ... */
@customElement('z-icon')
export class ZIcon extends LitElement implements ZIconProps {
  /** Icon */
  @property()
  icon!: ZIconProps['icon'];

  render () {
    return html`<i class="z-icon">${ICON[this.icon]}</i>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-icon': ZIcon;
  }
}
