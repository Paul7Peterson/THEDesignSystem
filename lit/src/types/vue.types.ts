import type * as Z from '../components';
import type { VueLitComponent } from './vueHelpers.types';


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
