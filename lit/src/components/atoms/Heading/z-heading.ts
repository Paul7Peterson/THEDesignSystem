
import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-heading.scss?inline';

import type { ReqProp } from '~/types/lit.types';
import type { ZHeadingProps } from './z-heading.props';

@customElement('z-heading')
export class ZHeading extends LitElement implements ZHeadingProps {

  @property({ type: String, attribute: 'text' })
  text!: string;

  @property({ type: Number, attribute: 'level' })
  level: ReqProp<ZHeadingProps, 'level'> = 2;

  render () {
    return html`
    <h1 class="z-heading">
      ${this.text}
    </h1>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-heading': ZHeading;
  }
}
