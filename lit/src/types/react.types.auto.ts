import type * as Z from '../components';
import type { ReactLitComponent } from './reactHelpers.types';

/** Dictionary of components with specifications for React */
export interface ReactComponents {
  /** ## `<z-currency>`  */
  'z-currency': ReactLitComponent<Z.ZCurrencyProps>;
  /** ## `<z-date>`  */
  'z-date': ReactLitComponent;
  /** ## `<z-heading>`  */
  'z-heading': ReactLitComponent<Z.ZHeadingProps>;
  /** ## `<z-icon>`  */
  'z-icon': ReactLitComponent;
  /** ## `<z-image>`  */
  'z-image': ReactLitComponent<Z.ZImageProps>;
  /** ## `<z-number>`  */
  'z-number': ReactLitComponent;
  /** ## `<z-spinner>`  */
  'z-spinner': ReactLitComponent<Z.ZSpinnerProps>;
  /** ## `<z-tooltip>`  */
  'z-tooltip': ReactLitComponent;
  /** ## `<z-card>`  */
  'z-card': ReactLitComponent<Z.ZCardProps>;
  /** ## `<z-modal>`  */
  'z-modal': ReactLitComponent;
  /** ## `<z-button>`  */
  'z-button': ReactLitComponent<Z.ZButtonProps>;
  /** ## `<z-checkbox>`  */
  'z-checkbox': ReactLitComponent;
  /** ## `<z-chip>`  */
  'z-chip': ReactLitComponent<Z.ZChipProps>;
  /** ## `<z-label>`  */
  'z-label': ReactLitComponent;
  /** ## `<z-number-input>`  */
  'z-number-input': ReactLitComponent<Z.ZNumberInputProps>;
  /** ## `<z-output>`  */
  'z-output': ReactLitComponent;
  /** ## `<z-select>`  */
  'z-select': ReactLitComponent<Z.ZSelectProps>;
  /** ## `<z-switch>`  */
  'z-switch': ReactLitComponent<Z.ZSwitchProps>;
  /** ## `<z-text-input>`  */
  'z-text-input': ReactLitComponent<{}, Z.ZTextInputEmits>;
  /** ## `<z-test-lit>`  */
  'z-test-lit': ReactLitComponent;
}