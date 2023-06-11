

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { emit } from '~/utils';
import SCSS from './z-modal.scss?inline';
import type { ZTabsProps } from './z-tabs.props';
import '../../molecules/Button/z-button';

/** */
@customElement('z-tabs')
export class ZTabs extends LitElement implements ZTabsProps {
  @property({ type: Boolean })
  tabs!: ZTabsProps['tabs'];

  selectedIndex: number = 0;

  render () {

    const tabs = this.tabs.map((tab, i) => html`
      <li
        .id="tab-${i + 1}"
        class="tabs__list__item"
        role="tab"
        tabIndex="0"
        .aria-selected="${i === this.selectedIndex}"
        ?aria-disabled="${tab.disabled}"
        .aria-controls="panel-${i + 1}"
        @click="${this.switchTab(i, tab.disabled)}"
        @keydown.enter="${this.switchTab(i, tab.disabled)}"
      >
        ${tab.title}
      </li>`);

    return html`
      <div 
        .id="${this.id}" 
        class="z-tabs"
      >
        <ul
          class="z-tabs__list"
          role="tablist"
        >
          ${tabs}
        </ul>

        <article
          .id="panel-${this.selectedIndex + 1}"
          .aria-labelledby="tab-${this.selectedIndex + 1}"
          class="z-tabs__content"
          role="tabpanel"
        >
          <!-- <Component :is="getSlots($slots.default)[selectedIndex] || 'div'" /> -->
        </article>
      </div>`;
  }

  switchTab (index: number, isDisabled?: boolean) {
    if (isDisabled) return;

    this.selectedIndex = index;
    emit(this, index, 'tabChanged');
  };

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-tabs': ZTabs;
  }
}
