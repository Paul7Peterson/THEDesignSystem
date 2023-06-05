

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-tooltip.scss?inline';
import type { ZTooltipProps } from './z-tooltip.props';

/** */
@customElement('z-tooltip')
export class ZTooltip extends LitElement implements ZTooltipProps {
  @property()
  tooltip?: string;

  render () {
    return html`
    <div class="z-tooltip">
      <div
        class="z-tooltip__text"
      >
        <slot name="tooltip">
          ${this.tooltip}
        </slot>
      </div>
      <slot name="default" />
    </div>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-tooltip': ZTooltip;
  }
}
