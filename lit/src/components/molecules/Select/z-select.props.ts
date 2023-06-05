import type { FormElementOption, FormElementProps } from '../_shared/FormElement.types';

export interface ZSelectProps extends FormElementProps {
  /** */
  value: string;
  /** */
  options: FormElementOption[];
}
