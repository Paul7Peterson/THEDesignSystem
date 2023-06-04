import type * as Z from '../components';
import type { VueLitComponent } from './vueHelpers.types';

/** Dictionary of components with specifications for Vue 3 */
export interface VueComponents {
  /** ## `<z-currency.ts>`  
   *  */
  ZCurrency: VueLitComponent<Z.ZCurrencyProps>;
  /** ## `<z-date.ts>`  
   *  */
  ZDate: VueLitComponent<Z.ZDateProps>;
  /** ## `<z-heading.ts>`  
   *  */
  ZHeading: VueLitComponent<Z.ZHeadingProps>;
  /** ## `<z-icon.ts>`  
   * ... */
  ZIcon: VueLitComponent<Z.ZIconProps>;
  /** ## `<z-image.ts>`  
   *  */
  ZImage: VueLitComponent<Z.ZImageProps>;
  /** ## `<z-number.ts>`  
   *  */
  ZNumber: VueLitComponent<Z.ZNumberProps>;
  /** ## `<z-spinner.ts>`  
   *  */
  ZSpinner: VueLitComponent<Z.ZSpinnerProps>;
  /** ## `<z-tooltip.ts>`  
   *  */
  ZTooltip: VueLitComponent<Z.ZTooltipProps>;
  /** ## `<z-card.ts>`  
   *  */
  ZCard: VueLitComponent<Z.ZCardProps>;
  /** ## `<z-modal.ts>`  
   *  */
  ZModal: VueLitComponent<Z.ZModalProps>;
  /** ## `<z-button.ts>`  
   *  */
  ZButton: VueLitComponent<Z.ZButtonProps>;
  /** ## `<z-checkbox.ts>`  
   *  */
  ZCheckbox: VueLitComponent<Z.ZCheckboxProps>;
  /** ## `<z-chip.ts>`  
   *  */
  ZChip: VueLitComponent<Z.ZChipProps>;
  /** ## `<z-label.ts>`  
   * Label */
  ZLabel: VueLitComponent<Z.ZLabelProps>;
  /** ## `<z-number-input.ts>`  
   *  */
  ZNumberInput: VueLitComponent<Z.ZNumberInputProps>;
  /** ## `<z-output.ts>`  
   *  */
  ZOutput: VueLitComponent<Z.ZOutputProps>;
  /** ## `<z-select.ts>`  
   *  */
  ZSelect: VueLitComponent<Z.ZSelectProps>;
  /** ## `<z-switch.ts>`  
   *  */
  ZSwitch: VueLitComponent<Z.ZSwitchProps>;
  /** ## `<z-text-input.ts>`  
   *  */
  ZTextInput: VueLitComponent<Z.ZTextInputProps, Z.ZTextInputEmits>;
  /** ## `<z-test-lit.ts>`  
   *  */
  ZTestLit: VueLitComponent<Z.ZTestLitProps>;
}

declare module '@vue/runtime-core' {
  interface GlobalComponents extends VueComponents { }
}