

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import SCSS from './z-tabs.scss?inline';
import '../../molecules/Button/z-button';

import type { ZTabsProps } from './z-tabs.props';
import type { ZTab } from './z-tab';

/** */
@customElement('z-tabs')
export class ZTabs extends LitElement implements ZTabsProps {
  @state()
  selectedIndex: number = 0;

  @state()
  tabChildren: ZTab[] = [];

  constructor () {
    super();
    this.tabChildren = Array.from(this.children)
      .filter(({ localName }) => localName === 'z-tab') as ZTab[];
  }

  render () {
    const tabs = this.tabChildren.map((tab, i) => html`
      <li
        .id="tab-${i + 1}"
        class="z-tabs__list__item"
        role="tab"
        tabIndex="0"
        ?aria-selected="${i === this.selectedIndex}"
        ?aria-disabled="${tab.disabled}"
        .aria-controls="panel-${i + 1}"
        @click=${() => this.switchTab(i, tab.disabled)}
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
         ${this.#selectedTab}
        </article>
      </div>`;
  }


  get #selectedTab (): ZTab {
    return this.tabChildren[this.selectedIndex];
  }

  switchTab (index: number, isDisabled?: boolean) {
    console.log('tab', index);
    if (isDisabled) return;

    this.selectedIndex = index;
    // this.dispatchEvent(new CustomEvent('tabChanged', {
    //   detail: index,
    //   bubbles: true,
    // }));
  };

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-tabs': ZTabs;
  }
}
