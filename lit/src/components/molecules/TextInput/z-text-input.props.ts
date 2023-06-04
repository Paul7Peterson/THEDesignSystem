
/** Text input props */
export interface ZTextInputProps {
  /** Text model */
  text: string;
}


/** Text input emits */
export interface ZTextInputEmits {
  'change:text'?: (text: CustomEvent<string>) => void;
}