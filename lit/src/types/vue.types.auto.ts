import type * as Z from '../components';
import type { VueLitComponent } from './vueHelpers.types';

/** Dictionary of components with specifications for Vue 3 */
export interface VueComponents {
  /** ## `<z-currency>`  
   *  */
  ZCurrency: VueLitComponent<Z.ZCurrencyProps>;
  /** ## `<z-date>`  
   *  */
  ZDate: VueLitComponent<Z.ZDateProps>;
  /** ## `<z-heading>`  
   *  */
  ZHeading: VueLitComponent<Z.ZHeadingProps>;
  /** ## `<IconList>`  
   *  */
  IconList: VueLitComponent;
  /** ## `<z-icon>`  
   * ... */
  ZIcon: VueLitComponent<Z.ZIconProps>;
  /** ## `<z-image>`  
   *  */
  ZImage: VueLitComponent<Z.ZImageProps>;
  /** ## `<z-number>`  
   *  */
  ZNumber: VueLitComponent<Z.ZNumberProps>;
  /** ## `<z-spinner>`  
   *  */
  ZSpinner: VueLitComponent<Z.ZSpinnerProps>;
  /** ## `<z-tooltip>`  
   *  */
  ZTooltip: VueLitComponent<Z.ZTooltipProps>;
  /** ## `<z-card>`  
   *  */
  ZCard: VueLitComponent<Z.ZCardProps>;
  /** ## `<z-modal>`  
   *  */
  ZModal: VueLitComponent<Z.ZModalProps>;
  /** ## `<z-button>`  
   *  */
  ZButton: VueLitComponent<Z.ZButtonProps>;
  /** ## `<z-checkbox>`  
   *  */
  ZCheckbox: VueLitComponent<Z.ZCheckboxProps>;
  /** ## `<z-chip>`  
   *  */
  ZChip: VueLitComponent<Z.ZChipProps>;
  /** ## `<z-label>`  
   * Label */
  ZLabel: VueLitComponent<Z.ZLabelProps>;
  /** ## `<z-number-input>`  
   *  */
  ZNumberInput: VueLitComponent<Z.ZNumberInputProps>;
  /** ## `<z-output>`  
   *  */
  ZOutput: VueLitComponent<Z.ZOutputProps>;
  /** ## `<z-select>`  
   *  */
  ZSelect: VueLitComponent<Z.ZSelectProps>;
  /** ## `<z-switch>`  
   *  */
  ZSwitch: VueLitComponent<Z.ZSwitchProps>;
  /** ## `<z-text-input>`  
   *  */
  ZTextInput: VueLitComponent<Z.ZTextInputProps, Z.ZTextInputEmits>;
  /** ## `<z-test-lit>`  
   *  */
  ZTestLit: VueLitComponent<Z.ZTestLitProps>;
}

declare module '@vue/runtime-core' {
  interface GlobalComponents extends VueComponents { }
}