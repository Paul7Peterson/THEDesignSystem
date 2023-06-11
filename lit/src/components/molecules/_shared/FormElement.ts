import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

import type { FormElementProps } from './FormElement.types';

/** */
export abstract class FormElement extends LitElement implements FormElementProps {
  @property()
  label?: string;

  @property({ type: Boolean })
  disabled?: boolean;

  abstract value: unknown;

  protected onChange () {
    this.dispatchEvent(new CustomEvent('change', {
      detail: this.value,
      bubbles: true,
    }));
  }
}