import type * as Z from '../components';
import type { VueLitComponent } from './vueHelpers.types';

/** Dictionary of components with specifications for Vue 3 */
export interface VueComponents {
  /** ## `<test-lit>` */
  TestLit: VueLitComponent<Z.TestLitProps>;
  /** ## `<z-icon>` */
  ZIcon: VueLitComponent<Z.ZIconProps>;
  /** ## `<z-button>` */
  ZButton: VueLitComponent<Z.ZButtonProps>;
  /** ## `<z-text-input>` */
  ZTextInput: VueLitComponent<Z.ZTextInputProps, Z.ZTextInputEmits>;
}
