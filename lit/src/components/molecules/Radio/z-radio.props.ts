import type { FormElementOption, FormElementProps } from '../_shared/FormElement.types';

export interface ZRadioProps extends FormElementProps {
  /** */
  value: string;
  /** */
  name: string;
  /** */
  options: FormElementOption[];
}
