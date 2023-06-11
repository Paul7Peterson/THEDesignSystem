

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-image.scss?inline';
import type { ZImageProps, ZImageSource } from './z-image.props';

const FALLBACK_IMG = 'https://www.echollywell.co.uk/wp-content/uploads/blank-00cc00_040004000.png';


type RProps = Required<ZImageProps>;

/** */
@customElement('z-image')
export class ZImage extends LitElement implements ZImageProps {
  @property()
  src!: string;
  @property()
  alt!: string;
  @property()
  sources: ZImageSource[] = [];
  @property()
  ratio: RProps['ratio'] = 'auto';

  render () {
    return html`
      <picture class="z-image">
        ${this.sources.map((source) => html`
          <source
            media="(min-width:${source.minWidth}px)"
            .srcset="${source.src}"
          >
        `)}
        <img
          .src="${this.src}"
          .alt="${this.alt}"
          onerror="this.onerror=null; this.src='${FALLBACK_IMG}'"
          style="aspect-ratio:${this.ratio};"
          loading="lazy"
        >
      </picture>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-image': ZImage;
  }
}
