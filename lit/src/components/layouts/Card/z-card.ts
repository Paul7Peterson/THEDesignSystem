

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import SCSS from './z-card.scss?inline';
import type { ZCardProps } from './z-card.props';


/** */
@customElement('z-card')
export class ZCard extends LitElement implements ZCardProps {

  render () {
    return html`
    <article
      class="z-card"
    >
      <slot name="default" />
    </article>
    `;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-card': ZCard;
  }
}
