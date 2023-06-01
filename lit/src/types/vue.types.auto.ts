import type * as Z from '../components';
import type { VueLitComponent } from './vueHelpers.types';

/** Dictionary of components with specifications for Vue 3 */
export interface VueComponents {
  /** ## `<z-currency>`  */
  ZCurrency: VueLitComponent<Z.ZCurrencyProps>;
  /** ## `<z-date>`  */
  ZDate: VueLitComponent;
  /** ## `<z-heading>`  */
  ZHeading: VueLitComponent<Z.ZHeadingProps>;
  /** ## `<z-icon>`  */
  ZIcon: VueLitComponent;
  /** ## `<z-image>`  */
  ZImage: VueLitComponent<Z.ZImageProps>;
  /** ## `<z-number>`  */
  ZNumber: VueLitComponent;
  /** ## `<z-spinner>`  */
  ZSpinner: VueLitComponent<Z.ZSpinnerProps>;
  /** ## `<z-tooltip>`  */
  ZTooltip: VueLitComponent;
  /** ## `<z-card>`  */
  ZCard: VueLitComponent<Z.ZCardProps>;
  /** ## `<z-modal>`  */
  ZModal: VueLitComponent;
  /** ## `<z-button>`  */
  ZButton: VueLitComponent<Z.ZButtonProps>;
  /** ## `<z-checkbox>`  */
  ZCheckbox: VueLitComponent;
  /** ## `<z-chip>`  */
  ZChip: VueLitComponent<Z.ZChipProps>;
  /** ## `<z-label>`  */
  ZLabel: VueLitComponent;
  /** ## `<z-number-input>`  */
  ZNumberInput: VueLitComponent<Z.ZNumberInputProps>;
  /** ## `<z-output>`  */
  ZOutput: VueLitComponent;
  /** ## `<z-select>`  */
  ZSelect: VueLitComponent<Z.ZSelectProps>;
  /** ## `<z-switch>`  */
  ZSwitch: VueLitComponent<Z.ZSwitchProps>;
  /** ## `<z-text-input>`  */
  ZTextInput: VueLitComponent<{}, Z.ZTextInputEmits>;
  /** ## `<z-test-lit>`  */
  ZTestLit: VueLitComponent;
}

declare module '@vue/runtime-core' {
  interface GlobalComponents extends VueComponents { }
}