export interface FormElementProps {
  /** ... */
  label?: string;
  /** ... */
  disabled?: boolean;
}

export interface FormElementOption<T extends number | string = string> {
  /** */
  text: string;
  /** */
  value: T;
  /** */
  disabled?: boolean;
}