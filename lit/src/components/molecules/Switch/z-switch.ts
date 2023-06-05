

import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import SCSS from './z-switch.scss?inline';
import { emitEvent } from '~/utils';
import { ZSwitchProps } from './z-switch.props';
import { FormElement } from '../_shared/FormElement';


/** */
@customElement('z-switch')
export class ZSwitch extends FormElement implements ZSwitchProps {
  @property({ type: Boolean })
  value!: boolean;

  render () {
    return html`
      <div class="z-switch">
        <div class="z-switch__input">
          <input
            .id="${this.id}"
            type="checkbox"
            ?disabled="${this.disabled}"
            @input=${(e: Event) => emitEvent(this, e, 'value')} 
          >
          <span class="z-switch__slider" />
        </div>
      </div>
    `;
  }

  static styles = unsafeCSS(SCSS);
}

declare global {
  interface HTMLElementTagNameMap {
    'z-switch': ZSwitch;
  }
}
