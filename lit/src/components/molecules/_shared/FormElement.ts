import { property } from 'lit/decorators.js';
import type { FormElementProps } from './FormElement.types';
import { LitElement } from 'lit';

export abstract class FormElement extends LitElement implements FormElementProps {
  @property()
  label?: string;

  @property({ type: Boolean })
  disabled?: boolean;
}