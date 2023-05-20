import type * as Z from '../components';
import type { VueLitComponent } from './vueHelpers.types';

export { };

declare module '@vue/runtime-core' {
  interface GlobalComponents {
    /** ## `<test-lit>` */
    TestLit: Z.TestLitProps;
    /** ## `<z-button>` */
    ZButton: VueLitComponent<Z.ZButtonProps>;
    /** ## `<z-text-input>` */
    ZTextInput: VueLitComponent<Z.ZTextInputProps, Z.ZTextInputEmits>;
  }
}
