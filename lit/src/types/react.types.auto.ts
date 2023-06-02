import type * as Z from '../components';
import type { ReactLitComponent } from './reactHelpers.types';

/** Dictionary of components with specifications for React */
export interface ReactComponents {
  /** ## `<z-currency>` undefined */
  'z-currency': ReactLitComponent<Z.ZCurrencyProps>;
  /** ## `<z-date>` undefined */
  'z-date': ReactLitComponent<Z.ZDateProps>;
  /** ## `<z-heading>` undefined */
  'z-heading': ReactLitComponent<Z.ZHeadingProps>;
  /** ## `<z-icon>` undefined */
  'z-icon': ReactLitComponent<Z.ZIconProps>;
  /** ## `<z-image>` undefined */
  'z-image': ReactLitComponent<Z.ZImageProps>;
  /** ## `<z-number>` undefined */
  'z-number': ReactLitComponent<Z.ZNumberProps>;
  /** ## `<z-spinner>` undefined */
  'z-spinner': ReactLitComponent<Z.ZSpinnerProps>;
  /** ## `<z-tooltip>` undefined */
  'z-tooltip': ReactLitComponent<Z.ZTooltipProps>;
  /** ## `<z-card>` undefined */
  'z-card': ReactLitComponent<Z.ZCardProps>;
  /** ## `<z-modal>` undefined */
  'z-modal': ReactLitComponent<Z.ZModalProps>;
  /** ## `<z-button>` undefined */
  'z-button': ReactLitComponent<Z.ZButtonProps>;
  /** ## `<z-checkbox>` undefined */
  'z-checkbox': ReactLitComponent<Z.ZCheckboxProps>;
  /** ## `<z-chip>` undefined */
  'z-chip': ReactLitComponent<Z.ZChipProps>;
  /** ## `<z-label>` undefined */
  'z-label': ReactLitComponent<Z.ZLabelProps>;
  /** ## `<z-number-input>` undefined */
  'z-number-input': ReactLitComponent<Z.ZNumberInputProps>;
  /** ## `<z-output>` undefined */
  'z-output': ReactLitComponent<Z.ZOutputProps>;
  /** ## `<z-select>` undefined */
  'z-select': ReactLitComponent<Z.ZSelectProps>;
  /** ## `<z-switch>` undefined */
  'z-switch': ReactLitComponent<Z.ZSwitchProps>;
  /** ## `<z-text-input>` undefined */
  'z-text-input': ReactLitComponent<Z.ZTextInputProps, Z.ZTextInputEmits>;
  /** ## `<z-test-lit>` undefined */
  'z-test-lit': ReactLitComponent<Z.ZTestLitProps>;
}