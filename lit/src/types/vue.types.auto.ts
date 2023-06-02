import type * as Z from '../components';
import type { VueLitComponent } from './vueHelpers.types';

/** Dictionary of components with specifications for Vue 3 */
export interface VueComponents {
  /** ## `<z-currency>` ## `<z-currency>`  
 */
  ZCurrency: VueLitComponent<Z.ZCurrencyProps>;
  /** ## `<z-date>` ## `<z-date>`  
 */
  ZDate: VueLitComponent<Z.ZDateProps>;
  /** ## `<z-heading>` ## `<z-heading>`  
 */
  ZHeading: VueLitComponent<Z.ZHeadingProps>;
  /** ## `<z-icon>` ## `<z-icon>`  
... */
  ZIcon: VueLitComponent<Z.ZIconProps>;
  /** ## `<z-image>` ## `<z-image>`  
 */
  ZImage: VueLitComponent<Z.ZImageProps>;
  /** ## `<z-number>` ## `<z-number>`  
 */
  ZNumber: VueLitComponent<Z.ZNumberProps>;
  /** ## `<z-spinner>` ## `<z-spinner>`  
 */
  ZSpinner: VueLitComponent<Z.ZSpinnerProps>;
  /** ## `<z-tooltip>` ## `<z-tooltip>`  
 */
  ZTooltip: VueLitComponent<Z.ZTooltipProps>;
  /** ## `<z-card>` ## `<z-card>`  
 */
  ZCard: VueLitComponent<Z.ZCardProps>;
  /** ## `<z-modal>` ## `<z-modal>`  
 */
  ZModal: VueLitComponent<Z.ZModalProps>;
  /** ## `<z-button>` ## `<z-button>`  
 */
  ZButton: VueLitComponent<Z.ZButtonProps>;
  /** ## `<z-checkbox>` ## `<z-checkbox>`  
 */
  ZCheckbox: VueLitComponent<Z.ZCheckboxProps>;
  /** ## `<z-chip>` ## `<z-chip>`  
 */
  ZChip: VueLitComponent<Z.ZChipProps>;
  /** ## `<z-label>` ## `<z-label>`  
Label */
  ZLabel: VueLitComponent<Z.ZLabelProps>;
  /** ## `<z-number-input>` ## `<z-number-input>`  
 */
  ZNumberInput: VueLitComponent<Z.ZNumberInputProps>;
  /** ## `<z-output>` ## `<z-output>`  
 */
  ZOutput: VueLitComponent<Z.ZOutputProps>;
  /** ## `<z-select>` ## `<z-select>`  
 */
  ZSelect: VueLitComponent<Z.ZSelectProps>;
  /** ## `<z-switch>` ## `<z-switch>`  
 */
  ZSwitch: VueLitComponent<Z.ZSwitchProps>;
  /** ## `<z-text-input>` ## `<z-text-input>`  
 */
  ZTextInput: VueLitComponent<Z.ZTextInputProps, Z.ZTextInputEmits>;
  /** ## `<z-test-lit>` ## `<z-test-lit>`  
 */
  ZTestLit: VueLitComponent<Z.ZTestLitProps>;
}

declare module '@vue/runtime-core' {
  interface GlobalComponents extends VueComponents { }
}