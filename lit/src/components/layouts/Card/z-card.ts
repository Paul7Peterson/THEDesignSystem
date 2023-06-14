

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-card.scss?inline';
import type { ZCardProps } from './z-card.props';


/** */
@customElement('z-card')
export class ZCard extends LitElement implements ZCardProps {
  @property({ type: Number })
  level: ZCardProps['level'] = 4;

  render () {
    return html`
      <article
        class="z-card"
        .style="box-shadow: var(--elevation-${this.level});"
      >
        <slot />
      </article>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-card': ZCard;
  }
}
