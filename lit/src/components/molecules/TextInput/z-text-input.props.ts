import type { FormElementProps } from '../_shared/FormElement.types';

/** Text input props */
export interface ZTextInputProps extends FormElementProps {
  /** Text model */
  value: string;
}


/** Text input emits */
export interface ZTextInputEmits {
  'change:text'?: (text: CustomEvent<string>) => void;
}