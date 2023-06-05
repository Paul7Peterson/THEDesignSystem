

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-modal.scss?inline';
import type { ZModalProps } from './z-modal.props';
import '../../molecules/Button/z-button';

/** */
@customElement('z-modal')
export class ZModal extends LitElement implements ZModalProps {
  // @property({ type: Boolean })
  // open?: boolean;

  close (): void {
    const dialog = this.renderRoot.firstElementChild;
    if (!(dialog instanceof HTMLDialogElement))
      throw new Error(`No dialog`);
    dialog.close();
  }

  open (): void {
    const dialog = this.renderRoot.firstElementChild;
    if (!(dialog instanceof HTMLDialogElement))
      throw new Error(`No dialog`);
    if (!dialog.open) dialog.showModal();
  }

  render () {
    return html`
      <dialog 
        .id="${this.id}" 
        class="z-modal"
      >
        <!-- <form method="dialog"> -->
          <div>
            <slot name="default"/>
          </div>

          <div>
            <z-button text="Close" @click="${this.close}"/>
          </div>
        <!-- </form> -->
      </dialog>`;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-modal': ZModal;
  }
}
