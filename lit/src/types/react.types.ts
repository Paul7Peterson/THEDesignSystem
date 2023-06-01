import type * as Z from '../components';
import type { ReactLitComponent } from './reactHelpers.types';

/** Dictionary of components with specifications for React */
export interface ReactComponents {
  /** ## `<z-icon>` */
  'z-icon': ReactLitComponent<Z.ZIconProps>;
  /** ## `<z-button>` */
  'z-button': ReactLitComponent<Z.ZButtonProps>;
  /** ## `<z-text-input>` */
  'z-text-input': ReactLitComponent<Z.ZTextInputProps, Z.ZTextInputEmits>;
}