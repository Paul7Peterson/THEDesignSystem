import type * as Z from '../components';
import type { ReactLitComponent } from './reactHelpers.types';

/** Dictionary of components with specifications for React */
export interface ReactComponents {
  /** ## `<z-currency>`  */
  'z-currency': ReactLitComponent<Z.ZCurrencyProps>;
  /** ## `<z-date>`  */
  'z-date': ReactLitComponent<Z.ZDateProps>;
  /** ## `<z-heading>`  */
  'z-heading': ReactLitComponent<Z.ZHeadingProps>;
  /** ## `<z-icon>`  */
  'z-icon': ReactLitComponent<Z.ZIconProps>;
  /** ## `<z-image>`  */
  'z-image': ReactLitComponent<Z.ZImageProps>;
  /** ## `<z-number>`  */
  'z-number': ReactLitComponent<Z.ZNumberProps>;
  /** ## `<z-spinner>`  */
  'z-spinner': ReactLitComponent<Z.ZSpinnerProps>;
  /** ## `<z-tooltip>`  */
  'z-tooltip': ReactLitComponent<Z.ZTooltipProps>;
  /** ## `<z-card>`  */
  'z-card': ReactLitComponent<Z.ZCardProps>;
  /** ## `<z-modal>`  */
  'z-modal': ReactLitComponent<Z.ZModalProps>;
  /** ## `<z-button>`  */
  'z-button': ReactLitComponent<Z.ZButtonProps>;
  /** ## `<z-checkbox>`  */
  'z-checkbox': ReactLitComponent<Z.ZCheckboxProps>;
  /** ## `<z-chip>`  */
  'z-chip': ReactLitComponent<Z.ZChipProps>;
  /** ## `<z-label>`  */
  'z-label': ReactLitComponent<Z.ZLabelProps>;
  /** ## `<z-number-input>`  */
  'z-number-input': ReactLitComponent<Z.ZNumberInputProps>;
  /** ## `<z-output>`  */
  'z-output': ReactLitComponent<Z.ZOutputProps>;
  /** ## `<z-select>`  */
  'z-select': ReactLitComponent<Z.ZSelectProps>;
  /** ## `<z-switch>`  */
  'z-switch': ReactLitComponent<Z.ZSwitchProps>;
  /** ## `<z-text-input>`  */
  'z-text-input': ReactLitComponent<Z.ZTextInputProps, Z.ZTextInputEmits>;
  /** ## `<z-test-lit>`  */
  'z-test-lit': ReactLitComponent<Z.ZTestLitProps>;
}