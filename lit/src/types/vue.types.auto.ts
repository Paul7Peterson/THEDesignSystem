import type * as Z from '../components';
import type { VueLitComponent } from './vueHelpers.types';

/** Dictionary of components with specifications for Vue 3 */
export interface VueComponents {
  /** ## `<z-currency>` undefined */
  ZCurrency: VueLitComponent<Z.ZCurrencyProps>;
  /** ## `<z-date>` undefined */
  ZDate: VueLitComponent<Z.ZDateProps>;
  /** ## `<z-heading>` undefined */
  ZHeading: VueLitComponent<Z.ZHeadingProps>;
  /** ## `<z-icon>` undefined */
  ZIcon: VueLitComponent<Z.ZIconProps>;
  /** ## `<z-image>` undefined */
  ZImage: VueLitComponent<Z.ZImageProps>;
  /** ## `<z-number>` undefined */
  ZNumber: VueLitComponent<Z.ZNumberProps>;
  /** ## `<z-spinner>` undefined */
  ZSpinner: VueLitComponent<Z.ZSpinnerProps>;
  /** ## `<z-tooltip>` undefined */
  ZTooltip: VueLitComponent<Z.ZTooltipProps>;
  /** ## `<z-card>` undefined */
  ZCard: VueLitComponent<Z.ZCardProps>;
  /** ## `<z-modal>` undefined */
  ZModal: VueLitComponent<Z.ZModalProps>;
  /** ## `<z-button>` undefined */
  ZButton: VueLitComponent<Z.ZButtonProps>;
  /** ## `<z-checkbox>` undefined */
  ZCheckbox: VueLitComponent<Z.ZCheckboxProps>;
  /** ## `<z-chip>` undefined */
  ZChip: VueLitComponent<Z.ZChipProps>;
  /** ## `<z-label>` undefined */
  ZLabel: VueLitComponent<Z.ZLabelProps>;
  /** ## `<z-number-input>` undefined */
  ZNumberInput: VueLitComponent<Z.ZNumberInputProps>;
  /** ## `<z-output>` undefined */
  ZOutput: VueLitComponent<Z.ZOutputProps>;
  /** ## `<z-select>` undefined */
  ZSelect: VueLitComponent<Z.ZSelectProps>;
  /** ## `<z-switch>` undefined */
  ZSwitch: VueLitComponent<Z.ZSwitchProps>;
  /** ## `<z-text-input>` undefined */
  ZTextInput: VueLitComponent<Z.ZTextInputProps, Z.ZTextInputEmits>;
  /** ## `<z-test-lit>` undefined */
  ZTestLit: VueLitComponent<Z.ZTestLitProps>;
}

declare module '@vue/runtime-core' {
  interface GlobalComponents extends VueComponents { }
}