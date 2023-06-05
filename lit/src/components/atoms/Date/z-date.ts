

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-date.scss?inline';
import { dateConverter } from '~/utils/converters';
import type { ZDateProps } from './z-date.props';


/** */
@customElement('z-date')
export class ZDate extends LitElement implements ZDateProps {

  @property({ converter: dateConverter, reflect: true })
  date!: Date;
  @property()
  locale: Required<ZDateProps['locale']> = 'en';
  @property()
  options?: Intl.DateTimeFormatOptions;

  get stamp (): string {
    return this.date.toLocaleDateString(this.locale, this.options);
  }

  render () {
    return html`
      <time 
        class="z-date"
        .datetime="${this.date.toISOString()}"
      >
        ${this.stamp}
      </time>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-date': ZDate;
  }
}
