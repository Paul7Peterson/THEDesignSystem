

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-select.scss?inline';
import { ArrayConverter } from '~/utils/converters';
import type { ZSelectProps } from './z-select.props';

/** */
@customElement('z-select')
export class ZSelect extends LitElement implements ZSelectProps {
  @property({})
  value!: ZSelectProps['value'];
  @property({ converter: ArrayConverter })
  options!: ZSelectProps['options'];

  render () {
    return html`
    <select .value="${this.value}">
      ${this.options.map(({ text, value }) =>
      html`<option .value="${value}">${text}</option>`)}
    </select>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-select': ZSelect;
  }
}
