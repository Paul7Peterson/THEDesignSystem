import type * as Z from '../components';
import type { ReactLitComponent } from './reactHelpers.types';

/** Dictionary of components with specifications for React */
export interface ReactComponents {
  /** ## `<z-currency.ts>`  
   *  */
  'z-currency': ReactLitComponent<Z.ZCurrencyProps>;
  /** ## `<z-date.ts>`  
   *  */
  'z-date': ReactLitComponent<Z.ZDateProps>;
  /** ## `<z-heading.ts>`  
   *  */
  'z-heading': ReactLitComponent<Z.ZHeadingProps>;
  /** ## `<z-icon.ts>`  
   * ... */
  'z-icon': ReactLitComponent<Z.ZIconProps>;
  /** ## `<z-image.ts>`  
   *  */
  'z-image': ReactLitComponent<Z.ZImageProps>;
  /** ## `<z-number.ts>`  
   *  */
  'z-number': ReactLitComponent<Z.ZNumberProps>;
  /** ## `<z-spinner.ts>`  
   *  */
  'z-spinner': ReactLitComponent<Z.ZSpinnerProps>;
  /** ## `<z-tooltip.ts>`  
   *  */
  'z-tooltip': ReactLitComponent<Z.ZTooltipProps>;
  /** ## `<z-card.ts>`  
   *  */
  'z-card': ReactLitComponent<Z.ZCardProps>;
  /** ## `<z-modal.ts>`  
   *  */
  'z-modal': ReactLitComponent<Z.ZModalProps>;
  /** ## `<z-button.ts>`  
   *  */
  'z-button': ReactLitComponent<Z.ZButtonProps>;
  /** ## `<z-checkbox.ts>`  
   *  */
  'z-checkbox': ReactLitComponent<Z.ZCheckboxProps>;
  /** ## `<z-chip.ts>`  
   *  */
  'z-chip': ReactLitComponent<Z.ZChipProps>;
  /** ## `<z-label.ts>`  
   * Label */
  'z-label': ReactLitComponent<Z.ZLabelProps>;
  /** ## `<z-number-input.ts>`  
   *  */
  'z-number-input': ReactLitComponent<Z.ZNumberInputProps>;
  /** ## `<z-output.ts>`  
   *  */
  'z-output': ReactLitComponent<Z.ZOutputProps>;
  /** ## `<z-select.ts>`  
   *  */
  'z-select': ReactLitComponent<Z.ZSelectProps>;
  /** ## `<z-switch.ts>`  
   *  */
  'z-switch': ReactLitComponent<Z.ZSwitchProps>;
  /** ## `<z-text-input.ts>`  
   *  */
  'z-text-input': ReactLitComponent<Z.ZTextInputProps, Z.ZTextInputEmits>;
  /** ## `<z-test-lit.ts>`  
   *  */
  'z-test-lit': ReactLitComponent<Z.ZTestLitProps>;
}